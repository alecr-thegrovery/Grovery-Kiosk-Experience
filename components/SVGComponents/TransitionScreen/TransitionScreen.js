/*===== Components =====*/
import React from "react"
import Link from 'next/link'
import Screen1 from "./Screen1"
import Screen2 from "./Screen2"
import Screen3 from "./Screen3"
import Screen4 from "./Screen4"
import Screen5 from "./Screen5"

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function TransitionScreen({ 
  //Props
  id, children, screen
}) {

  //console.log(author);

  return (
    <div className={componentStyles.TransitionScreen} data-transition-screen={screen}>
      {screen == "" &&
        <Screen1/>
      }
      {screen == "1" &&
        <Screen1/>
      }
      {screen == "2" &&
        <Screen2/>
      }
      {screen == "3" &&
        <Screen3/>
      }
      {screen == "4" &&
        <Screen4/>
      }
      {screen == "5" &&
        <Screen5/>
      }
      
    </div>
      
  )
}
