/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import Card from '@components/DragDrop/Card.js'
import IDCard from '@components/IDCard'
import { BsUpcScan } from "react-icons/bs";
import { MdArrowBackIosNew } from "react-icons/md";
import $ from 'jquery'
import SupportIcon from '@components/SVGComponents/SupportIcon'
import BackIcon from '@components/SVGComponents/BackIcon'
import HomeIcon from '@components/SVGComponents/HomeIcon'
import ScannerIcon from '@components/SVGComponents/ScannerIcon'
import Tooltip from '@components/Tooltip'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'


export default function Sidebar({ 
  //Props
  scanner, card, home, 
  access, enrollment, financial, resources,
  cardTooltipText
}) {

  //console.log(author);
  useEffect(() => {
    $(document).ready(function() {
      
      $("[data-modal-open='support']").click(function(e){
        e.preventDefault();
        $("#SupportModal").attr("data-modal-status", "active");
      });

      $("[data-modal-close='support']").click(function(e){
        e.preventDefault();
        $("#SupportModal").attr("data-modal-status", "inactive");
      });

    });
  });

  return (
    <div className={componentStyles.Sidebar}>
      <div className={componentStyles.inner}>

      <div className={"cardsFilter "+ componentStyles.cardsFilter}></div>
        
        <div className={componentStyles.controlsOuter}>
          <div className={componentStyles.controls}>
            <a data-modal-open='support' href="#">
              <SupportIcon/>
              SUPPORT
            </a>
          </div>
        </div>
        

        <div className={componentStyles.scannerWrapper}>
          <div id="DropZone" className={componentStyles.scanner + ' droppable'}>

            {access && 
              <div className={componentStyles.cardOutter}>
                <IDCard
                  cardID="access"
                  text="Access and Reimbursement Report"
                  color="mutedRed"
                  tooltipID="lvl-2-card-initial"
                  tooltipText={cardTooltipText ? cardTooltipText : ""}
                  tooltipPlacement="left"
                />
              </div>
            }
            {enrollment && 
              <div className={componentStyles.cardOutter}>
                <IDCard
                  cardID="enrollment"
                  text="Enrollment"
                  color="mutedYellow"
                  tooltipText={cardTooltipText ? cardTooltipText : ""}
                  tooltipPlacement="left"
                />
              </div>
            }
            {financial && 
              <div className={componentStyles.cardOutter}>
                <IDCard
                  cardID="financial"
                  text="Co-Pay &amp; Finacial Assistance Services"
                  color="mutedBlue"
                  tooltipText={cardTooltipText ? cardTooltipText : ""}
                  tooltipPlacement="left"
                />
              </div>
            }
            {resources && 
              <div className={componentStyles.cardOutter}>
                <IDCard
                  cardID="resources"
                  text="Patient Resources"
                  color="mutedGreen"
                  tooltipText={cardTooltipText ? cardTooltipText : ""}
                  tooltipPlacement="left"
                />
              </div>
            }
            

            <div id="scannerBorder" className={componentStyles.scannerBorder}>
              <div id="scannerLight" className={componentStyles.light}>
                <div className={componentStyles.lightInner}></div>
              </div>
              <div className={componentStyles.icon}>
                <ScannerIcon/>
              </div>
              <div className={componentStyles.text}>
                <p>
                  Place your access card here
                </p>
              </div>
              <Tooltip
                tooltipID="lvl-1-place-card-here"
                placement="left"
                text={[<h2>Place Access Card Here</h2>]}
              />
            </div>
          </div>
        </div>

        <div className={componentStyles.controlsOuter}>
          {!home && 
            <div className={componentStyles.controls}>
              <a className={componentStyles.alt} data-page-back>
                <BackIcon/> Back
              </a>
              <a data-page-transition="/" data-delay="0">
                <HomeIcon/> Home
              </a>
            </div>
          }
        </div>
        
      </div>
    </div>
  )
}
