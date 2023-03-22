/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import { router } from 'next/router'
import Head from 'next/head'
import Link from 'next/link'
import $ from 'jquery'
import interact from 'interactjs'
import Layout, { siteData } from '@components/layout'
import DynamicHeader from '@components/DynamicHeader'
import DynamicFooter from '@components/DynamicFooter'
import DragDrop from '@components/DragDrop'
import IDCard from '@components/IDCard'
import HomeBG from '@components/SVGComponents/HomeBG'

/*===== Styles =====*/
import pageStyles from '@styles/pages.module.scss'

/*===== Posts Data =====*/
import { getSortedPostsData } from '@lib/posts'
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

/*===== Page Content =====*/
export default function Home({ allPostsData }) {
  
  //console.log(author);
  useEffect(() => {

    
    const actionState = document.querySelector("#LayoutOuter")
    actionState.setAttribute("data-action-state","none");

    function init() {
        var startPos = null;

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
            actionState.setAttribute("data-action-state","card-picked-up");
          },

          onend: function (event) {
            event.target.classList.remove('getting--dragged');
            actionState.setAttribute("data-action-state","none");
          }
        });

        interact('.droppable:not(.caught--it)').dropzone({
          accept: '.draggable',
          overlap: .5,

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
            } else{
              console.log("get link inner");
              var link = $(".droppable.caught--it").attr("data-link");
            }

            console.log(link);
            router.prefetch(link); //prefetch next page
            setTimeout(function() { 
                $("#LayoutOuter").attr("data-hidden", "true"); //page transition
                router.push(link); //move user to next page
            }, 1000);
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

    window.onload = function() {
      init();
    }

  });

  return (
    <Layout home>
      
      <Head>
        <title>Home | {siteData.siteTitleBase}</title>
      </Head>
      <div className={pageStyles.pageLayout}>
        <DynamicHeader
          
          heading={["Bristol Myers Squibb ", <strong>Access Support</strong>]}
          subhead="Through financial assistance options, access and reimbursements support, and patient resources, we help your patients take a more active and informed role in their care."
        />

        <div className={pageStyles.pageLevel1}>

          <div className={pageStyles.background}>
            <HomeBG/>
          </div>

          <section className={pageStyles.mainSection}>
            <DragDrop/>
          </section>
          
        </div>

        <DynamicFooter
          dynamicText=""
        />
      </div>
      
      
    </Layout>
  )
}
