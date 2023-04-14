/*===== Components =====*/
import React from "react"
import Link from 'next/link'
import PDFModal from './PDFModal'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

export default function Modal({ 
  //Props
  children, pdf, support, 
}) {

  //console.log(author);

  return (

    <div className={componentStyles.ModalWrapper}>
      
      {/*Backdrop filter, click to close*/}
      <div className={componentStyles.backdrop} />
      
      <div className={componentStyles.modalInner}>

      <PDFModal url="/pdf/test.pdf" />
        
        {pdf && 
          <PDFModal url={pdf ? pdf : "/pdf/test.pdf"} />
        }  

      </div>

    </div>
  )
}
