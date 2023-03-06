/*===== Components =====*/
import React from "react"
import Link from 'next/link'
import Date from '@components/date'
import SocialIcons from '@components/SocialIcons'
import Button1 from '@components/Button1'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'
import utilStyles from '@styles/utils.module.css'

export default function ComputerFrame({ 
  //Props
  id, children
}) {

  //console.log(author);

  return (
    <div className={componentStyles.ComputerFrame}>
      {/*<svg xmlns="http://www.w3.org/2000/svg" width="1397.008" height="793.629" viewBox="0 0 1397.008 793.629">
        <defs>
          
        </defs>
        
        <g id="Layer_3" dataName="Layer 3" transform="translate(-4556.753 -1397.173)">
          <g id="Group_62" dataName="Group 62">
            <path id="Path_64" dataName="Path 64" className={componentStyles.cls1} d="M5275.057,2263.657l47.566-148.009H5182.555l-57.9,180.153h256.326v-32.144Z" transform="translate(0 -105)"/>
            <path id="Path_3508" dataName="Path 3508" className={componentStyles.cls2} d="M5275.057,2263.657l47.566-148.009H5182.555l-57.9,180.153h140.067Z" transform="translate(18 -161)"/>
            <path id="Path_3507" dataName="Path 3507" className={componentStyles.cls3} d="M0,0H1395.008V717.476H0Z" transform="translate(4557.753 1398.173)"/>
            <path id="Path_3507_-_Outline" dataName="Path 3507 - Outline" className={componentStyles.cls4} d="M-1-1H1396.008V718.476H-1ZM1394.008,1H1V716.476H1394.008Z" transform="translate(4557.753 1398.173)"/>
            <rect id="Rectangle_45" dataName="Rectangle 45" className={componentStyles.cls5} width="1393.008" height="56.268" transform="translate(4558.752 2058.381)"/>
            <rect id="Rectangle_46" dataName="Rectangle 46" className={componentStyles.cls5} width="1393.008" height="51.067" transform="translate(4558.752 1399.172)"/>
            <ellipse id="Ellipse_4" dataName="Ellipse 4" className={componentStyles.cls6} cx="12.86" cy="13.149" rx="12.86" ry="13.149" transform="translate(5246.067 1412.125)"/>
          </g>
        </g>

        <foreignObject className={componentStyles.content} x="0" y="0" width="500" height="500">
          {children}
        </foreignObject>

      </svg>*/}

      {/*<svg id="computerOne" xmlns="http://www.w3.org/2000/svg" width="1400" height="793.83" viewBox="0 0 1400 793.83">
       
        <g id="computerFrameGroup" transform="translate(-4555.346 -1396.972)">
          <path id="computer_stand" d="M5275.057,2263.657l47.566-148.009H5182.555l-57.9,180.153h256.326v-32.144Z" transform="translate(0 -105)" fill="#a69f9f"/>
          <path id="computer_stand_shadow" d="M5275.057,2263.657l47.566-148.009H5182.555l-57.9,180.153h140.067Z" transform="translate(18 -161)" fill="#373231" opacity="0.313"/>
          <g id="computer_box" transform="translate(4555.346 1396.972)" fill="#fff" stroke="#707070" stroke-width="2">
            <rect width="1400" height="721" stroke="none"/>
            <rect x="1" y="1" width="1398" height="719" fill="none"/>
          </g>
          <rect id="computer_bottombar" width="1393.008" height="56.268" transform="translate(4558.752 2058.381)" fill="#eee7e7"/>
          <rect id="computer_topbar" width="1395" height="51.067" transform="translate(4557.752 1399.172)" fill="#eee7e7"/>
          <ellipse id="camera" cx="12.86" cy="13.149" rx="12.86" ry="13.149" transform="translate(5246.067 1412.125)" fill="#be2bbb"/>
        </g>

         <g id="contentBoxGroup" transform="translate(12.407 1.201)">
          <rect id="content-area-square" width="1258" height="522" transform="translate(58.593 106.799)" fill="#fff"/>
          <foreignObject className={componentStyles.content} x="0" y="0" width="500" height="500">
            {children}
          </foreignObject>
        </g>
        
      </svg>*/}

    <svg id="computerOne" width="1400" height="793.83" viewBox="0 0 1400 793.83">
      <defs>
        

      </defs>
      <g id="computerFrameGroup" transform="translate(-4555.346 -1396.972)">
        <path id="computer_stand" d="M5275.057,2263.657l47.566-148.009H5182.555l-57.9,180.153h256.326v-32.144Z" transform="translate(0 -105)" fill="#a69f9f"/>
        <path id="computer_stand_shadow" d="M5275.057,2263.657l47.566-148.009H5182.555l-57.9,180.153h140.067Z" transform="translate(18 -161)" fill="#373231" opacity="0.313"/>
        <g id="computer_box" transform="translate(4555.346 1396.972)" fill="#fff">
          <path d="M 1399 720 L 1 720 L 1 1 L 1399 1 L 1399 720 Z" stroke="none"/>
          <path d="M 2 2 L 2 719 L 1398 719 L 1398 2 L 2 2 M 0 0 L 1400 0 L 1400 721 L 0 721 L 0 0 Z" stroke="none" fill="#707070"/>

        </g>
        <rect id="computer_bottombar" width="1393.008" height="56.268" transform="translate(4558.752 2058.381)" fill="#eee7e7"/>
        <rect id="computer_topbar" width="1395" height="51.067" transform="translate(4557.752 1399.172)" fill="#eee7e7"/>
        <ellipse id="camera" cx="12.86" cy="13.149" rx="12.86" ry="13.149" transform="translate(5246.067 1412.125)" fill="#be2bbb"/>
      </g>
      <clipPath id="clip-path">
      
        <rect id="content-area-square" width="1258" height="522" transform="translate(58.593 106.799)" fill="none"></rect>
        <foreignObject className={componentStyles.content} >
            {children}
          </foreignObject>

      </clipPath>
    </svg>

    </div>
      
  )
}
