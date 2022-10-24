/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import interact from 'interactjs'

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

    // target elements with the "draggable" class
    interact('.draggable')
      .draggable({
        // enable inertial throwing
        inertia: true,
        // keep the element within the area of it's parent
        modifiers: [
          interact.modifiers.restrictRect({
            restriction: '.draggableBounds',
            endOnly: true
          })
        ],
        // enable autoScroll
        autoScroll: true,

        listeners: {
          // call this function on every dragmove event
          move: dragMoveListener,

          // call this function on every dragend event
          end (event) {
            /*var textEl = event.target.querySelector('p')

            textEl && (textEl.textContent =
              'moved a distance of ' +
              (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                         Math.pow(event.pageY - event.y0, 2) | 0))
                .toFixed(2) + 'px')*/
          }
        }
      })

    interact('#DropZone').dropzone({
      // only accept elements matching this CSS selector
      accept: '.draggable',
      // Require a 75% element overlap for a drop to be possible
      overlap: 0.75,

      // listen for drop related events:

      ondropactivate: function (event) {
        // add active dropzone feedback
        event.target.classList.add('drop-active')
      },
      ondragenter: function (event) {
        var draggableElement = event.relatedTarget
        var dropzoneElement = event.target

        // feedback the possibility of a drop
        dropzoneElement.classList.add('drop-target')
        draggableElement.classList.add('can-drop')
        draggableElement.textContent = 'Dragged in'
      },
      ondragleave: function (event) {
        // remove the drop feedback style
        event.target.classList.remove('drop-target')
        event.relatedTarget.classList.remove('can-drop')
        event.relatedTarget.textContent = 'Dragged out'
      },
      ondrop: function (event) {
        event.relatedTarget.textContent = 'Dropped'
      },
      ondropdeactivate: function (event) {
        // remove active dropzone feedback
        event.target.classList.remove('drop-active')
        event.target.classList.remove('drop-target')
      }
    })

    function dragMoveListener (event) {
      var target = event.target
      // keep the dragged position in the data-x/data-y attributes
      var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
      var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

      // translate the element
      target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

      // update the posiion attributes
      target.setAttribute('data-x', x)
      target.setAttribute('data-y', y)
    }

    // this function is used later in the resizing and gesture demos
    window.dragMoveListener = dragMoveListener
  });

  return (
    <div className={'draggableBounds '+componentStyles.DragDrop}>
      
      {/*===== Draggable Cards =====*/}
      <div className={componentStyles.cardWrapper}>
        <div id="DnD-1" className={'draggable '+componentStyles.dragDropCard} data-draggable>
          Drag n' Drop Card
        </div>
        <div id="DnD-2" className={'draggable '+componentStyles.dragDropCard} data-draggable>
          Drag n' Drop Card
        </div>
        <div id="DnD-3" className={'draggable '+componentStyles.dragDropCard} data-draggable>
          Drag n' Drop Card
        </div>
      </div>

      {/*===== Dropzone =====*/}
      <div className={componentStyles.dropZoneWrapper}>
        <div id="DropZone" className={componentStyles.dropZone}>
          <span className={componentStyles.message}>Drag n' Drop Dropzone</span>
        </div>
      </div>
    </div>
  )
}
