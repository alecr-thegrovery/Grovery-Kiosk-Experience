/*===== Components =====*/
import React from "react"
import Link from 'next/link'


//import Button1 from '@components/Button1'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function PlaceholderContent({ 
  //Props
  id, image, title, 
  previewText, author, date
}) {

  //console.log(author);

  return (
    <div className={componentStyles.PlaceholderContent}>
      <span>
        PLACEHOLDER CONTENT
      </span>
    </div>
  )
}
