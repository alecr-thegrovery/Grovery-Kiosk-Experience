/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import { router } from 'next/router'
import $ from 'jquery'
import Door from "./Door"
import Container from '@components/Container'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'
import utilStyles from '@styles/utils.module.css'

export default function ContentEnrollment({ 
  //Props
  access, enrollment, financial, resources
}) {

  //console.log(author);
  useEffect(() => {
    
  });

  return (
    <>
      <div className={componentStyles.cell}>
        <Door
          title="Options to Enroll"
          link="/enrollment-2?slide=1"
        />
      </div>

      <div className={componentStyles.cell}>
        <Door
          title="How to Complete the Enrollment Form"
          link="/enrollment-2?slide=2"
        />
      </div>

      <div className={componentStyles.cell}>
        <Door
          title="Provider Portal (myBMScases.com)"
          link="/enrollment-2?slide=3"
        />
      </div>

      <div className={componentStyles.cell}>
        <Door
          title="Annexus / AssistPoint Enrollment"
          link="/enrollment-2?slide=4"
        />
      </div>

      <div className={componentStyles.cell}>
        <Door
          title="Options to Enroll"
          link="/enrollment-2?slide=5"
        />
      </div>
    </>
  )
}
