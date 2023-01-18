import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import data from "@data/data.json"
import $ from 'jquery'

import DesktopNav from '@components/DesktopNav'
import NavMenu from '@components/NavMenu'
import Footer from '@components/Footer'
import Container from '@components/Container'
import BackToHome from '@components/BackToHome'
import SmallScreenWarning from '@components/SmallScreenWarning'

export const siteTitle = 'Next.js Sample Website'
export const siteData = data

export default function Layout({ children, home }) {
  
  useEffect(() => {
    $(document).ready(function() {
      smoothLoad();

      function smoothLoad(){
        let bufferTime = 250;
        setTimeout(function() { 
            $("#LayoutOuter").attr("data-hidden", "false");
        }, bufferTime);
      }
    });
  });

  return (
    <div id="LayoutOuter" className={styles.outer} data-hidden="true">
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Simple blog-style template for Planet Caravan Studios"
        />
        <meta property="og:image"
          content={`/images/planet-caravan-studios-logo.png`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>

      <SmallScreenWarning/>
      
      <section className={styles.header}>
        <DesktopNav/>
        <NavMenu/>
      </section>
      

      {/* MAIN SECTION */}
      <main className={styles.main}>
        
          {/* BREADCRUMBS */}
          {/*{!home && (
            <Container>
              <div className={styles.backToHome}>
                <Link href="/">
                  <a>← Back to home</a>
                </Link>
              </div>
            </Container>
          )}*/}
          
          <div>
            {children}
          </div>

          <div className={styles.rightSidebar}>
            <div className={styles.inner}>
              
              <div className={styles.questionsButton}>
                <a href="#">QUESTIONS</a>
              </div>

              <div className={styles.scanner}>
                <div className={styles.scannerBorder}>
                  <div className={styles.light}></div>
                  <div className={styles.icon}>icon</div>
                  <div className={styles.text}>
                    <p>
                      Place your access card here
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.controls}>
                <div>Back</div>
                <div>Home</div>
              </div>

            </div>
          </div>
  
      </main>

      <section className={styles.footer}>
        {!home && <BackToHome/>}
        {/*<Footer/>*/}  
      </section>
      
      
    </div>
  )
}
