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
  const modalClose = () => {
    const element = document.getElementById("PdfModal");
    element.setAttribute('data-modal-status', 'inactive');
  }

  const closeClick = () => {
    modalClose();
  };

  return (

    <div 
      id="PdfModal"
      className={componentStyles.ModalWrapper}
      data-modal-status="inactive"
    >
      
      {/*Backdrop filter, click to close*/}
      <div 
        className={componentStyles.backdrop} 
        onClick={modalClose}
      />
      
      <div className={componentStyles.modalInner}>

      <PDFModal url="/pdf/test.pdf" />
        
        {pdf && 
          <PDFModal url={pdf ? pdf : "/pdf/test.pdf"} />
        }  

      </div>

    </div>
  )
}
