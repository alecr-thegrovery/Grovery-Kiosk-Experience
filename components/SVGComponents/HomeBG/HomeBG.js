/*===== Components =====*/
import React, { useState, useEffect } from 'react';
import { router } from 'next/router'
import $ from 'jquery'

/*===== Styles =====*/
import componentStyles from './styles.module.scss'
import animationStyles from '@styles/animations.module.scss'

export default function HomeBG({ 
  //Props
  id, children, 
}) {

  //console.log(author);
  useEffect(() => {
    $(document).ready(function() {
      
    });
  });

  return (
   <div className={componentStyles.HomeBG}>
    <div className="colorFilter"></div>
     <svg id="home_background" width="2418.805" height="1008.426" viewBox="0 0 2418.805 1008.426">
       <defs>
         <clipPath id="clipPath">
           <rect id="building2_entrance-clip" width="132" height="110" transform="translate(416.653 695.004)" fill="#352a2b"/>
         </clipPath>
         <clipPath id="clipPath-2">
           <rect id="Rectangle_1116" data-name="Rectangle 1116" width="118.19" height="504.5" transform="translate(1035.61 299.258)" fill="none"/>
         </clipPath>
         <clipPath id="clipPath-3">
           <rect id="building3_entrance-clip" width="197.005" height="126.647" transform="translate(822.359 677.918)" fill="#352a2b"/>
         </clipPath>
         <clipPath id="clipPath-4">
           <rect id="building4_entrance-inside" width="152.615" height="144.542" transform="translate(1405.507 817.452)" fill="#595454"/>
         </clipPath>
         <clipPath id="clipPath-5">
           <rect id="Rectangle_1098" data-name="Rectangle 1098" width="2391.751" height="1003.374" transform="translate(0 -0.004)" fill="none"/>
         </clipPath>
         <clipPath id="clipPath-6">
           <rect id="Rectangle_1097" data-name="Rectangle 1097" width="70.115" height="520.625" transform="translate(310.842 284.154)" fill="none"/>
         </clipPath>
         <clipPath id="clipPath-7">
           <rect id="building1_entrance-clip" width="134" height="117" transform="translate(108.654 852.774)" fill="#474343"/>
         </clipPath>
         <clipPath id="clipPath-8">
           <rect id="cloud-clip" width="2397.769" height="227.773" transform="translate(-13.339)" fill="none"/>
         </clipPath>
       </defs>
       <path id="skyline-bg" d="M2391.751,144.806l-160.323,26.669V271.944l-116.659,13.45V223.017l-37.924-8.094-13.467,8.094v66.719l-11.633.982v-21.81l-37.924-8.094-13.467,8.094v26.153l-28.919,2.443v53.255l-82.157-.009V309.059l-68.838,3.161V224.337l-26.314-15.813-69.894,14.917v94.805h-23.293V459.454h-57.593v-78.8h-42.4v25.827H1564.72V326h-26.295v31.713h-15.07V379.27h-36.894V291.7h-56.688V215.47h-77.467V430.5h-35.335V390.05h-.364l-10.369-142.328H1297.6v-5.705h-17.917l-1.728-43.533h-1.83l-1.728,43.533h-17.914v5.705h-8.636L1237.48,390.051h-.363V430.5h-10.148l-10.2-119.509-7.045-3.264-1.791-56.776h-2.056l-1.792,56.776-7.045,3.264L1186.835,430.5H1083.412V383.385h-32.9v31.921h-18.485v64.656h-29.98V405.407h-8.162V348.323h-47.05v47.729h-34.15V384.544H882.058V420.63H818.066v-83.7l-24.749-2.086c-2.4-48.317-11.123-91.182-23.827-122.259a4.839,4.839,0,0,0-9.179,0c-12.284,30.051-20.842,71.126-23.567,117.492l-78.8-5.547v13.423l-28.818.009V314.041l-46.791-4.487V245.562l-13.468-8.1-37.923,8.1v61.784L336.231,293.281V176.811l-128.685-32V803.623h2184.2Z" transform="translate(27.054 0.003)" fill="#eee7e7" opacity="0.296"/>
       <g id="Street-Level">
         <path id="sidewalk-left" d="M332.279,1002.87H22.248L.5,882.2l253.051-53.323,7.433-24.3h918.837l-26.836,26.838h-864.1l-17.731,16.378,74.227,140.567Z" transform="translate(16.055 0.004)" fill="#eee7e7" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
         <path id="sidewalk-right" d="M946.329,967.494l29,35.374h640.177l120.8-119.92h-52.893l-82.753,77.864H1028.931L1286.5,587.088Z" transform="translate(16.055 0.004)" fill="#eee7e7" stroke="#595454" strokeWidth="1"/>
         <path id="roadlines" d="M683.993,900.763H429.3m499.394,0h-73.3M712.052,941.5H362.585m537.466-79.14H550.592" transform="translate(16.055 0.004)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
       </g>
       <path id="Path_3899" data-name="Path 3899" d="M104.951,0V0Z" transform="translate(500.115 594.369)" fill="none" stroke="#948d8d" strokeWidth="1"/>
       <g id="Building-2">
         <g id="building2_bg" transform="translate(16.055 0.004)">
           <rect id="Rectangle_1075" data-name="Rectangle 1075" width="312.816" height="477.885" transform="translate(310.84 326.384)" fill="#fff" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
           <path id="Path_3898" data-name="Path 3898" d="M0,0H312.816V16.3H0Z" transform="translate(310.84 326.384)" fill="#be2bbb"/>
           <path id="Path_3947" data-name="Path 3947" d="M378.929,270.983l-12.153,9.889-1.574,1.28L310.84,326.383H623.656l-55.965-55.965Z" fill="#fff" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
         </g>
         <g id="building2_windows" transform="translate(16.055 0.004)">
           <rect id="Rectangle_1076" data-name="Rectangle 1076" width="106.989" height="18.341" transform="translate(345.484 385.483)" fill="#e9e1e0"/>
           <rect id="Rectangle_1077" data-name="Rectangle 1077" width="106.989" height="17.322" transform="translate(345.484 524.059)" fill="#e9e1e0"/>
           <rect id="Rectangle_1078" data-name="Rectangle 1078" width="106.989" height="17.322" transform="translate(345.484 454.771)" fill="#e9e1e0"/>
           <rect id="Rectangle_1079" data-name="Rectangle 1079" width="106.989" height="17.322" transform="translate(345.484 594.5)" fill="#e9e1e0"/>
           <rect id="Rectangle_1080" data-name="Rectangle 1080" width="106.989" height="17.322" transform="translate(345.484 629.145)" fill="#e9e1e0"/>
           <rect id="Rectangle_1081" data-name="Rectangle 1081" width="106.989" height="17.322" transform="translate(345.484 420.127)" fill="#e9e1e0"/>
           <rect id="Rectangle_1082" data-name="Rectangle 1082" width="106.989" height="17.322" transform="translate(345.484 558.704)" fill="#e9e1e0"/>
           <rect id="Rectangle_1083" data-name="Rectangle 1083" width="106.989" height="17.322" transform="translate(345.484 489.415)" fill="#e9e1e0"/>
           <rect id="Rectangle_1084" data-name="Rectangle 1084" width="104.951" height="18.341" transform="translate(484.061 385.483)" fill="#e9e1e0"/>
           <rect id="Rectangle_1085" data-name="Rectangle 1085" width="104.951" height="17.322" transform="translate(484.061 524.059)" fill="#e9e1e0"/>
           <rect id="Rectangle_1086" data-name="Rectangle 1086" width="104.951" height="17.322" transform="translate(484.061 454.771)" fill="#e9e1e0"/>
           <rect id="Rectangle_1087" data-name="Rectangle 1087" width="104.951" height="17.322" transform="translate(484.061 594.5)" fill="#e9e1e0"/>
           <rect id="Rectangle_1088" data-name="Rectangle 1088" width="104.951" height="17.322" transform="translate(484.061 420.127)" fill="#e9e1e0"/>
           <rect id="Rectangle_1089" data-name="Rectangle 1089" width="104.951" height="17.322" transform="translate(484.061 558.704)" fill="#e9e1e0"/>
           <rect id="Rectangle_1090" data-name="Rectangle 1090" width="104.951" height="17.322" transform="translate(484.061 489.415)" fill="#e9e1e0"/>
           <rect id="Rectangle_1091" data-name="Rectangle 1091" width="104.951" height="17.322" transform="translate(484.061 629.145)" fill="#e9e1e0"/>
         </g>
         <path id="building2_entrance-outer" d="M0,0H243.528V128.387H0Z" transform="translate(361.539 675.886)" fill="#a69f9f"/>
         <rect id="building2_entrance-top" width="256.921" height="12.515" transform="translate(352.263 669.03)" fill="#be2bbb"/>
         <rect id="building2_entrance-bg" width="132" height="110" transform="translate(416.653 695.004)" fill="#352a2b"/>
         <g id="building2_clipmask" transform="translate(0 0)" clipPath="url(#clipPath)">
           <g id="building2_rightdoor" transform="translate(16.054 -0.238)">
             <rect id="Rectangle_1158" data-name="Rectangle 1158" width="66.367" height="109.269" transform="translate(466.603 695.242)" fill="#ffeccd" stroke="#595454" strokeWidth="0.5"/>
             <rect id="Rectangle_1159" data-name="Rectangle 1159" width="2.538" height="58.501" rx="1.269" transform="translate(473.485 720.837)" fill="#fff" stroke="#352a2b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5"/>
           </g>
           <g id="building2_leftdoor" transform="translate(16.054 -0.238)">
             <rect id="Rectangle_1160" data-name="Rectangle 1160" width="66.092" height="109.269" transform="translate(400.507 695.242)" fill="#ffeccd" stroke="#595454" strokeWidth="0.5"/>
             <rect id="Rectangle_1161" data-name="Rectangle 1161" width="2.538" height="58.501" rx="1.269" transform="translate(457.28 720.837)" fill="#fff" stroke="#352a2b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5"/>
           </g>
         </g>
       </g>
       <g id="Building-3" transform="translate(16.054 0.004)">
         <rect id="Rectangle_1189" data-name="Rectangle 1189" width="436.23" height="175.899" transform="translate(702.996 628.666)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
         <g id="Group_1138" data-name="Group 1138">
           <g id="building3_windows">
             <rect id="Rectangle_1103" data-name="Rectangle 1103" width="435.225" height="67.344" transform="translate(703.498 341.699)" fill="#e9e1e0"/>
             <rect id="Rectangle_1104" data-name="Rectangle 1104" width="435.225" height="67.344" transform="translate(703.498 413.064)" fill="#e9e1e0"/>
             <rect id="Rectangle_1105" data-name="Rectangle 1105" width="435.225" height="67.344" transform="translate(703.498 485.434)" fill="#e9e1e0"/>
             <rect id="Rectangle_1106" data-name="Rectangle 1106" width="435.225" height="67.344" transform="translate(703.498 553.783)" fill="#e9e1e0"/>
           </g>
           <path id="Path_3909" data-name="Path 3909" d="M692.929,404.52H1151.3a3,3,0,0,1,3,3V417.6a3,3,0,0,1-3,3H692.929a3,3,0,0,1-3-3V407.52a3,3,0,0,1,3-3" fill="#fff" stroke="#a69f9f" strokeWidth="1"/>
           <path id="Path_3910" data-name="Path 3910" d="M692.929,476.89H1151.3a3,3,0,0,1,3,3v10.082a3,3,0,0,1-3,3H692.929a3,3,0,0,1-3-3V479.89a3,3,0,0,1,3-3" fill="#fff" stroke="#a69f9f" strokeWidth="1"/>
           <path id="Path_3911" data-name="Path 3911" d="M692.929,545.742H1151.3a3,3,0,0,1,3,3v10.082a3,3,0,0,1-3,3H692.929a3,3,0,0,1-3-3V548.742a3,3,0,0,1,3-3" fill="#fff" stroke="#a69f9f" strokeWidth="1"/>
           <rect id="Rectangle_1190" data-name="Rectangle 1190" width="436.23" height="175.899" transform="translate(702.996 628.666)" fill="#fff"/>
         </g>
         <path id="Path_3912" data-name="Path 3912" d="M692.929,621.225H1151.3a3,3,0,0,1,3,3v10.082a3,3,0,0,1-3,3H692.929a3,3,0,0,1-3-3V624.225a3,3,0,0,1,3-3" fill="#be2bbb"/>
         <path id="Path_3913" data-name="Path 3913" d="M690.432,333.658h463.784V346.1a2.632,2.632,0,0,1-2.633,2.631H693.066a2.632,2.632,0,0,1-2.634-2.63h0Z" transform="translate(-0.503)" fill="#be2bbb"/>
         <path id="building3_top" d="M789.091,278.616l-98.659,54.9,463.281-.049L1070.4,278.053Z" fill="#fff" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
         <g id="building3_shadow" opacity="0.15" >
           <g id="Group_1115" data-name="Group 1115">
             <g id="Group_1114" data-name="Group 1114" clipPath="url(#clipPath-2)">
               <path id="Path_3923" data-name="Path 3923" d="M1035.612,803.758v-470.1l66.927-34.4,51.262,34.4V346.1a2.631,2.631,0,0,1-2.631,2.631H1139.6v55.594h14.2V420.1h-14.2v57.293h14.2v15.077h-14.57v52.865H1153.8v15.485h-15.074v135.15l-46.6,101.052Z" fill="#292525"/>
             </g>
           </g>
         </g>
         <path id="building3_entrance-outer" d="M0,0H360.845V138.687H0Z" transform="translate(741.694 665.376)" fill="#a69f9f"/>
         <rect id="building3_bg" width="197.005" height="126.647" transform="translate(822.359 677.918)" fill="#352a2b"/>
         <rect id="building3_entrance-shadow" width="14" height="140" transform="translate(741.5 665.051)" fill="#373231" opacity="0.147"/>
         <g id="building3-clipmask" clipPath="url(#clipPath-3)">
           <g id="building3_leftdoor">
             <path id="Path_3942" data-name="Path 3942" d="M0,0H98.5V126.647H0Z" transform="translate(822.359 677.918)" fill="#c0f2fb" stroke="#595454" strokeWidth="0.5"/>
             <rect id="Rectangle_1113" data-name="Rectangle 1113" width="2.538" height="58.371" rx="1.269" transform="translate(907.123 713.456)" fill="#fff" stroke="#352a2b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5"/>
           </g>
           <g id="building3_rightdoor">
             <rect id="Rectangle_1110" data-name="Rectangle 1110" width="98.248" height="126.647" transform="translate(921.116 677.918)" fill="#c0f2fb" stroke="#595454" strokeWidth="0.5"/>
             <rect id="Rectangle_1115" data-name="Rectangle 1115" width="2.538" height="58.371" rx="1.269" transform="translate(931.793 713.456)" fill="#fff" stroke="#352a2b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0.5"/>
           </g>
         </g>
       </g>
       <g id="Building-4">
         <path id="Path_3924" data-name="Path 3924" d="M1074.724,676.16l2.627-2.091-.3-56.428-2.322-1.821v-8.194L1323.922,445.88l.005,300.964v.551h277.8V961.87H1323.585v-.058H1074.724V937.324l3.39-2.826v-56.68l-3.39-1.144v-5.235l3.263-2.05V812.962l-3.263-1.407V806.07l3.263-1.783V747.861l-3.263-1.547v-4.725l3.454-2.409V682.753l-3.454-1.585Z" transform="translate(16.055 0.004)" fill="#fff"/>
         <path id="building4_window-topright" d="M1207.285,608.96V530.217l103.287-67.736V608.96Z" transform="translate(16.055 0.004)" fill="#be2bbb"/>
         <rect id="building4_entrance-outer" width="202.557" height="163.766" transform="translate(1378.149 798.227)" fill="#a69f9f"/>
         <rect id="building4_entrance-shadow" width="14" height="170" transform="translate(1377.555 792.055)" fill="#373231" opacity="0.147"/>
         <rect id="building4_entrance-inside-2" data-name="building4_entrance-inside" width="151.341" height="144.542" transform="translate(1405.508 817.451)" fill="#595454"/>
         <path id="building4_window-topleft" d="M1191.368,540.359v69.973l-109.148,1.123Z" transform="translate(16.055 0.004)" fill="#be2bbb" stroke="rgba(0,0,0,0)" strokeWidth="1"/>
         <g id="building4_windows" transform="translate(0 0)">
           <rect id="Rectangle_1123" data-name="Rectangle 1123" width="101.279" height="56.427" transform="translate(1224.783 617.646)" fill="#e9e1e0"/>
           <rect id="Rectangle_1124" data-name="Rectangle 1124" width="113.19" height="56.427" transform="translate(1094.232 617.646)" fill="#e9e1e0"/>
           <rect id="Rectangle_1125" data-name="Rectangle 1125" width="112.136" height="56.427" transform="translate(1095.286 682.753)" fill="#e9e1e0"/>
           <rect id="Rectangle_1126" data-name="Rectangle 1126" width="101.279" height="56.427" transform="translate(1224.783 682.753)" fill="#e9e1e0"/>
           <rect id="Rectangle_1127" data-name="Rectangle 1127" width="101.279" height="56.427" transform="translate(1224.783 747.862)" fill="#e9e1e0"/>
           <rect id="Rectangle_1128" data-name="Rectangle 1128" width="112.136" height="56.427" transform="translate(1095.286 747.862)" fill="#e9e1e0"/>
           <rect id="Rectangle_1129" data-name="Rectangle 1129" width="101.279" height="56.427" transform="translate(1224.783 812.969)" fill="#e9e1e0"/>
           <rect id="Rectangle_1130" data-name="Rectangle 1130" width="112.136" height="56.427" transform="translate(1095.286 812.969)" fill="#e9e1e0"/>
           <rect id="Rectangle_1131" data-name="Rectangle 1131" width="112.136" height="56.427" transform="translate(1095.286 878.077)" fill="#e9e1e0"/>
           <rect id="Rectangle_1132" data-name="Rectangle 1132" width="101.279" height="56.427" transform="translate(1224.783 878.077)" fill="#e9e1e0"/>
         </g>
         <g id="building4" transform="translate(0 0)">
           <path id="Path_3925" data-name="Path 3925" d="M1074.724,676.16l2.627-2.091-.3-56.428-2.322-1.821v-8.194L1323.922,445.88l.005,300.964v.551h277.8V961.87H1323.585v-.058H1074.724V937.324l3.39-2.826v-56.68l-3.39-1.144v-5.235l3.263-2.05V812.962l-3.263-1.407V806.07l3.263-1.783V747.861l-3.263-1.547v-4.725l3.454-2.409V682.753l-3.454-1.585Z" transform="translate(16.054 0.004)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
           <path id="Path_3926" data-name="Path 3926" d="M1460.426,367.029l-138.541,80.025-1.256,300.8,145.081-85.978Z" transform="translate(16.054 0.004)" fill="#e9e1e0"/>
           <path id="Path_3927" data-name="Path 3927" d="M1460.426,367.029l-138.541,80.025-1.256,300.8,145.081-85.978Z" transform="translate(16.054 0.004)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
           <path id="Path_3930" data-name="Path 3930" d="M1663.654,661.879l-61.934,85.978H1320.627l145.081-85.978Z" transform="translate(16.054 0.004)" fill="#fff"/>
           <path id="Path_3931" data-name="Path 3931" d="M1663.654,661.879l-61.934,85.978H1320.627l145.081-85.978Z" transform="translate(16.054 0.004)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
           <path id="Path_3932" data-name="Path 3932" d="M1664.654,661.879V898.746l-62.995,63.243V748.2Z" transform="translate(16.054 0.004)" fill="#eee7e7"/>
           <path id="Path_3933" data-name="Path 3933" d="M1664.654,661.879V898.746l-62.995,63.243V748.2Z" transform="translate(16.054 0.004)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
         </g>
         <path id="building4_entrance-top" d="M0,0H202.557V15.643H0Z" transform="translate(1378.149 791.794)" fill="#be2bbb"/>
         <g id="building4_clipmask" transform="translate(0 0)" clipPath="url(#clipPath-4)">
           <g id="building4_rightdoor" transform="translate(16.054 0.004)">
             <rect id="Rectangle_1121" data-name="Rectangle 1121" width="76.341" height="144.542" transform="translate(1465.727 817.447)" fill="#c5ffe6" stroke="#595454" strokeWidth="0.5"/>
             <rect id="Rectangle_1163" data-name="Rectangle 1163" width="2.893" height="66.544" rx="1.446" transform="translate(1477.037 859.103)" fill="#fff" stroke="#595454" strokeWidth="0.5"/>
           </g>
           <g id="building4_leftdoor" transform="translate(16.054 0.004)">
             <g id="Group_1126" data-name="Group 1126">
               <rect id="Rectangle_1119" data-name="Rectangle 1119" width="76.671" height="144.542" transform="translate(1389.453 817.447)" fill="#c5ffe6" stroke="#595454" strokeWidth="0.5"/>
               <rect id="Rectangle_1164" data-name="Rectangle 1164" width="2.893" height="66.544" rx="1.446" transform="translate(1450.936 859.103)" fill="#fff" stroke="#595454" strokeWidth="0.5"/>
             </g>
           </g>
         </g>
       </g>
       <g id="Trees">
         <g id="tree2" transform="translate(16.055 0.004)">
           <path id="Path_3950" data-name="Path 3950" d="M730.126,675.14a36.4,36.4,0,0,0,4.272-16.87,39.1,39.1,0,0,0-1.661-10.966c-3.982-13.659-16.623-23.961-31.577-25.621l.355-11.393a39.02,39.02,0,0,0-36.138-38.841,39.138,39.138,0,0,0-77.44,8.053l.024,1.973a62.764,62.764,0,0,0,8.95,98.909,41.191,41.191,0,0,0,50.619,45.581c-.111,1.232-.177,2.478-.177,3.738,0,21.854,14.149,37.828,34.737,40.616l4.7,5.772A57.328,57.328,0,1,0,730.129,675.14Z" fill="#fff"/>
           <path id="Path_3951" data-name="Path 3951" d="M598.14,665.513c0-18.663,16.362-33.792,36.545-33.792s36.545,15.129,36.545,33.792m-31.539-34.292c-8.009-14.018-18.522-50.062-20.525-69.085m18.522,4.5c1,13.016-2.5,29.537-7.508,38.047M587.938,579.5a39.139,39.139,0,0,1,77.441-8.053,39.019,39.019,0,0,1,36.138,38.84m-37.541,32.949A36.818,36.818,0,0,1,734.4,658.265a36.4,36.4,0,0,1-4.272,16.87,57.323,57.323,0,1,1-43.339,100.95M657.213,806.3c3-58.072,19.149-99.989,33.042-140.539m17.069,13.079c-10.388,23.028-25.438,44.822-39.586,58.966m-7.56,35.875c-11-18.144-12.095-84.67-11-90.718" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
         </g>
         <g id="tree1" transform="translate(16.055 0.004)">
           <path id="Path_3952" data-name="Path 3952" d="M410.629,900.77a34.747,34.747,0,0,0-16.912,4.371l.026-1.321a32.772,32.772,0,0,0-64.844-6.743,33.587,33.587,0,0,0-26.474,17.289,34.9,34.9,0,1,0-36.41,55.087,53.852,53.852,0,0,0,15.452.38c10.751-.906,20.258-6.791,27.388-20.032a34.512,34.512,0,0,0,20.3,5.373,32.254,32.254,0,0,0,16.682-6.148,31.891,31.891,0,0,0,21.256,5.857,32.451,32.451,0,0,0,13.915-4.333c3.673,11.186,12.968,19.35,25.807,19.9.106.1,3.813.126,3.813.126a34.9,34.9,0,0,0,0-69.806Z" fill="#fff"/>
           <path id="Path_3953" data-name="Path 3953" d="M367.6,889.276c-1.677,15.929-13.838,64.655-20.545,76.392m5.036-72.619c-.839,10.9,2.1,28.662,6.287,35.788m63.01,4.759c-21.13,8.3-29.431,23.394-39.242,35.468m18.866-22.639c3.019-7.547,8.3-23.4,8.3-23.4m-134.9,1.7c4.923,22.162,18.545,32.705,28.951,44.269m-19.439-22.15c-6.986-4.152-21.823-11.83-21.823-11.83m40.325-20.65a34.9,34.9,0,1,0-33.047,55.787m124.365-66.333a32.772,32.772,0,0,0-64.844-6.743,32.832,32.832,0,0,0-26.474,17.289,34.815,34.815,0,0,1,6.847,26.721m101.357,29.488a34.9,34.9,0,1,0-34.9-34.9" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
         </g>
         <g id="tree3" transform="translate(16.055 0.004)">
           <path id="Path_3954" data-name="Path 3954" d="M1186.465,909.48c0-23.578-19.119-43.166-42.693-42.692-6.953.139-8.539.351-17.155,3.523l-.149-3.968c0-16.222-17.628-27.77-33.851-27.77a29.228,29.228,0,0,0-23.364,11.75l.3-1.74a32,32,0,0,0-61.211,13.066,31.629,31.629,0,0,0,3.713,14.663c-24.818,2.849-43.672,23.9-44.1,49.482-.439,26.242,24.724,49.191,49.839,49.219a50.086,50.086,0,0,0,25.424-7.082c6.3,5.8,15.092,9.9,24.707,9.148a33.478,33.478,0,0,0,16.892-6.084,42.672,42.672,0,0,0,61.168-18.878,42.7,42.7,0,0,0,40.48-42.637" fill="#fff"/>
           <path id="Path_3955" data-name="Path 3955" d="M1128.453,772.245c-.438-.606-.9-1.189-1.364-1.757a31.782,31.782,0,0,0-6.176-5.891,38.71,38.71,0,0,0-4.212-2.776l.084.217a34.515,34.515,0,0,0-3.709-1.678c-16.479-6.279-34.844.9-41.123,17.376-.8,2.1-2.3,5.446-2.643,7.578l.6.589a39.208,39.208,0,0,0-15.52,4.923l.579-1.527a31.931,31.931,0,1,0-58.223,25.4A37.043,37.043,0,0,0,964.5,862.866c.227.712.479,1.409.745,2.1a31.882,31.882,0,0,0,4.021,7.528,38.98,38.98,0,0,0,3.132,3.954l-.012-.231a34.6,34.6,0,0,0,3,2.754c13.685,11.123,33.373,10.058,44.5-3.627,1.415-1.742,3.892-4.453,4.882-6.37l24.386-8.331,59.375-18.782c1.655-3.921,3.789-9.971,4.108-14.047l.279.274a37.045,37.045,0,0,0,15.545-55.842Z" fill="#fff"/>
           <path id="Path_3956" data-name="Path 3956" d="M972.4,876.446a37,37,0,0,1,24.35-61.745,31.932,31.932,0,1,1,58.223-25.4m35.732,48.422c6.962-12.184,16.1-43.513,17.84-60.048m-16.1,3.916c-.871,11.313,2.175,25.673,6.526,33.07" fill="none" stroke="#8e7c75" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
           <path id="Path_3957" data-name="Path 3957" d="M1046.747,867.748c12.076,35.246,26.109,72.667,28.72,123.143m-43.556-111.775c9.029,20.016,22.111,38.959,34.408,51.253m6.571,31.182c9.557-15.77,10.513-73.594,9.557-78.851m66.453,12.658c-14.1,19.583-33.684,83.819-33.684,97.136m11.75-97.92c-3.133,14.1-3.917,61.1-3.917,61.1M1069.585,848.17a32,32,0,0,0-61.212,13.066,31.644,31.644,0,0,0,3.713,14.663,49.825,49.825,0,1,0,37.67,87.745m77.054-96.113c0-16.221-14.222-29.371-31.765-29.371s-31.765,13.15-31.765,29.371m80.525,84.229a42.693,42.693,0,1,0-42.693-42.693" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
         </g>
       </g>
       <rect id="Rectangle_1138" data-name="Rectangle 1138" width="2391.751" height="1003.374" transform="translate(16.054 0)" fill="none"/>
       <g id="Building-1" transform="translate(0 0)">
         <g id="building1_shadow" transform="translate(16.055 0.004)">
           <g id="Group_1112" data-name="Group 1112" clipPath="url(#clipPath-5)">
             <g id="Group_1111" data-name="Group 1111" opacity="0.16" >
               <g id="Group_1110" data-name="Group 1110">
                 <g id="Group_1109" data-name="Group 1109" clipPath="url(#clipPath-6)">
                   <path id="Path_3902" data-name="Path 3902" d="M362.742,284.154l-51.9,42.23v478.4h70.115v-478.4Z" fill="#292525"/>
                 </g>
               </g>
             </g>
           </g>
         </g>
         <g id="building1_bg" transform="translate(16.055 0.004)">
           <path id="Path_3903" data-name="Path 3903" d="M249.069,188.15l15.746,58.375v27.958l-1.31,2.166,1.31,692.853H32.991L34.3,188.15Z" fill="#fff"/>
           <path id="Path_3904" data-name="Path 3904" d="M249.069,188.15l17.23,58.927-1.484,27.406-1.31,2.166,1.31,692.853H32.991L34.3,188.15Z" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
           <path id="Path_3905" data-name="Path 3905" d="M33.646,247.18H266.292l-.082,27.8-2.7,1.694v31.462l2.606,1.495L264.165,969.5H33.646Z" fill="#fff"/>
           <path id="Path_3906" data-name="Path 3906" d="M33.646,247.18H266.292l-.082,27.8-2.7,1.694v31.462l2.606,1.495L264.165,969.5H33.646Z" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
           <rect id="Rectangle_1157" data-name="Rectangle 1157" width="229.205" height="31.434" transform="translate(34.301 276.649)" fill="#be2bbb" stroke="#595454" strokeWidth="1"/>
         </g>
         <g id="building1_entrance-outer" transform="translate(16.055 0.004)">
           <path id="Path_3943" data-name="Path 3943" d="M0,0H163.718V137.025H0Z" transform="translate(77.895 832.477)" fill="#a69f9f"/>
           <rect id="Rectangle_1167" data-name="Rectangle 1167" width="164" height="11" transform="translate(77.5 832.051)" fill="#be2bbb"/>
           <rect id="Rectangle_1168" data-name="Rectangle 1168" width="8" height="137" transform="translate(77.5 832.051)" fill="#373231" opacity="0.147"/>
         </g>
         <rect id="building1_entrance-inside" width="134" height="117" transform="translate(108.654 852.774)" fill="#474343"/>
         <g id="building1_clipmask" clipPath="url(#clipPath-7)">
           <g id="building1_leftdoor" transform="translate(15.981 -0.366)">
             <path id="Path_3940" data-name="Path 3940" d="M0,0H67.047V116.732H0Z" transform="translate(92.673 853.14)" fill="#fedcca" stroke="#595454" strokeWidth="0.5"/>
             <g id="Rectangle_1155" data-name="Rectangle 1155" transform="translate(152.073 884.37)" fill="#fff" stroke="#595454" strokeWidth="0.5">
               <rect width="3" height="61" rx="1.5" stroke="none"/>
               <rect x="0.25" y="0.25" width="2.5" height="60.5" rx="1.25" fill="none"/>
             </g>
           </g>
           <g id="building1_rightdoor" transform="translate(16.054 0.004)">
             <path id="Path_3908" data-name="Path 3908" d="M0,0H66.847V116.732H0Z" transform="translate(159.753 852.77)" fill="#fedcca" stroke="#595454" strokeWidth="0.5"/>
             <g id="Rectangle_1156" data-name="Rectangle 1156" transform="translate(164 884)" fill="#fff" stroke="#595454" strokeWidth="0.5">
               <rect width="3" height="61" rx="1.5" stroke="none"/>
               <rect x="0.25" y="0.25" width="2.5" height="60.5" rx="1.25" fill="none"/>
             </g>
           </g>
         </g>
         <g id="building1_windows" transform="translate(16.055 0.004)">
           <rect id="Rectangle_1169" data-name="Rectangle 1169" width="73.345" height="68.107" transform="translate(77.895 371.79)" fill="#e9e1e0"/>
           <rect id="Rectangle_1170" data-name="Rectangle 1170" width="74.655" height="68.107" transform="translate(166.957 371.79)" fill="#e9e1e0"/>
           <rect id="Rectangle_1171" data-name="Rectangle 1171" width="74.655" height="41.912" transform="translate(166.957 321.12)" fill="#e9e1e0"/>
           <rect id="Rectangle_1172" data-name="Rectangle 1172" width="73.345" height="41.912" transform="translate(77.895 321.12)" fill="#e9e1e0"/>
           <rect id="Rectangle_1173" data-name="Rectangle 1173" width="74.655" height="41.912" transform="translate(166.957 448.654)" fill="#e9e1e0"/>
           <rect id="Rectangle_1174" data-name="Rectangle 1174" width="73.345" height="41.912" transform="translate(77.895 448.654)" fill="#e9e1e0"/>
           <rect id="Rectangle_1175" data-name="Rectangle 1175" width="74.655" height="41.912" transform="translate(166.957 576.187)" fill="#e9e1e0"/>
           <rect id="Rectangle_1176" data-name="Rectangle 1176" width="73.345" height="41.912" transform="translate(77.895 576.187)" fill="#e9e1e0"/>
           <rect id="Rectangle_1177" data-name="Rectangle 1177" width="74.655" height="41.912" transform="translate(166.957 702.411)" fill="#e9e1e0"/>
           <rect id="Rectangle_1178" data-name="Rectangle 1178" width="73.345" height="41.912" transform="translate(77.895 702.411)" fill="#e9e1e0"/>
           <rect id="Rectangle_1179" data-name="Rectangle 1179" width="73.345" height="66.797" transform="translate(77.895 626.856)" fill="#e9e1e0"/>
           <rect id="Rectangle_1180" data-name="Rectangle 1180" width="74.655" height="66.797" transform="translate(166.957 626.856)" fill="#e9e1e0"/>
           <rect id="Rectangle_1181" data-name="Rectangle 1181" width="73.345" height="66.797" transform="translate(77.895 753.08)" fill="#e9e1e0"/>
           <rect id="Rectangle_1182" data-name="Rectangle 1182" width="74.655" height="66.797" transform="translate(166.957 753.08)" fill="#e9e1e0"/>
           <rect id="Rectangle_1183" data-name="Rectangle 1183" width="73.345" height="68.107" transform="translate(77.895 499.323)" fill="#e9e1e0"/>
           <rect id="Rectangle_1184" data-name="Rectangle 1184" width="74.655" height="68.107" transform="translate(166.957 499.323)" fill="#e9e1e0"/>
         </g>
       </g>
       <rect id="Rectangle_1162" data-name="Rectangle 1162" width="2391.75" height="1003.37" transform="translate(0 5.056)" fill="none"/>
       <g id="clouds" transform="translate(27.054 0.003)" opacity="0.748">
         <g id="Group_1095" data-name="Group 1095" >
           <g id="Group_1094" data-name="Group 1094" clipPath="url(#clipPath-8)">
             <path id="cloud8" className={animationStyles.animateCloud2} d="M1634.944,218.541a9.367,9.367,0,0,0-3.59.711c.009-.237.018-.473.018-.711a18.811,18.811,0,0,0-34.541-10.316,16.371,16.371,0,0,0-10.453-3.751c-.108,0-.215.006-.323.008a26.607,26.607,0,0,0-52.467,6.263c0,.174.01.345.013.519a13.047,13.047,0,0,0-12.528,11.372,8.2,8.2,0,0,0-13.12,5.137h136.393a9.4,9.4,0,0,0-9.4-9.232" fill="#e9e1e0"/>
             <path id="cloud7" className={animationStyles.animateCloud2} d="M1448.231,130.246a7.52,7.52,0,0,0-4.161,1.252,11.246,11.246,0,0,0-13.475-8.448q-.242.055-.48.121a19.35,19.35,0,0,0-28.876-13.9,22.59,22.59,0,0,0-40.706,13.5c-.332.021-.669,0-1.011,0a11.266,11.266,0,0,0-8.837,4.272,15.108,15.108,0,1,0-28.144,10.223h133.217a7.549,7.549,0,0,0-7.527-7.019" fill="#e9e1e0"/>
             <path id="cloud6" className={animationStyles.animateCloud2} d="M1891.231,119.664a13.468,13.468,0,0,1,23.262-9.25c-.009-.268-.02-.535-.02-.8a23.528,23.528,0,0,1,46.764-3.694,15.455,15.455,0,0,1,16.537-2.3,26.942,26.942,0,0,1,53.638,0,15.469,15.469,0,0,1,21.933,13.4,9.108,9.108,0,0,1,14.471,4.223H1891.325a13.433,13.433,0,0,1-.094-1.579" fill="#e9e1e0"/>
             <path id="cloud5" className={animationStyles.animateCloud2} d="M139.661,69.4a14.275,14.275,0,0,1,24.655-9.8c-.01-.284-.022-.567-.022-.853a24.937,24.937,0,0,1,49.564-3.915,16.391,16.391,0,0,1,17.529-2.439,28.556,28.556,0,0,1,56.85,0,16.4,16.4,0,0,1,23.246,14.2,9.654,9.654,0,0,1,15.338,4.476H139.76a14.547,14.547,0,0,1-.1-1.669" fill="#e9e1e0"/>
             <path id="cloud4" className={animationStyles.animateCloud1} d="M1270.285,49.937a8.752,8.752,0,0,1,10.086-8.711v-.1a17.627,17.627,0,0,1,34.914-3.443,10.324,10.324,0,0,1,6.955,1.323,14.523,14.523,0,0,1,28.075,5.224,14.852,14.852,0,0,1-.081,1.535,7.25,7.25,0,0,1,11.711,5.619h-91.53a8.768,8.768,0,0,1-.13-1.447" fill="#e9e1e0"/>
             <path id="cloud3" className={animationStyles.animateCloud1} d="M344.885,26.435a8.765,8.765,0,0,1,10.086-8.714v-.1a17.627,17.627,0,0,1,34.914-3.443A10.324,10.324,0,0,1,396.84,15.5a14.523,14.523,0,0,1,28.075,5.224,14.853,14.853,0,0,1-.081,1.535,7.25,7.25,0,0,1,11.711,5.619h-91.53a8.738,8.738,0,0,1-.13-1.444" fill="#e9e1e0"/>
             <path id="cloud2" className={animationStyles.animateCloud1} d="M1690.585,81.653a12.56,12.56,0,0,0-4.814.954c.012-.317.025-.634.025-.954a25.219,25.219,0,0,0-46.309-13.829,21.945,21.945,0,0,0-14.015-5.03c-.145,0-.288.008-.433.011a35.671,35.671,0,0,0-70.341,8.4c0,.234.013.464.017.7a17.491,17.491,0,0,0-16.8,15.247,11,11,0,0,0-17.59,6.887h182.86a12.608,12.608,0,0,0-12.6-12.386" fill="#e9e1e0"/>
             <path id="cloud1" className={animationStyles.animateCloud1} d="M2214.77,46.141a8.753,8.753,0,0,1,10.086-8.711v-.1a17.627,17.627,0,0,1,34.914-3.443,10.329,10.329,0,0,1,6.956,1.322,14.524,14.524,0,0,1,27.993,6.76,7.248,7.248,0,0,1,11.711,5.619H2214.9a8.768,8.768,0,0,1-.13-1.447" fill="#e9e1e0"/>
           </g>
         </g>
       </g>
     </svg>

   </div>
  )
}
