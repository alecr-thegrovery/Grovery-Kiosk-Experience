/*===== Components =====*/
import React from "react"
import ZoomIcon from '@components/SVGComponents/ZoomIcon'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function PdfThumbnail({ 
  //Props
  thumbnail, icon, name, url
}) {

  //console.log(author);

  const modalOpenDetect = () => {
    const element = document.getElementById("ModalWrapper");
    if (element.getAttribute('data-modal-status') == "active") {
      //Modal is open, close it
      element.setAttribute('data-modal-status', 'inactive');
      element.setAttribute('data-modal-show', '');
    } else {
      //Modal is closed, open it
      element.setAttribute('data-modal-status', 'active');
      element.setAttribute('data-modal-show', 'PDFModal');
    }
  }

  const handleClick = () => {
    modalOpenDetect();
  };


  return (
    <div 
      className={componentStyles.PdfThumbnail}
      onClick={handleClick}
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
