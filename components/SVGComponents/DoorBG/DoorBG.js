/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import { router } from 'next/router'
import $ from 'jquery'
import Link from 'next/link'
import EnrollmentDoors from "./EnrollmentDoors"

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function DoorBG({ 
  //Props
  id, children, 
  access, enrollment, financial, resources,
}) {

  //console.log(author);
  useEffect(() => {
    $(document).ready(function() {
      let doorLink = "";
      //OPEN/CLOSE DOORS
      $("[data-door]").click(function(){
        //console.log("click");
        $("[data-door]").attr("data-active", "inactive"); //reset doors

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
   <div className={componentStyles.DoorBG}>
     {access && 
       <EnrollmentDoors/>
     }
     {enrollment && 
       <EnrollmentDoors/>
     }
     {financial && 
       <EnrollmentDoors/>
     }
     {resources && 
       <EnrollmentDoors/>
     }
   </div>
  )
}
