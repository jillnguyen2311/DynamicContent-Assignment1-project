import Head from 'next/head'
import Image from 'next/legacy/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/contact.module.css'
import React, { Components, useState, useEffect } from 'react';
import data from '../data/info.json'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
      <>
      <Head>
        <title>Home</title>
        <meta name="descriptionOne" content="MDIA 2109" />
        <meta name="descriptionTwo" content="Assignment #1 - Contact Page" />
        <meta name="descriptionThree" content="BCIT Digital Design and Development Diploma" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Image
        src="/backgroundMountainUpsideDown.jpg"
        layout="fill"
        objectFit="cover"
      />
      <main className={styles.mainArea}>
      <div className={styles.loginBox}>
        <label>First Name: </label>
        <input
          type="text"
          id="first"
          name="first"
          pattern="[A-Z]{1}[a-z]{2-10}"
          title='the first letter should be capital'
          onChange={(e=> setFormData({...formData, firstName: e.target.value}))}
        />

        <label>User Name: </label>
        <input
          type="text"
          id="username"
          name="username"
          required 
          title='the first letter should be capital'
          maxLength="10"
          minlength="5"
          onChange={(e=> setFormData({...formData, username: e.target.value}))}
        />
        <button className={styles.button} type="submit" onClick={() => CheckLogin()}>Submit</button>

        </div>
      </main>
    </>
  )
}