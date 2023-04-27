/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import $ from 'jquery'
import ZoomIcon from '@components/SVGComponents/ZoomIcon'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function PdfThumbnail({ 
  //Props
  thumbnail, icon, name, url
}) {

  //console.log(author);

  /*function modalOpenDetect(this) {
    let ModalWrapper = document.getElementById("ModalWrapper");
    let pdfLink = this.getAttribute('data-pdf-url');
    console.log(pdfLink);
    if (ModalWrapper.getAttribute('data-modal-status') == "active") {
      //Modal is open, close it
      ModalWrapper.setAttribute('data-modal-status', 'inactive');
      ModalWrapper.setAttribute('data-modal-show', '');
    } else {
      //Modal is closed, open it
      ModalWrapper.setAttribute('data-modal-status', 'active');
      ModalWrapper.setAttribute('data-modal-show', 'PDFModal');
    }
  }

  const handleClick = (this) => {
    modalOpenDetect(this);
  };*/

  useEffect(() => {
    $(document).ready(function() {
      //vars
      let ModalWrapper = $("#ModalWrapper");
      let PDFWindow = $("#PDFModal iframe");

      //open modal
      $("[data-modal-open='pdf']").click(function(e){
        console.log("pdf thumbnail click");
        e.preventDefault();
        //set PDF in iframe
        let pdfLink = $(this).attr('data-pdf-url');
        console.log(pdfLink);
        PDFWindow.attr("src", pdfLink+"#view=FitH"); 
        //activate PDF modal
        ModalWrapper.attr("data-modal-status", "active");
        ModalWrapper.attr("data-modal-show", "PDFModal");
        
      });

      //close modal
      $("[data-modal-close]").click(function(e){
        e.preventDefault();
        ModalWrapper.attr("data-modal-status", "inactive");
      });

    });
  });

  return (
    <div 
      className={componentStyles.PdfThumbnail}
      /*onClick={handleClick(this)}*/
      data-modal-open='pdf'
      data-pdf-url={url}
    >

      <div className={componentStyles.thumbnail}>
        {thumbnail ? 
          <img src={thumbnail} alt="" />
          :
          <img src="/images/thumbnails/oncologyEnrollmentForm.png" alt="" />
        }
        <div className={componentStyles.thumbnailIcon}>
          <ZoomIcon/>
        </div>
      </div>

      <div className={componentStyles.text}>
        {name ? name : "PDF Name"}
      </div>

    </div>
  )
}
