/*===== Components =====*/
import React from "react"
import Link from 'next/link'
import Date from '@components/date'
import SocialIcons from '@components/SocialIcons'
import Button1 from '@components/Button1'
import QRCode from "react-qr-code";

/*===== Styles =====*/
import componentStyles from './styles.module.scss'
import utilStyles from '@styles/utils.module.css'

export default function SupportModal({ 
  //Props
  children, heading, 
}) {

  //console.log(author);

  return (
    <div id="SupportModal" className={componentStyles.outer}>
      <div className={componentStyles.SupportModal}>
        
        <div className={componentStyles.heading}>
          <h2>3 Ways to Get Support</h2>
          <p>In-person, phone, and online assistance are available for your Access &amp; Reimbursement Support needs.</p>
        </div>
        
        <div className={componentStyles.body}>

          {/*Column 1*/}
          <div className={componentStyles.column}>
            <div className={componentStyles.columnHeading}>
              {/*<img className={componentStyles.icon} src="" alt=""/>*/}
              <p className={componentStyles.icon}>&#9746;</p>
              <h3  className={componentStyles.hTag}>
                In-Person Support
              </h3>
            </div>
            <div className={componentStyles.columnBody}>
              <p>
                Our Local Access &amp; Reimbursement Managers (ARMs) can visit your office to:
              </p>
              <ul>
                <li>Educate and create awareness about Access Support resources</li>
                <li>Assist with case status tracking and provide reimbursement claims &amp; appeals support </li>
                <li>Provide a real-time response to customer questions </li>
                <li>Share knowledge regarding local healthcare landscape</li>
              </ul>
            </div>
            <div className={componentStyles.columnFooter}>
              <h4>Schedule a visit from an ARM:</h4>
              <div className={componentStyles.qrCode}>
                <QRCode 
                  value="https://www.youtube.com/watch?v=hNfDNORPU4Y"
                  size={150}
                  bgColor="#fafafa"
                  fgColor="#212121"
                  style={{ height: "auto", maxWidth: "200px", width: "100%" }}
                />
              </div>
            </div>
          </div>

          {/*Coumn 2*/}
          <div className={componentStyles.column}>
            <div className={componentStyles.columnHeading}>
              {/*<img className={componentStyles.icon} src="" alt=""/>*/}
              <p className={componentStyles.icon}>&#9746;</p>
              <h3  className={componentStyles.hTag}>
                Phone Support
              </h3>
            </div>
            <div className={componentStyles.columnBody}>
              <p>
                Our Patient Access Specialists provide responsive, specialized support via phone or provider portal, which includes: ADD Schedule a call with PAS (link to website form)
              </p>
              <ul>
                <li>Familiarity with all aspects of BMS Access Support® services and provide real-time answers to general HCP questions</li>
                <li>Provide knowledge of state-specific insurance policies to assist with access to treatment</li>
                <li>Assist with claims tracking and provide details for specific BMS cases for patients who have enrolled in BMS Access Support® and have submitted patient authorization</li>
              </ul>
            </div>
            <div className={componentStyles.columnFooter}>
              <h4>Schedule a call with PAS:</h4>
              <div className={componentStyles.qrCode}>
                <QRCode 
                  value="https://www.youtube.com/watch?v=hNfDNORPU4Y"
                  size={150}
                  bgColor="#fafafa"
                  fgColor="#212121"
                  style={{ height: "auto", maxWidth: "200px", width: "100%" }}
                />
              </div>
            </div>
          </div>

          {/*Column 3*/}
          <div className={componentStyles.column}>
            <div className={componentStyles.columnHeading}>
              {/*<img className={componentStyles.icon} src="" alt=""/>*/}
              <p className={componentStyles.icon}>&#9746;</p>
              <h3  className={componentStyles.hTag}>
                Online Support
              </h3>
            </div>
            <div className={componentStyles.columnBody}>
              <p>
                BMSAccessSupport.com provides on-demand online support, which includes:
              </p>
              <ul>
                <li>Supporting seamless customer experience</li>
                <li>Enabling quick access to reimbursement, co-pay programs, and other resources</li>
                <li>Providing enrollment forms and additional documents</li>
                <li>For select medications, you can enroll patients through the provider portal, MyBMSCases.com</li>
              </ul>
            </div>
            <div className={componentStyles.columnFooter}>
              <h4>Visit us online:</h4>
              <div className={componentStyles.qrCode}>
                <QRCode 
                  value="https://www.youtube.com/watch?v=hNfDNORPU4Y"
                  size={150}
                  bgColor="#fafafa"
                  fgColor="#212121"
                  style={{ height: "auto", maxWidth: "200px", width: "100%" }}
                />
              </div>
            </div>
          </div>
        </div>

        <div className={componentStyles.modalFooter}>
          <h5></h5>
          <p></p>
        </div>

      </div>
    </div>
    
  )
}
