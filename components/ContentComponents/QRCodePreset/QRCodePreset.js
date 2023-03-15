/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import ZoomIcon from '@components/SVGComponents/ZoomIcon'
import QRCode from "react-qr-code";
import tippy from 'tippy.js';

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function QRCodePreset({ 
  //Props
  link, toolTipText, color
}) {

  //console.log(author);
  useEffect(() => {
    //JS GOES HERE
    tippy('[data-tippy-content]', {
      placement: 'right',
      arrow: true,
      theme: 'light',
      animation: 'fade',
      show: true,
    });
  /*  let tippyVal = 
    tippy('[data-tippy]', {
      content: tippyVal,
      //trigger: 'manual',
      placement: 'right',
    });*/

    /*const instance = tippy(document.querySelector('[data-tippy-content]'));
    instance.show();*/
  });

  return (
    <div className={componentStyles.QRCodePreset}>
      <QRCode 
          value={link ? link : "https://bms-kiosk-staging.netlify.app/"}
          size={256}
          bgColor="#ffffff"
          fgColor="#212121"
          style={{ height: "auto", width: "8vw" }}
          data-tippy-content={toolTipText}
          
        />
    </div>
  )
}
