/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import { router } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import $ from 'jquery'
import Layout, { siteData } from '@components/layout'

import DynamicHeader from '@components/DynamicHeader'
import DynamicFooter from '@components/DynamicFooter'
import ComputerFrame from '@components/SVGComponents/ComputerFrame'
import TransitionScreen from '@components/SVGComponents/TransitionScreen'
import BlockQuote from '@components/ContentComponents/BlockQuote'
import PdfThumbnail from '@components/ContentComponents/PdfThumbnail'
import VideoThumbnail from '@components/ContentComponents/VideoThumbnail'
import QRCodePreset from "@components/ContentComponents/QRCodePreset";

/*===== Styles =====*/
import utilStyles from '@styles/utils.module.css'
import pageStyles from '@styles/pages.module.scss'

let title = "NEW AssistPoint Integration";
let footerText = "";

export default function Post({ postData }) {
  return (
    <Layout resources pageActionState="lvl-3" backButtonUrl="/resources">
      
      <Head>
        <title>{title} | {siteData.siteTitleBase}</title>
      </Head>
      <div className={pageStyles.pageLayout}>
        {/*Header*/}
        <DynamicHeader
          heading={[<strong>NEW</strong>, " AssistPoint Integration"]}
        />

        {/*Content*/}
        <div className={pageStyles.pageLevel3} data-bg-color="blue">        
          <TransitionScreen screen="10"/>     
          <section className={pageStyles.mainSection}>
            <ComputerFrame frame="1">
              {/*Inner Page Content*/}

              <div className={pageStyles.twoColumn}>
                {/*LEFT CELL*/}
                <div className={pageStyles.cell}>

                  <p>
                    Our video library contains useful information that may help answer common questions related to accessing a patient’s prescribed BMS medication.
                  </p>
                  <p>
                    Our resources help provide a better understanding of the health insurance landscape. They are located on the Forms & Resources page of the BMS Access Support website.
                  </p>
                  <QRCodePreset 
                    link="https://www.bmsaccesssupport.bmscustomerconnect.com/forms-resources?utm_source=bms_congress_access_app&utm_medium=qr_code_scan&utm_campaign=congress_access_event"
                    toolTipText="Scan to view Forms &amp; Resources"
                    toolTipPlacement="right"
                  />
                  
                </div>               

                {/*RIGHT CELL*/}
                <div className={pageStyles.cell} data-centered>
                  <VideoThumbnail
                    thumbnail="/images/content/as-video-generic-poster_ss.png"
                    name="What is health insurance?" 
                    url="https://players.brightcove.net/1892432924001/default_default/index.html?videoId=5729106370001"
                  />
                  <br/><br/>
                  <VideoThumbnail
                    thumbnail="/images/content/as-video-generic-poster_ss.png"
                    name="What is an Explanation of Benefits (EOB)? " 
                    url="https://players.brightcove.net/1892432924001/default_default/index.html?videoId=5729102364001"
                  />
                </div>

              </div>
            </ComputerFrame>            
          </section>
        </div>        

        {/*Footer*/}
        <DynamicFooter
          dynamicText={footerText}
        />
      </div>
      
      
    </Layout>
  )
}


