/*===== Ultility Components =====*/
import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { router } from 'next/router'

import Link from 'next/link'
import data from "@data/data.json"
import $ from 'jquery'



/*===== Styles =====*/
import styles from './layout.module.scss'

/*===== JS Code =====*/
  import interact from 'interactjs'
  import {isTablet, isSafari, isIPad13} from 'react-device-detect';


import Sidebar from '@components/Sidebar'
import Modal from '@components/Modal'

import SmallScreenWarning from '@components/SmallScreenWarning'

import IdleTimer from '@components/IdleTimer'

import VersionNotice from '@components/UtilityComponents/VersionNotice'

export const siteTitle = 'BMS Congress Access Support'
export const siteData = data

export default function Layout({ 
  //PROPS
  children, home, card,
  access, enrollment, financial, resources,
  pageActionState, cardTooltipText, backButtonUrl
}) {
  
  useEffect(() => {

    /* ============================= */
    /* ===== Global Action State ===== */
    /* ============================= */
      //define function
      function updateActionState(stateValue, delay, thread) {
        setTimeout(function() {
          const LayoutOuter = document.querySelector("#LayoutOuter");
          if(thread == "load"){
            LayoutOuter.setAttribute("data-action-state-load", stateValue);
          } else if(thread == "transition"){
            LayoutOuter.setAttribute("data-action-state-transition", stateValue);
          } else if(thread == "tooltips"){
            LayoutOuter.setAttribute("data-action-state-tooltips", stateValue);
          } else if(thread == "cards"){
            LayoutOuter.setAttribute("data-action-state-cards", stateValue);
          }else if(thread == "cards-show"){
            LayoutOuter.setAttribute("data-action-state-cards-show", stateValue);
          } else if(thread == "page"){
            LayoutOuter.setAttribute("data-action-state-page", stateValue);
          } else if(thread == "home-bg"){
            LayoutOuter.setAttribute("data-action-state-home-bg", stateValue);
          } else if(thread == "transition-screen"){
            LayoutOuter.setAttribute("data-action-state-transition-screen", stateValue);
          } else{
            LayoutOuter.setAttribute("data-action-state", stateValue);
          }
        }, delay);
      }

      /* ===== General  ===== */
           updateActionState('initial', 0);       

         /* ===== Cards ===== */
           updateActionState('initial', 0, 'cards-show');
           updateActionState('animate-start', 1500, 'cards-show');
           updateActionState('visible', 1550, 'cards-show');
           updateActionState('post-visible', 2500, 'cards-show');

         /* ===== Tooltips ===== */
           updateActionState('initial', 0, 'tooltips');
           updateActionState('show-after-load', 5000, 'tooltips');

        /* ===== Load Sequence ===== */
         updateActionState('initial', 0, 'load');
         updateActionState('post-initial', 250), 'load';
         updateActionState('load-finished', 1000, 'load');
         updateActionState('just-after-load', 2000, 'load');
         updateActionState('just-after-load-2', 3500, 'load');
         updateActionState('load-sequence-complete', 5000, 'load');

         
      /*function transtionScreenAnimationChain(){
         let el = document.querySelector("#LayoutOuter");
         if(el.getAttribute("data-action-state-page") == "lvl-3"){
           console.log("page lvl 3 detected");
            updateActionState('initial', 0, 'transition-screen');
            updateActionState('zoom', 2000, 'transition-screen');
            updateActionState('fade', 3500, 'transition-screen');
            updateActionState('end', 5000, 'transition-screen');
         }
      }
      
      router.events.on('routeChangeComplete', transtionScreenAnimationChain);*/
    
    /* ========================== */
    /* ===== Page Transition ===== */
    /* ========================== */
        updateActionState('visible', 1000, 'transition');
        function pageTransition(url, delay){
          console.log("page-transition: " + url + " | "+ delay);
          //router.prefetch(url); //prefetch next page
          updateActionState('hidden', delay, 'transition');
          setTimeout(function() {
            router.push(url);
            //router.reload();
            //window.location.href = url;
          }, delay);

        } //END pageTransition function

    /* ================================= */
    /* ===== Page Transition Clicks ===== */
    /* ================================= */
      /* ===== Link Clicks ===== */
        let url = "";
        let delay = 1000;

        const pageTransitionLinks = document.querySelectorAll('[data-page-transition]');

        pageTransitionLinks.forEach(element => {
          element.addEventListener('click', () => {
            console.log("data-page-transition click");
            url = element.getAttribute("data-page-transition");
            delay = element.getAttribute("data-delay");
            pageTransition(url, delay);
          });
        });
          
      /* ===== Back Button Click ===== */
        const backButton = document.querySelectorAll('[data-page-back]');
        backButton.forEach(element => {
          element.addEventListener('click', () => {
            console.log("data-page-back click");
            updateActionState('hidden', 0, 'transition');
            window.history.back();
          });
        });

    /* =========================== */
    /* ===== Drag & Drop code =====  */
    /* =========================== */
      //Destroy drag & drop instance so dragging is not compounded
      interact('.draggable').unset();

      function DragDropInit() {
          var startPos = null;
          interact
          interact('.draggable').draggable({
            inertia: true,
            snap: {
              targets: [startPos],
              range: Infinity,
              relativePoints: [ { x: 0.5, y: 0.5 } ],
              endOnly: true
            },
            onstart: function (event) {
                var rect = interact.getElementRect(event.target);

                // record center point when starting the very first drag
                startPos = {
                  x: rect.left + rect.width  / 2,
                  y: rect.top  + rect.height / 2
                }
                
                var target = event.target,
                  // keep the dragged position in the data-x/data-y attributes
                  x = (parseFloat(target.getAttribute('data-origin-x')) || 0) + event.dx,
                  y = (parseFloat(target.getAttribute('data-origin-y')) || 0) + event.dy;

              // translate the element
              target.style.webkitTransform =
              target.style.transform =
                'translate(' + x + 'px, ' + y + 'px)';

              // update the posiion attributes
              target.setAttribute('data-x', x);
              target.setAttribute('data-y', y);

              //update global event state
              updateActionState('card-interaction', 0, 'tooltips');
              updateActionState('card-interaction', 0, 'cards');

              event.interactable.draggable({
                snap: {
                  targets: [startPos]
                }
              });
            },
            // call this function on every dragmove event
            onmove: function (event) {
              var target = event.target,
                  // keep the dragged position in the data-x/data-y attributes
                  x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
                  y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

              // translate the element
              target.style.webkitTransform =
              target.style.transform =
                'translate(' + x + 'px, ' + y + 'px)';

              // update the posiion attributes
              target.setAttribute('data-x', x);
              target.setAttribute('data-y', y);
              target.classList.add('getting--dragged');
            },

            onend: function (event) {
              event.target.classList.remove('getting--dragged');
              updateActionState('card-post-interaction', 0, 'tooltips');
              updateActionState('card-post-interaction', 0, 'cards');
            }
          });

          interact('.droppable:not(.caught--it)').dropzone({
            accept: '.draggable',
            overlap: .15,

            ondropactivate: function (event) {
              console.log("ondropactivate");
              event.target.classList.add('can--drop');
            },

            ondragenter: function (event) {
              console.log("onDragEnter");
              var draggableElement = event.relatedTarget,
                  dropzoneElement  = event.target,
                  dropRect         = interact.getElementRect(dropzoneElement),
                  dropCenter       = {
                    x: dropRect.left + dropRect.width  / 2,
                    y: dropRect.top  + dropRect.height / 2
                  };

              event.draggable.draggable({
                snap: {
                  targets: [dropCenter]
                }
              });

              // feedback the possibility of a drop
              dropzoneElement.classList.add('can--catch');
              draggableElement.classList.add('drop--me');
            },

            ondragleave: function (event) {
              // remove the drop feedback style
              console.log("onDragLeave");
              console.log(startPos);
              event.target.classList.remove('can--catch', 'caught--it');
              event.relatedTarget.classList.remove('drop--me');
              event.draggable.draggable({
                 snap: {
                   targets: [startPos],
                   range: Infinity,
                   relativePoints: [ { x: 0.5, y: 0.5 } ],
                   endOnly: true
                 }
               });
            },

            ondrop: function (event) {
              console.log("Index of dropped node: " + (event.target));
              console.log("Index of dragged node: " + getNodeIndex(event.relatedTarget.parentNode));
              //event.relatedTarget.textContent = 'Dropped';
              console.log("Dropped!");
              console.log("related target: " + event.relatedTarget.parentNode);
              console.log(event.draggable);
              event.target.classList.add('caught--it');

              if($(".drop--me").attr("data-link")){
                console.log("get link home");
                var link = $(".drop--me").attr("data-link");
                updateActionState('transition-out-pre', 0, 'cards-show');
                updateActionState('transition-out', 250, 'cards-show');
              } else{
                console.log("get link inner");
                var link = $(".droppable.caught--it").attr("data-link");
              }

              console.log(link);
              if(link  == null){
               //do nothing
              } else if(link  == "/enrollment/"){
                console.log("enrollment card dropped");
                updateActionState('home-bg-init-enrollment', 0, 'home-bg');
                updateActionState('home-bg-zoom-enrollment', 1200, 'home-bg');
                updateActionState('home-bg-open-enrollment', 2000, 'home-bg');
                pageTransition(link, 2800);
              }else if(link  == "/access/"){
                console.log("access card dropped");
                updateActionState('home-bg-init-access', 0, 'home-bg');
                updateActionState('home-bg-zoom-access', 1200, 'home-bg');
                updateActionState('home-bg-open-access', 2000, 'home-bg');
                pageTransition(link, 2800);
              }else if(link  == "/financial/"){
                console.log("financial card dropped");
                updateActionState('home-bg-init-financial', 0, 'home-bg');
                updateActionState('home-bg-zoom-financial', 1200, 'home-bg');
                updateActionState('home-bg-open-financial', 2000, 'home-bg');
                pageTransition(link, 2800);
              }else if(link  == "/resources/"){
                console.log("resources card dropped");
                updateActionState('home-bg-init-resources', 0, 'home-bg');
                updateActionState('home-bg-zoom-resources', 1200, 'home-bg');
                updateActionState('home-bg-open-resources', 2000, 'home-bg');
                pageTransition(link, 2800);
              }else{
                //updateActionState('card-drop-success', 0);
                pageTransition(link, 500);
                /* ===== Transition Screens ===== */
                 /*updateActionState('initial', 0, 'transition-screen');
                 updateActionState('zoom', 2000, 'transition-screen');
                 updateActionState('fade', 3500, 'transition-screen');
                 updateActionState('end', 5000, 'transition-screen');*/
              }

            },

            ondropdeactivate: function (event) {
              // remove active dropzone feedback
              console.log("ondropdeactivate");
              event.target.classList.remove('can--drop');
              event.target.classList.remove('can--catch');
            }

          });
        }

        function getNodeIndex(node) {
          var index = 0;
          while ( (node = node.previousSibling) ) {
            if (node.nodeType != 3 || !/^\s*$/.test(node.data)) {
              index++;
            }
          }
          return index;
        }

      function eleHasClass(el, cls) {
        return el.className && new RegExp("(\\s|^)" + cls + "(\\s|$)").test(el.className);
      }

      DragDropInit();
    

    /* ==================================== */
    /* ===== Content Overflow Detection ===== */
    /* ==================================== */
      // Select all elements with the data-attribute "data-target"
      const elements = document.querySelectorAll('[data-overflow-detect]');

      // Loop through each element and check if it has overflow content
      elements.forEach(element => {
        console.log("overflow element present");
        // Check if the element's scrollHeight is greater than its clientHeight
        if (element.scrollHeight > element.clientHeight) {
          console.log("overflow detected");
          // If overflow content is detected, add a class to the element
          element.setAttribute('data-overflow-detect', 'overflow');
        }
      });

      /* ===== Hide When Scrolled To Bottom ===== */

        // loop through each element
        elements.forEach(element => {
          // add a scroll event listener to each element
          element.addEventListener('scroll', () => {
            // check if the element's content is scrolled to the bottom
            const atBottom = element.scrollHeight - element.scrollTop === element.clientHeight;
            // update the data-attribute value to true if scrolled to bottom, false otherwise
            
            if (atBottom) {
              console.log("overflow detected");
              // If overflow content is detected, add a class to the element
              element.setAttribute('data-overflow-detect', 'atBottom');
            }else{
              element.setAttribute('data-overflow-detect', 'overflow');
            }
          });
        });


    /* ================================= */
    /* ===== Browser/Device Detect  ===== */
    /* ================================= */
        function deviceDetect(){
          let element = document.querySelector("#LayoutOuter");
          if(isTablet){
            element.classList.add("detect--tablet");
          }
          if(isSafari){
            element.classList.add("detect--safari");
          }
          if(isIPad13){
            element.classList.add("detect--ipad");
          }
        }
        //run function
        deviceDetect();
        

  });

  return (
    <div 
      id="LayoutOuter" 
      className={styles.outer} 
      data-hidden="true" 
      data-action-state="initial"  
      data-action-state-load="initial"  
      data-action-state-transition="hidden"  
      data-action-state-tooltips="initial"
      data-action-state-cards="initial"
      data-action-state-cards-show="initial"
      data-action-state-cards-home-bg="initial"
      data-action-state-transition-screen="initial"
      data-action-state-page={pageActionState}
    >
      <Head>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Bristol Myers Squibb Access Support - Learn more about how we can help you."
        />
        <meta property="og:image"
          content={`/images/BMSLogo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100;200;300;400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>

      <SmallScreenWarning/>
      {/*<FullScreenWidget/>*/}
      {/*<SupportModal/>*/}
      <Modal/>
      <IdleTimer/>
      
      {/* MAIN SECTION */}
      <main className={styles.main}>
        
          {/* BREADCRUMBS */}
          {/*{!home && (
            <Container>
              <div className={styles.backToHome}>
                <Link href="/">
                  <a>← Back to home</a>
                </Link>
              </div>
            </Container>
          )}*/}
          
          <div id="mainContent" className={styles.mainContent}>
            {children}
          </div>

          <div id="rightSidebar" className={styles.rightSidebar}>
            <Sidebar 
              card={card}
              access={access}
              enrollment={enrollment}
              financial={financial}
              resources={resources}
              home={home}
              cardTooltipText={cardTooltipText}
              backButtonUrl={backButtonUrl}
            />
          </div>
  
      </main>

      {/*<section className={styles.footer}>
        <Footer/>
      </section>*/}
      
      {/* VERSION NOTICE */}
      <VersionNotice
        projectName="Kiosk Template"
        versionNumber="0.9.1"
        updatePercentComplete="50%"
        totalPercentComplete="91%"
      >
        <ul>
          <li>Previous Update - BMS project finalization</li>
          <li>Latest Update - Template creation</li>
          <li>Next Update - Placeholder Content & Data files</li>
        </ul>
      </VersionNotice>
      
    </div>
  )
}
