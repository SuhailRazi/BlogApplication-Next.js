"use client";
import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import Link from 'next/link';
import Image from 'next/image';

const Blog = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/posts', { cache: 'no-store' });

        if (!res.ok) {
          throw new Error('Failed to fetch data');
        }

        const jsonData = await res.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className={styles.mainContainer}>
      {data.map((oneData) => (
        <Link key={oneData._id} href={`/blog/${oneData._id}`} className={styles.container}>
          <div className={styles.imageContainer}>
            <Image src={oneData.img} alt='' width={400} height={250} className={styles.image} />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{oneData.title}</h1>
            <p className={styles.desc}>{oneData.body}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;