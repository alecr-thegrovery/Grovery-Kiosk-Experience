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
      let doorLink = "";
      //OPEN/CLOSE DOORS
      $(".Door").click(function(){
        //console.log("click");
        $(".Door").attr("data-active", "inactive"); //reset doors

        if( $(this).attr("data-active") == "active"){
          //Don't do the thing
          $(this).attr("data-active", "inactive");
        }else{
          //Do the thing
          $(this).attr("data-active", "active");
          doorLink = $(this).attr("data-link");
          router.prefetch(doorLink); //prefetch next page
          setTimeout(function() { 
              $("#LayoutOuter").attr("data-hidden", "true"); //page transition
              setTimeout(function() { 
                  router.push(doorLink); //move user to next page
              }, 250);
          }, 1000);
        }

      });
      //END door function

    });
  });

  return (
    <div className={componentStyles.DoorSection}>
      <Container width="contentWidthMax">
        
        <div className={componentStyles.layout}>
          
          <div className={componentStyles.cell}>
            <Door
              title="Options to Enroll"
              link="/posts/master-post"
            />
          </div>

          <div className={componentStyles.cell}>
            <Door
              title="How to Complete the Enrollment Form"
              link="/posts/master-post"
            />
          </div>

          <div className={componentStyles.cell}>
            <Door
              title="Provider Portal (myBMScases.com)"
              link="/posts/master-post"
            />
          </div>

          <div className={componentStyles.cell}>
            <Door
              title="Annexus / AssistPoint Enrollment"
              link="/posts/master-post"
            />
          </div>

          <div className={componentStyles.cell}>
            <Door
              title="Options to Enroll"
              link="/posts/master-post"
            />
          </div>
        </div>

      </Container>
    </div>
  )
}
