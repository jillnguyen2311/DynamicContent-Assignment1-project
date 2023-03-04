import Head from 'next/head'
import Image from 'next/legacy/image'
import styles from '@/styles/Home.module.css'
import React, { Components, useState, useEffect } from 'react';
import Menu from '@/components/menu';
import Link from 'next/link';

export default function Home() {
  return (
    <>

      <Head>
        <title>Home</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - Home Page" />
        <meta property="og:description" content="BCIT Digital Design and Development Diploma" />


        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>


      <main className={styles.body}>

        <div className={styles.navicons}>
          <Menu />

          <Image
            src="/graduation-hat.png"
            height={40} width={70}
          />
        </div>

        <div className={styles.textboxOutside}>
          <div className={styles.textbox}>
            <h1>An investment in knowledge pays the best interest.</h1>
            <hr className={styles.line}></hr>
            <p>Different than a college or university, the British Columbia Institute of Technology offers practical, flexible, applied education with instructors who have direct, hands-on experience in their field.</p>
            <a href="/about">
              <button className={styles.transButt}>More About Us</button>
            </a>

            <a href="/contact">
              <button className={styles.transButt}>Contact Us</button>
            </a>
          </div>
        </div>
      </main>


      <Link href="/about">
        <span className={styles.arrows}>
          <Image
            src="/downwardArrow.png"
            height={40} width={30}
            className={styles.downArrows}
          />
        </span>
      </Link>

    </>
  )
}
