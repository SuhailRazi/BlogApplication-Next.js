import React from 'react'
import styles from "./page.module.css";
import Image from 'next/image';
import { notFound } from 'next/navigation';

async function getData(postId) {
  const res = await fetch(`http://localhost:3000/api/posts/${postId}`, {cache: 'no-store'});
 
  if (!res.ok) {
    throw notFound()
  }
 
  return res.json()
}

export async function generateMetadata({ params }) {

  const data = await getData(params.id)
  return {
    title: data.title,
    description: data.desc
  }
}


const BlogPost = async ({params}) => {

  const data  = await getData(params.id);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
          <div className={styles.info}>
              <h1 className={styles.title}>
               {data?.title}
              </h1>
              <p className={styles.desc}>
                {data?.body}
              </p>
              <div className={styles.author}>
                <Image 
                  src='https://images.pexels.com/photos/2965690/pexels-photo-2965690.jpeg?auto=compress&cs=tinysrgb&w=600'
                  alt=''
                  width={40}
                  height={40}
                  className={styles.avatar}
                />
                <span className={styles.username}>{data?.username}</span>
              </div>
          </div>
          <div className={styles.imageContainer}>
            <Image
              src={data?.img}
              alt=''
              fill={true}
              className={styles.image}
            />
          </div>
      </div>
      <div className={styles.content}>
          <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  )
}

export default BlogPost