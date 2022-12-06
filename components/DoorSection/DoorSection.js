/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import { router } from 'next/router'
import $ from 'jquery'
import Door from "./Door"
import Container from '@components/Container'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'
import utilStyles from '@styles/utils.module.css'

export default function DoorSection({ 
  //Props
  id, image, title, 
  previewText, author, date
}) {

  //console.log(author);
  useEffect(() => {
    $(document).ready(function() {

      //OPEN/CLOSE DOORS
      $(".Door").click(function(){
        console.log("click");
        $(".Door").attr("data-active", "inactive");
        if( $(this).attr("data-active") == "active"){
          $(this).attr("data-active", "inactive");
        }else{
          $(this).attr("data-active", "active");
          router.push("/posts/master-post")
        }
      });

      

    });
  });

  return (
    <div className={componentStyles.DoorSection}>
      <Container width="contentWidthMax">
        
        <div className={componentStyles.layout}>
          
          <div className={componentStyles.cell}>
            <Door/>
          </div>

          <div className={componentStyles.cell}>
            <Door/>
          </div>

          <div className={componentStyles.cell}>
            <Door/>
          </div>

          <div className={componentStyles.cell}>
            <Door/>
          </div>

          <div className={componentStyles.cell}>
            <Door/>
          </div>
        </div>

      </Container>
    </div>
  )
}
