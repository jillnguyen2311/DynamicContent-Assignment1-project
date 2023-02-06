import Head from 'next/head'
import Image from 'next/legacy/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import React, { Components, useState, useEffect } from 'react';
import data from '../data/info.json'


const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <>
    
      <Head>
        <title>Home</title>
        <meta name="descriptionOne" content="MDIA 2109" />
        <meta name="descriptionTwo" content="Assignment #1 - Home Page" />
        <meta name="descriptionThree" content="BCIT Digital Design and Development Diploma" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Image
        src="/backgroundMountain.jpg"
        layout="fill"
        objectFit="cover"
      />
      <main className={styles.mainArea}>
      <div className={styles.navicons}>
          <Image
            src="/menu-icon.png"
            height={40} width={50}
            className={styles.menu}
          />
          <Image
            src="/graduation-hat.png"
            height={40} width={70}
            className={styles.graduationHat}
          />
        </div>

        <div className={styles.arrows}>
        <Image
            src="/downwardArrow.png"
            height={40} width={30}
            className={styles.menu}
          />
        </div>

        <div className={styles.mainArea}>
            <h1>An investment in knowledge pays the best interest</h1>
            <p>Different than a college or university, the British Comlumbia Institute of Technology offers practical, flexible, applied education with instructors who have direct, hands-on experience in their field</p>
            <button>More About Us</button>
            <button>Contact Us</button>
        </div>
      
        
        
      </main>
    </>
  )
}
