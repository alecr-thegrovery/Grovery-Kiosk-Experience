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
import QRCodePreset from "@components/ContentComponents/QRCodePreset";

/*===== Styles =====*/
import utilStyles from '@styles/utils.module.css'
import pageStyles from '@styles/pages.module.scss'

let title = "NEW AssistPoint Integration";
let footerText = "";

export default function Post({ postData }) {
  return (
    <Layout financial pageActionState="lvl-3">
      
      <Head>
        <title>{title} | {siteData.siteTitleBase}</title>
      </Head>
      <div className={pageStyles.pageLayout}>
        {/*Header*/}
        <DynamicHeader
          heading={["Government & Uninsured Patients"]}
          subhead="BMS Access Support may be able to help identify financial assistance programs for eligible patients who have been prescribed select BMS medications and need help managing the cost of treatment. The appropriate program will depend on the patient’s coverage."
        />

        {/*Content*/}
        <div className={pageStyles.pageLevel3}>       
          <TransitionScreen screen="8"/>      
          <section className={pageStyles.mainSection}>
            <ComputerFrame frame="1">
              {/*Inner Page Content*/}

              <div className={pageStyles.twoColumn}>
                {/*LEFT CELL*/}
                <div className={pageStyles.cell}>

                  <p>
                    Patients who are not covered by prescription drug insurance or insured through Federal Healthcare Programs are not eligible for co-pay assistance programs sponsored by Bristol Myers Squibb. BMS Access Support may be able to refer patients to independent charitable foundations. 
                  </p>
                  <p>
                    Scan the QR code below, or call 1-800-861-0048 for details. 
                  </p>
                  <QRCodePreset 
                    link="https://www.bmsaccesssupport.bmscustomerconnect.com/access14/charitable-foundations-resource?utm_source=bms_congress_access_app&utm_medium=qr_code_scan&utm_campaign=congress_access_event"
                    toolTipText="Visit the charitable foundations page at BMSAccessSupport.com"
                    toolTipPlacement="right"
                  />
                  <br/>
                  <p className={pageStyles.italics}>
                    Please Note: Each charitable foundation is independent from Bristol Myers Squibb and will have its own eligibility criteria and evaluation process. Bristol Myers Squibb cannot guarantee that a patient will receive assistance.
                  </p>
                  
                </div>               

                {/*RIGHT CELL*/}
                <div className={pageStyles.cell} data-centered>
                  <img src="/images/content/bmsas-charitable-foundations-resource.png" alt="" />
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


