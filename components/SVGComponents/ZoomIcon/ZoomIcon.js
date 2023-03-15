/*===== Components =====*/
import React from "react"

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function ZoomIcon({ 
  //Props
  id, children, fillColor
}) {

  //console.log(author);

  return (
    <div className={componentStyles.ZoomIcon}>
      <svg  width="64.5" height="78.162" viewBox="0 0 64.5 78.162">
        <defs>
          <clipPath id="clip-path">
            <rect id="Rectangle_1857" data-name="Rectangle 1857" width="64.5" height="78.162" fill="#a69f9f"/>
          </clipPath>
        </defs>
        <g id="Group_1368" data-name="Group 1368" clip-path="url(#clip-path)">
          <path id="Path_5172" data-name="Path 5172" d="M63.692,69.293,48.028,46.739c-.045-.065-.1-.111-.152-.171a27.682,27.682,0,1,0-9.856,6.754c.057.084.084.179.147.258L53.831,76.138c1.622,2.345,5.154,2.7,7.876.815s3.6-5.319,1.986-7.661M9.7,40.154a21.883,21.883,0,1,1,30.46,5.49A21.881,21.881,0,0,1,9.7,40.154" transform="translate(0 0)" fill="#908a89"/>
          <path id="Path_5173" data-name="Path 5173" d="M47.7,42.439h8.074v4.7H47.7V55.4h-4.7V47.137H34.92v-4.7h8.074V34.3h4.7Z" transform="translate(-17.463 -17.154)" fill="#be2bbb"/>
        </g>
      </svg>


    </div>
      
  )
}
