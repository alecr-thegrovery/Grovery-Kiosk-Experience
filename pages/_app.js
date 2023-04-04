import React, { useState, useEffect } from 'react';
import $ from 'jquery'
import { router } from 'next/router'
import 'normalize.css';
import 'tippy.js/dist/tippy.css';
//Swiper.JS
import 'swiper/swiper.scss';
import 'swiper/components/a11y/a11y.scss';
import 'swiper/components/controller/controller.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/thumbs/thumbs.scss';

//Drag n Drop 
import interact from 'interactjs'

//Custom CSS/JS
import '@styles/main.scss';
//import '@scripts/script.js';

export default function App({ Component, pageProps }) {

  useEffect(() => {

    
    let actionState = document.querySelector("#LayoutOuter");
    actionState.setAttribute("data-action-state","none");

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
            actionState.setAttribute("data-action-state","card-picked-up");

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
            actionState.setAttribute("data-action-state","card-dropped");
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
            } else{
              console.log("get link inner");
              var link = $(".droppable.caught--it").attr("data-link");
            }

            console.log(link);
            if(link  == null){
             //do nothing
            } else{
              router.prefetch(link); //prefetch next page
              setTimeout(function() { 
                  $("#LayoutOuter").attr("data-hidden", "true"); //page transition
                  router.push(link); //move user to next page
              }, 1000);
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
    
  });

  return <Component {...pageProps} />
}
