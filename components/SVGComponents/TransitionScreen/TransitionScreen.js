/*===== Components =====*/
import React from "react"
import Link from 'next/link'
import Screen1 from "./Screen1"

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function TransitionScreen({ 
  //Props
  id, children, screen
}) {

  //console.log(author);

  return (
    <div className={componentStyles.TransitionScreen} data-transition-screen>
      {screen == "" &&
        <Screen1/>
      }
      {screen == "1" &&
        <Screen1/>
      }
      
    </div>
      
  )
}
