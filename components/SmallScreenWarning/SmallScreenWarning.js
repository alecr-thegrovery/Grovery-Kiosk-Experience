/*===== Components =====*/
import React from "react"
import Container from '@components/Container'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function SmallScreenWarning({ 
  //Props
  
}) {

  //console.log(author);

  return (
    <div id="SmallScreenWarning" className={componentStyles.SmallScreenWarning}>
       
       <Container>
         <p className={componentStyles.content}>
          Looks like you're viewing this site on a small screen.  This experience is meant to be viewed on a large display or tablet, and doesn't really translate to small screens.
         </p>
       </Container>
        
      
    </div>
  )
}
