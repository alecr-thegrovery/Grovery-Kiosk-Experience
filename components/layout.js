import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { router } from 'next/router'
import styles from './layout.module.scss'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import data from "@data/data.json"
import $ from 'jquery'

import DesktopNav from '@components/DesktopNav'
import NavMenu from '@components/NavMenu'
import Sidebar from '@components/Sidebar'
import Footer from '@components/Footer'
import Container from '@components/Container'
import BackToHome from '@components/BackToHome'
import SmallScreenWarning from '@components/SmallScreenWarning'

export const siteTitle = 'Next.js Sample Website'
export const siteData = data

export default function Layout({ 
  //PROPS
  children, home, card,
  access, enrollment, financial, resources
}) {
  
  useEffect(() => {
    $(document).ready(function() {
      smoothLoad();

      function smoothLoad(){
        let bufferTime = 250;
        setTimeout(function() { 
            $("#LayoutOuter").attr("data-hidden", "false");
        }, bufferTime);
      }

      function pageTransition(url, delay){
        console.log("page-transition: " + url + " | "+ delay);
        router.prefetch(url); //prefetch next page
        setTimeout(function() { 
          $("#LayoutOuter").attr("data-hidden", "true"); //page transition
          setTimeout(function() { 
            router.push(url); //move user to next page
          }, 250); //allow time for page transition
        }, delay); //allow time for element animations
      } //END pageTransition function

      let url = "";
      let delay = 1000;

      $("[data-page-transition]").click(function(){
        console.log("data-page-transition click");
        url = $(this).attr("data-page-transition");
        delay = $(this).attr("data-delay");
        pageTransition(url, delay);
      }); 

      $("[data-page-back]").click(function(){
        console.log("data-page-back click");
        window.history.back()
        /*url = window.history.back();
        delay = 0;
        console.log(url);
        pageTransition(url, delay);*/
      }); 

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
      
      {/*<section className={styles.header}>
        <DesktopNav/>
        <NavMenu/>
      </section>*/}

      

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
          
          <div className={styles.mainContent}>
            {children}
          </div>

          <div className={styles.rightSidebar}>
            <Sidebar 
              card={card}
              access={access}
              enrollment={enrollment}
              financial={financial}
              resources={resources}
              home={home}
            />
          </div>
  
      </main>

      {/*<section className={styles.footer}>
        <Footer/>
      </section>*/}
      
      
    </div>
  )
}
