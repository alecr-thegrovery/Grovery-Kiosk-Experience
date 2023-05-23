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
import PdfLink from '@components/ContentComponents/PdfLink'
import QRCodePreset from "@components/ContentComponents/QRCodePreset";

/*===== Styles =====*/
import utilStyles from '@styles/utils.module.css'
import pageStyles from '@styles/pages.module.scss'

let title = "NEW AssistPoint Integration";
let footerText = "";

export default function Post({ postData }) {
  return (
    <Layout financial pageActionState="lvl-3" backButtonUrl="/financial">
      
      <Head>
        <title>{title} | {siteData.siteTitleBase}</title>
      </Head>
      <div className={pageStyles.pageLayout}>
        {/*Header*/}
        <DynamicHeader
          heading={["Commercial Patients"]}
          subhead={["BMS Access Support may be able to help identify financial assistance programs for eligible patients who have been prescribed select BMS medications and need help managing the cost of treatment. The appropriate program will depend on the patient’s coverage."]}
        />

        {/*Content*/}
        <div className={pageStyles.pageLevel3} data-bg-color="blue">          
          <TransitionScreen screen="7"/>
          <section className={pageStyles.mainSection}>
            <ComputerFrame frame="1">
              {/*Inner Page Content*/}

              <div className={pageStyles.oneColumn}>
                  
                  <p >
                   Please Note:  The program will cover the out-of-pocket expenses of the BMS product only. It does not cover the costs of any other healthcare provider charges or any other treatment costs. Patients may be responsible for non-drug-related, out-of-pocket costs, depending on their specific healthcare benefits. Restrictions apply. 
                  </p>

                  <BlockQuote icon="/images/icons/contentFormIcon.svg">
                    <ul>
                      <li>
                        <PdfLink url="/pdf/Empliciti_Opdivo_O_Y_Opdualag_Yervoy_T_C.pdf" name="Empliciti_Opdivo_O+Y_Opdualag_Yervoy_T_C.pdf">Terms and Conditions for Empliciti, Opdivo, Opdivo + Yervoy, Opdualag, &amp; Yervoy</PdfLink>
                      </li>
                      <li>
                        <PdfLink url="/pdf/Abraxane_Reblozyl_T_C.pdf" name="Abraxane_Reblozyl_T_C.pdf">Terms and Conditions for Abraxane &amp; Reblozyl</PdfLink>
                      </li>
                      <li>
                        <PdfLink url="/pdf/Heme_Orals_Terms_and_Conditions.pdf" name="Heme_Orals_Terms_and_Conditions.pdf">Terms and Conditions for Idhifa, Inrebic, Onureg, Pomalyst, Revlimid, &amp; Thalomid</PdfLink>
                      </li>
                      <li>
                        <PdfLink url="/pdf/Sprycel_Terms_and_Conditions_Copay_Card.pdf" name="Sprycel_Terms_and_Conditions_Copay_Card.pdf">Terms and Conditions for Sprycel</PdfLink>
                      </li>
                    </ul>
                  </BlockQuote>

                  <img src="/images/content/commerical-patients-image-1-v2.png" alt=""/>
                  <br/><br/>
                  <img src="/images/content/commerical-patients-image-2.jpg" alt=""/>

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


