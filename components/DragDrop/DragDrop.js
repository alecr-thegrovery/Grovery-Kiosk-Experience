/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import { router } from 'next/router'
import $ from 'jquery'
import interact from 'interactjs'
import Card from './Card.js'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'
import utilStyles from '@styles/utils.module.css'

export default function DragDrop({ 
  //Props
  id, image, title, 
  previewText, author, date
}) {

  //console.log(author);
  useEffect(() => {

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
          },

          onend: function (event) {
            event.target.classList.remove('getting--dragged')
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
            //event.target.classList.add('caught--it');

            let cardLink = $(".drop--me").attr("data-link");
            console.log(cardLink);
            router.prefetch(cardLink); //prefetch next page
            setTimeout(function() { 
                $("#LayoutOuter").attr("data-hidden", "true"); //page transition
                router.push(cardLink); //move user to next page
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

  /*===== Component Content =====*/
  return (
    <div className={'draggableBounds '+componentStyles.DragDrop}>
      
      {/*===== Draggable Cards =====*/}
      <div className={componentStyles.cardsOuter}>


          <Card 
            cardID="Enrollment"
            text="Enrollment"
            link="/enrollment-1/"
            color="brown"
          />


        
          <Card 
            cardID="Access"
            text="Access and Reimbursement Report"
            link="/access-1/"
            color="orange"
          />
      

        
          <Card 
            cardID="Copay"
            text="Co-Pay &amp; Finacial Assistance Services"
            link="/financial-1/"
            color="teal"
          />
        

        
          <Card 
            cardID="Resources"
            text="Patient Resources"
            link="/resources-1/"
            color="purple"
          />
        
        
      </div>

      {/*===== Dropzone =====*/}
      {/*<div className={componentStyles.dropZoneWrapper}>
        <div id="DropZone" className={componentStyles.dropZone + ' droppable'}>
          <span className={componentStyles.message}>Drag n' Drop Dropzone</span>
        </div>
      </div>*/}
      
    </div>
  )
}
