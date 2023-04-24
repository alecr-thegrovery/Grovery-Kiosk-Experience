/*===== Components =====*/
import React from "react"
import Link from 'next/link'
import Date from '@components/date'
import SocialIcons from '@components/SocialIcons'
import Button1 from '@components/Button1'
import QRCodePreset from "@components/ContentComponents/QRCodePreset";

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function SupportModal({ 
  //Props
  children, heading, 
}) {

  //console.log(author);

  return (
    <div 
      id="SupportModal" 
      data-modal="support" 
      data-modal-status="inactive"
      className={componentStyles.outer}
    >
      
      <div 
        className={componentStyles.backDrop} 
        data-modal-close="support"
      ></div>

      <div className={componentStyles.SupportModal}>
        <div className={componentStyles.modalInner}>
          
          <div className={componentStyles.modalClose} data-modal-close="support">&#10005;</div>        

          <div className={componentStyles.heading}>
            <h2>3 Ways to Get Support</h2>
            <p>Visit BMSAccessSupport.com for on-demand online support, or schedule a call or in-office visit with one of our specialists.</p>
          </div>
          
          <div className={componentStyles.body}>

            {/*Column 1*/}
            <div className={componentStyles.column}>
              
              <div className={componentStyles.columnHeading}>
                <img className={componentStyles.icon} src="/images/icons/support-modal-icon-1.png" alt=""/>
                <h3  className={componentStyles.hTag}>
                  Online Support at BMSAccessSupport.com
                </h3>
              </div>
              
              <div className={componentStyles.columnBody}>
                <ul>
                  <li>Quick access to reimbursement information and co-pay program information</li>
                  <li>Easy enrollment through the provider portal</li>
                </ul>
              </div>            
            </div>

            {/*Column 2*/}
            <div className={componentStyles.column}>
              
              <div className={componentStyles.columnHeading}>
                <img className={componentStyles.icon} src="/images/icons/support-modal-icon-2.png" alt=""/>
                <h3  className={componentStyles.hTag}>
                  Phone Support from a Patient Access Specialist
                </h3>
              </div>
              
              <div className={componentStyles.columnBody}>
                <ul>
                  <li>Get answers regarding state-specific insurance policies, general HCP topics, and all Access Support services</li>
                  <li>Assistance with claims tracking and    specific BMS cases with submitted PA for enrolled patients</li>
                </ul>
              </div>            
            </div>

            {/*Column 3*/}
            <div className={componentStyles.column}>
              
              <div className={componentStyles.columnHeading}>
                <img className={componentStyles.icon} src="/images/icons/support-modal-icon-3.png" alt=""/>
                <h3  className={componentStyles.hTag}>
                  In-Person Support with a Local Access &amp; Reimbursement Manager (ARM)
                </h3>
              </div>
              
              <div className={componentStyles.columnBody}>
                <ul>
                  <li>Real-time responses to Access Support and case-related questions</li>
                  <li>Assistance with case status tracking, reimbursement claims, and appeals</li>
                </ul>
              </div>            
            </div>
          </div>

          <div className={componentStyles.qrCode}>
            <QRCodePreset 
              link="https://www.youtube.com/watch?v=nM4okRvCg2g"
              toolTipText="Visit BMSAccessSupport.com to schedule support assistance"
              toolTipPlacement="right"
            />
          </div>

          <div className={componentStyles.modalFooter}>
            <h5>
              Have questions or want to learn more about how BMS Access Support<sup>&reg;</sup> can help assist your patients?
              <br/>
              Touch base with the BMS Access &amp; Reimbursement Manager at this booth. We’re happy to help you.
            </h5>
            <p>The accurate completion of reimbursement- or coverage-related documentation is the responsibility of the healthcare provider and patient. Bristol Myers Squibb and its agents make no guarantee regarding reimbursement for any service or item.</p>
          </div>

        </div>
      </div>
    </div>
    
  )
}
