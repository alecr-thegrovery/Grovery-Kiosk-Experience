/*===== Components =====*/
import React from "react"
import ZoomIcon from '@components/SVGComponents/ZoomIcon'
import QRCode from "react-qr-code";

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function QRCodePreset({ 
  //Props
  link, toolTipText, color
}) {

  //console.log(author);

  return (
    <div className={componentStyles.QRCodePreset}>
      <QRCode 
          value={link ? link : "https://bms-kiosk-staging.netlify.app/"}
          size={256}
          bgColor="#ffffff"
          fgColor="#212121"
          style={{ height: "auto", width: "8vw" }}
        />
    </div>
  )
}
