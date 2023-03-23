/*===== Components =====*/
import React, { useState, useEffect } from 'react';

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function Tooltip({ 
  //Props
  children, text, bgColor, placement
}) {

  //console.log(author);
  useEffect(() => {
    //JS GOES HERE
  });

  return (
    <div 
      className={componentStyles.Tooltip}
      data-tooltip=""
      data-bg-color={bgColor ? bgColor : "purple"}
      data-placement={placement ? placement : "right"}
    >
      {text}
    </div>
  )
}
