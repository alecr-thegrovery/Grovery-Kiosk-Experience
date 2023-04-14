/*===== Components =====*/
import React from "react"
import ZoomIcon from '@components/SVGComponents/ZoomIcon'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function PdfThumbnail({ 
  //Props
  thumbnail, icon, name
}) {

  //console.log(author);

  const modalOpenDetect = () => {
    const element = document.getElementById("PdfModal");
    console.log("modal test success - start");
    if (element.getAttribute('data-active') == "active") {
      //Modal is open, close it
      console.log("modal test success - close");
      element.setAttribute('data-active', 'inactive');
    } else {
      //Modal is closed, open it
      console.log("modal test success - open");
      element.setAttribute('data-active', 'active');
    }
  }

  const handleClick = () => {
    modalOpenDetect();
  };


  return (
    <div className={componentStyles.PdfThumbnail}>

      <div className={componentStyles.thumbnail}>
        {thumbnail ? 
          <img src={thumbnail} alt="" />
          :
          <img src="/images/thumbnails/oncologyEnrollmentForm.png" alt="" />
        }
        <div className={"PdfModalButton "+componentStyles.thumbnailIcon} onClick={handleClick}>
          <ZoomIcon/>
        </div>
      </div>

      <div className={componentStyles.text}>
        {name ? name : "PDF Name"}
      </div>

    </div>
  )
}
