import Head from 'next/head'
import Image from 'next/legacy/image'
import styles from '@/styles/about.module.css'
import React, { Components, useState, useEffect } from 'react'
import Carousel from '@/components/carousel'
import Menu from '@/components/menu'
import Link from 'next/link';


export default function About() {
  return (
    <>

      <Head>
        <title>About Us</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - About Us Page" />
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
          <h1 className={styles.titleText}>About Us</h1>
          <hr className={styles.line}></hr>
        </div>

        <div className={styles.description}>
          <p>We are proud to deliver an education that goes beyond textbooks and classrooms.</p>
          <p>Our students gain the technical skills, real-world experience, and problem-solving ability needed to embrace complexity and lead innovation in a rapidly changing workforce.</p>
          <p>Through close collaboration with industry, our network of alumni and partners continue to achieve global success.</p>

          <h2>Information Sessions</h2>

          <p>Information sessions are a simple way to figure out the next step along your career path. Learn more about the programs that interest you.</p>

          <h3>Big Info</h3>

          <p>Big Info is the largest program expo and information session at BCIT. It's your chance to find out about all our programs - from business, computing, and heath to engineering, trades, and applied sciences.</p>
          <p>If you missed our fall event the next Big Info is scheduled to return on February 15, 2023</p>

          <h2>Campus Tours</h2>

          <p>Tours run weekdays September to May, on our Burnaby campus. See BCIT in person and get a taste of campus life.</p>
        </div>



        <Carousel />

        <div className={styles.title}>
          <hr className={styles.line}></hr>
          <h1 className={styles.titleText}>DEPARTMENTS</h1>
          <hr className={styles.line}></hr>
        </div>

        <div className={styles.listCenter}>
        <ul className={styles.list}>
          <li>Applied & Natural Sciences</li>
          <li>Business & Media</li>
          <li>Computing & IT</li>
          <li>Engineering</li>
          <li>Health Sciences</li>
          <li>Trades & Apprenticeships</li>
        </ul>
        </div>

      </main>

      <div className={styles.arrows}>
        <Link href="/.">
          <span>
            <Image
              src="/upwardArrow.png"
              height={40} width={30}
            />
          </span>
        </Link>

        <Link href="/contact">
          <span>
            <Image
              src="/downwardArrow.png"
              height={40} width={30}
            />
          </span>
          </Link>

      </div>

    </>
  )
}
