"use client";
import React, { useState } from 'react'
import styles from './page.module.css';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Register = () => {

  const [error, setError] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try{
      const res = await fetch("/api/auth/register",{
        method: 'POST',
        headers: {
          "Content-Type" : 'application/json',
        },
        body: JSON.stringify({
          name, email, password
        }),
      });

      if(res.ok){
        router.push("/dashboard/login?success=Account has been created");
      }else{
        setError(true);
      }
    }catch(error){
      setError(true);
    }
  }


  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
          <input type='text' placeholder='Username' className={styles.input} required />
          <input type='email' placeholder='Email' className={styles.input} required />
          <input type='password' placeholder='Password' className={styles.input} required />
          <button className={styles.button}>Register</button>
      </form>
          <Link href="/dashboard/login">Login with an existing account</Link>
          {error && <p>User already exist!</p>}
    </div>
  )
}

export default Register