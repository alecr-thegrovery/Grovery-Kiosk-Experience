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
    <Layout resources pageActionState="lvl-3">
      
      <Head>
        <title>{title} | {siteData.siteTitleBase}</title>
      </Head>
      <div className={pageStyles.pageLayout}>
        {/*Header*/}
        <DynamicHeader
          heading="Patient Brochures"
        />

        {/*Content*/}
        <div className={pageStyles.pageLevel3}>    
          <TransitionScreen screen="9"/>        
          <section className={pageStyles.mainSection}>
            <ComputerFrame frame="1">
              {/*Inner Page Content*/}

              <div className={pageStyles.twoColumn}>
                {/*LEFT CELL*/}
                <div className={pageStyles.cell}>
                  <BlockQuote icon="/images/icons/contentFormIcon.svg">
                    <p>Patients can download brochures and coverage-related resources to understand their health insurance benefits. </p>
                  </BlockQuote>

                  <p>
                    <strong>Understanding Your Healthcare Benefits</strong>
                    <br/>
                    In-depth information on how health insurance works and ways BMS Access Support can help
                  </p>
                  <p>
                    <strong>Patient Reimbursement Process Journey Map</strong>
                    <br/>
                    A high-level flow map showing potential patient insurance coverage scenarios and claims processing information
                  </p>

                  <p>
                    <strong>A Guide to 2023 Medicare Part D Coverage for Specialty Drugs</strong>
                    <br/>
                    A step-by-step guide through each phase of Medicare Part D with patient cost journey examples and additional resources and contact information
                  </p>
                  <p>
                    <strong>BMS Access Support Patient Brochure</strong>
                    <br/>
                    An overview of the coverage journey and how to gain access to your prescribed BMS medications
                  </p>

                  <p className={pageStyles.italics}>
                    Our resources help provide a better understanding of the health insurance landscape and expectations along the treatment journey. They are located on the Forms &amp; Resources page of the BMS Access Support website.   
                  </p>

                  <QRCodePreset 
                    link="https://www.bmsaccesssupport.bmscustomerconnect.com/forms-resources?utm_source=bms_congress_access_app&utm_medium=qr_code_scan&utm_campaign=congress_access_event"
                    toolTipText="Scan to view Forms &amp; Resources"
                    toolTipPlacement="right"
                  />
                  
                </div>               

                {/*RIGHT CELL*/}
                <div className={pageStyles.cell} data-centered>
                  <PdfThumbnail name="Understanding Healthcare Benefits" />
                  <PdfThumbnail name="Patient Reimbursement Process Map" />
                  <PdfThumbnail name="AS Sample SOB Form Pending Determination" />
                  <PdfThumbnail name="BMS Access Support Patient Brochure" />
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


