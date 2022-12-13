/*===== Components =====*/
import React from "react"
import Button1 from '@components/Button1'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'
import utilStyles from '@styles/utils.module.css'

export default function Asset({ 
  //Props
  image, imageAlt, name, link
}) {
  return (
    <div className={componentStyles.AssetOuter}>
      <div 
        className={componentStyles.Asset} 
        data-popupcard="card-1"
      >
        <p>[ASSET THUMBNAIL]</p>
        <p>[ASSET NAME]</p>
        <p>[ASSET TYPE]</p>
      </div>
    </div>
    
  )
}
