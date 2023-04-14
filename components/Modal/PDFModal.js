/*===== Components =====*/
import React from "react"
import Link from 'next/link'
import CloseIcon from '@components/SVGComponents/CloseIcon'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function PDFModal({ 
  //Props
  url, title, defaultZoom, disclaimerCopy,
}) {

  //console.log(author);

  return (
    <div className={componentStyles.PDFModal}>

      <div 
        className={componentStyles.closeButton}
        data-modal-close
      >
        <CloseIcon/>
      </div>
      
      <div className={componentStyles.titleArea}>
        NO-US-2200226_BMS10289 AS Sample SOB Form_Pending Determination_FINAL.pdf
      </div>

      <div className={componentStyles.iframeWrapper}>
        <iframe src={url+"#view=FitH"} frameborder="0"></iframe>
      </div>
      
      <div className={componentStyles.copyArea}>
        <p>
          The accurate completion of reimbursement- or coverage-related documentation is the responsibility of the healthcare provider and patient. Bristol Myers Squibb and its agents make no guarantee regarding reimbursement for any service or item.
        </p>
      </div>

    </div>
  )
}
