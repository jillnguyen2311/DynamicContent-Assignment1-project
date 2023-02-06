import Head from 'next/head'
import Image from 'next/legacy/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/about.module.css'
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

       </> 
        )
}
