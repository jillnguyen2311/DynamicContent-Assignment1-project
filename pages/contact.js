import Head from 'next/head'
import Image from 'next/legacy/image'
import styles from '@/styles/contact.module.css'
import React, { Components, useState, useEffect } from 'react'
import Form from '@/components/Form'
import Menu from '@/components/menu'
import Link from 'next/link'


export default function Contact() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [mail, setMail] = useState('')

  return (
    <>
      <Head>
        <title>Contact Us</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - Contact Us Page" />
        <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
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

        <div className={styles.title}>
          <hr className={styles.line}></hr>
          <h1 className={styles.titleText}>Contact Us</h1>
          <hr className={styles.line}></hr>
        </div>

        <div className={styles.description}>
          <p>Want to discuss? Lets chat!</p>
        </div>

        <div className={styles.contactBox}>
          <Form navigate="/." />
        </div>
      </main>

      <Link href="/.">
        <span className={styles.arrows}>
          <Image
            src="/upwardArrow.png"
            height={40} width={30}
            className={styles.downArrows}
          />
        </span>
      </Link>


    </>
  )
}