/*===== Components =====*/
import React from "react"

/*===== Styles =====*/
import componentStyles from './styles.module.scss'

/*===== Notes =====*/
// Add and edit the following to the 
// elements you want to make interactive:
/*
  className="droppable" data-door="1" data-door-name="options" data-link="/enrollment/options/" data-active="inactive"
*/

export default function EnrollmentDoors({ 
  //Props
  id, children
}) {

  //console.log(author);

  return (
    <div className={componentStyles.EnrollmentDoors}>
      <svg width="1976" height="1481" viewBox="0 0 1976 1481">
        <defs>
          <clipPath id="clip-iPad_Pro_12.9in_Enrollment_Hallway">
            <rect width="1976" height="1481"/>
          </clipPath>
        </defs>
        <g id="iPad_Pro_12.9in_Enrollment_Hallway" data-name="iPad Pro 12.9in – Enrollment Hallway" clipPath="url(#clip-iPad_Pro_12.9in_Enrollment_Hallway)">
          <rect width="1976" height="1481" fill="#fff"/>
          <path id="Path_5190" data-name="Path 5190" d="M0,0H1976V1481H0Z" fill="#fdd7c2" stroke="#fff" strokeWidth="1.04" opacity="0.196"/>
          <rect id="Rectangle_1904" data-name="Rectangle 1904" width="1989.786" height="327.747" transform="translate(-13.786 1153.253)" fill="#fff" stroke="#453838" strokeMiterlimit="10" strokeWidth="1"/>
          <g id="Layer_2" data-name="Layer 2" transform="translate(-2418.383 184)">
            <g id="Group_185" data-name="Group 185">
              <rect id="Rectangle_152" data-name="Rectangle 152" width="92.904" height="123.68" transform="translate(3890.97 507.821) rotate(-0.279)" fill="#fdd7c2" stroke="#453838" strokeMiterlimit="10" strokeWidth="1.332"/>
              <rect id="Rectangle_153" data-name="Rectangle 153" width="74.924" height="105.699" transform="translate(3900.003 516.767) rotate(-0.279)" fill="#fff"/>
              <rect id="Rectangle_154" data-name="Rectangle 154" width="38.509" height="6.181" transform="translate(3918.244 523.224) rotate(-0.279)" fill="#f0e8e5"/>
              <rect id="Rectangle_155" data-name="Rectangle 155" width="56.491" height="5.048" transform="translate(3909.328 538.843) rotate(-0.279)" fill="#f0e8e5"/>
              <rect id="Rectangle_156" data-name="Rectangle 156" width="56.491" height="5.048" transform="translate(3909.376 548.77) rotate(-0.279)" fill="#f0e8e5"/>
              <rect id="Rectangle_157" data-name="Rectangle 157" width="56.491" height="5.048" transform="translate(3909.425 558.698) rotate(-0.279)" fill="#f0e8e5"/>
              <rect id="Rectangle_158" data-name="Rectangle 158" width="56.491" height="5.048" transform="translate(3909.473 568.625) rotate(-0.279)" fill="#f0e8e5"/>
              <rect id="Rectangle_159" data-name="Rectangle 159" width="56.491" height="5.048" transform="translate(3909.521 578.553) rotate(-0.279)" fill="#f0e8e5"/>
              <rect id="Rectangle_160" data-name="Rectangle 160" width="56.491" height="5.047" transform="translate(3909.57 588.48) rotate(-0.279)" fill="#f0e8e5"/>
              <rect id="Rectangle_161" data-name="Rectangle 161" width="28.247" height="5.048" transform="translate(3937.923 610.686) rotate(-0.279)" fill="#f0e8e5"/>
            </g>
          </g>
          <g id="door1" transform="translate(-2434.939 184.607)">
            <g id="Group_193" data-name="Group 193" transform="translate(2589.634 442.31)" className="droppable" data-door="1" data-door-name="options" data-link="/enrollment/options/" data-active="inactive">
              <path id="Path_3483" data-name="Path 3483" d="M0,0H279.311V526.307H0Z" fill="#a69f9f"/>
              <rect id="Rectangle_181" data-name="Rectangle 181" width="232.288" height="486.115" transform="translate(24.139 23.792)" fill="#fff" stroke="#595454" strokeWidth="1"/>
              <rect id="Rectangle_183" data-name="Rectangle 183" width="10.71" height="161.774" transform="translate(6.14 185.963)" fill="#fff" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.403"/>
              <path id="Path_3486" data-name="Path 3486" d="M70.567,369.352,208.763,237.8" fill="none" stroke="#707070" strokeWidth="1"/>
              <path id="Path_3487" data-name="Path 3487" d="M70.567,369.352,208.763,237.8" transform="translate(-7 37)" fill="none" stroke="#707070" strokeWidth="1"/>
            </g>
          </g>
          <g id="door2" transform="translate(-2097.943 184.607)">
            <g id="Group_193-2" data-name="Group 193" transform="translate(2589.634 442.31)" className="droppable" data-door="2" data-door-name="enrollmentForm" data-link="/enrollment/enrollment-form/" data-active="inactive">
              <path id="Path_3483-2" data-name="Path 3483" d="M0,0H279.311V526.307H0Z" fill="#a69f9f"/>
              <rect id="Rectangle_181-2" data-name="Rectangle 181" width="52.952" height="231.056" transform="translate(24.139 23.792)" fill="#fff" stroke="#595454" strokeWidth="1"/>
              <rect id="Rectangle_183-2" data-name="Rectangle 183" width="10.71" height="161.774" transform="translate(6.14 185.963)" fill="#fff" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.403"/>
              <path id="Path_3487-2" data-name="Path 3487" d="M128.4,267.483,159.178,237.8" transform="translate(-89.051 -79.297)" fill="none" stroke="#707070" strokeWidth="1"/>
              <path id="Path_3488" data-name="Path 3488" d="M128.4,267.483l16.985-16.615" transform="translate(-89.051 -102.297)" fill="none" stroke="#707070" strokeWidth="1"/>
            </g>
          </g>
          <g id="door4" className="droppable" data-door="4" data-door-name="annexus" data-link="/enrollment/assistpoint/" data-active="inactive" transform="translate(-1432.294 184.607)">
            <g id="Group_193-3" data-name="Group 193" transform="translate(2589.634 442.31)">
              <path id="Path_3483-3" data-name="Path 3483" d="M0,0H279.311V526.307H0Z" fill="#a69f9f"/>
              <rect id="Rectangle_181-3" data-name="Rectangle 181" width="52.952" height="231.056" transform="translate(24.139 23.792)" fill="#fff" stroke="#595454" strokeWidth="1"/>
              <rect id="Rectangle_183-3" data-name="Rectangle 183" width="10.71" height="161.774" transform="translate(6.14 185.963)" fill="#fff" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.403"/>
              <path id="Path_3487-3" data-name="Path 3487" d="M128.4,267.483,159.178,237.8" transform="translate(-89.051 -79.297)" fill="none" stroke="#707070" strokeWidth="1"/>
              <path id="Path_3488-2" data-name="Path 3488" d="M128.4,267.483l16.985-16.615" transform="translate(-89.051 -102.297)" fill="none" stroke="#707070" strokeWidth="1"/>
            </g>
          </g>
          <g id="door3" transform="translate(-1769.29 184.607)">
            <g id="Group_193-4" data-name="Group 193" transform="translate(2589.634 442.31)" className="droppable" data-door="3" data-door-name="providerPortal" data-link="/enrollment/provider-portal/" data-active="inactive">
              <path id="Path_3483-4" data-name="Path 3483" d="M0,0H279.311V526.307H0Z" fill="#a69f9f"/>
              <rect id="Rectangle_181-4" data-name="Rectangle 181" width="232.288" height="486.115" transform="translate(24.139 23.792)" fill="#fff" stroke="#595454" strokeWidth="1"/>
              <rect id="Rectangle_183-4" data-name="Rectangle 183" width="10.71" height="161.774" transform="translate(6.14 185.963)" fill="#fff" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.403"/>
              <path id="Path_3486-2" data-name="Path 3486" d="M70.567,369.352,208.763,237.8" fill="none" stroke="#707070" strokeWidth="1"/>
              <path id="Path_3487-4" data-name="Path 3487" d="M70.567,369.352,208.763,237.8" transform="translate(-7 37)" fill="none" stroke="#707070" strokeWidth="1"/>
            </g>
          </g>
          <g id="chair" transform="translate(10.5 942.023)">
            <rect id="Rectangle_626" data-name="Rectangle 626" width="89.908" height="19.576" transform="translate(21.171 110.543)" fill="#fff"/>
            <rect id="Rectangle_627" data-name="Rectangle 627" width="89.908" height="19.576" transform="translate(21.171 110.543)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
            <g id="Group_883" data-name="Group 883">
              <g id="Group_1444" data-name="Group 1444">
                <path id="Path_3492" data-name="Path 3492" d="M17.082,236.56,7.344,361.781a3.54,3.54,0,0,0,7.034.775L32.244,237.367Z" transform="translate(-3.785 -122.105)" fill="#fff"/>
                <path id="Path_3493" data-name="Path 3493" d="M17.082,236.56,7.344,361.781a3.54,3.54,0,0,0,7.034.775L32.244,237.367Z" transform="translate(-3.785 -122.105)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                <path id="Path_3494" data-name="Path 3494" d="M229.6,236.56l9.738,125.221a3.54,3.54,0,0,1-7.034.775L214.44,237.367Z" transform="translate(-110.687 -122.105)" fill="#fff"/>
                <path id="Path_3495" data-name="Path 3495" d="M229.6,236.56l9.738,125.221a3.54,3.54,0,0,1-7.034.775L214.44,237.367Z" transform="translate(-110.687 -122.105)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                <path id="Path_3496" data-name="Path 3496" d="M132.727,99.455c-2.123-5.46-3.342-15.244-4.418-22.393l-7.447-63.829A14.4,14.4,0,0,0,106.555.5H42.111A14.4,14.4,0,0,0,27.8,13.234L20.357,77.062C19.281,84.212,18.062,94,15.939,99.455c0,0,43.575,5.869,58.394,5.869s58.394-5.869,58.394-5.869" transform="translate(-8.227 -0.258)" fill="#eee7e7"/>
                <path id="Path_3497" data-name="Path 3497" d="M132.727,99.455c-2.123-5.46-3.342-15.244-4.418-22.393l-7.447-63.829A14.4,14.4,0,0,0,106.555.5H42.111A14.4,14.4,0,0,0,27.8,13.234L20.357,77.062C19.281,84.212,18.062,94,15.939,99.455c0,0,43.575,5.869,58.394,5.869S132.727,99.455,132.727,99.455Z" transform="translate(-8.227 -0.258)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                <path id="Path_3498" data-name="Path 3498" d="M71.635,194.24a449.214,449.214,0,0,0,62.893,0" transform="translate(-36.976 -100.261)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
                <path id="Path_3499" data-name="Path 3499" d="M132.2,213.308c0-4.853-2.511-9.451-8.681-9.254l-5.481.466c-17.578,1.582-34.822,2.468-51.678,2.546-16.856-.079-34.1-.965-51.678-2.546L9.2,204.054c-6.17-.2-8.681,4.4-8.681,9.254-.209,4.422,1.605,7.57,7.1,8.624,11.3,2.169,30.366,3.132,45.177,3.488v0c4.606.109,13.323.173,13.558.173h.016c.236,0,8.953-.063,13.558-.173v0c14.811-.356,33.876-1.319,45.177-3.488,5.491-1.054,7.306-4.2,7.1-8.624" transform="translate(-0.258 -105.323)" fill="#eee7e7"/>
                <path id="Path_3500" data-name="Path 3500" d="M132.2,213.308c0-4.853-2.511-9.451-8.681-9.254l-5.481.466c-17.578,1.582-34.822,2.468-51.678,2.546-16.856-.079-34.1-.965-51.678-2.546L9.2,204.054c-6.17-.2-8.681,4.4-8.681,9.254-.209,4.422,1.605,7.57,7.1,8.624,11.3,2.169,30.366,3.132,45.177,3.488v0c4.606.109,13.323.173,13.558.173h.016c.236,0,8.953-.063,13.558-.173v0c14.811-.356,33.876-1.319,45.177-3.488C130.59,220.877,132.405,217.73,132.2,213.308Z" transform="translate(-0.258 -105.323)" fill="none" stroke="#595454" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
              </g>
            </g>
          </g>
          <g id="plant" transform="translate(-2418.383 184)">
            <g id="Group_187" data-name="Group 187">
              <g id="Group_186" data-name="Group 186">
                <path id="Path_271" data-name="Path 271" d="M3901.465,813.759c-4.351-5.35-7.147-13.57-7.147-22.806,0-16.124,8.5-29.2,18.977-29.2s18.977,13.071,18.977,29.2c0,9.236-2.8,17.456-7.148,22.806,4.352,5.349,7.148,13.569,7.148,22.805a38.681,38.681,0,0,1-5.192,20.023,38.681,38.681,0,0,1,5.192,20.023,39.4,39.4,0,0,1-4.542,18.923,39.4,39.4,0,0,1,4.542,18.923c0,16.123-8.5,29.194-18.977,29.194s-18.977-13.071-18.977-29.194a39.4,39.4,0,0,1,4.541-18.923,39.4,39.4,0,0,1-4.541-18.923,38.681,38.681,0,0,1,5.191-20.023,38.681,38.681,0,0,1-5.191-20.023C3894.318,827.328,3897.114,819.108,3901.465,813.759Z" fill="#f0e8e5" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.362"/>
                <line id="Line_23" data-name="Line 23" x1="1.64" y2="169.331" transform="translate(3912.475 776.355)" fill="#fff" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.362"/>
                <path id="Path_272" data-name="Path 272" d="M3954.115,823.746c-2.437-6.451-2.491-15.133.428-23.895,5.1-15.3,17.289-25.013,27.232-21.7s13.872,18.4,8.776,33.7c-2.919,8.762-8.169,15.677-13.989,19.377,2.438,6.451,2.492,15.133-.427,23.9a38.682,38.682,0,0,1-11.254,17.355,38.689,38.689,0,0,1-1.4,20.638,39.407,39.407,0,0,1-10.29,16.517,39.4,39.4,0,0,1-1.672,19.388c-5.1,15.3-17.288,25.013-27.231,21.7s-13.873-18.4-8.777-33.7a39.4,39.4,0,0,1,10.289-16.517,39.4,39.4,0,0,1,1.673-19.388,38.668,38.668,0,0,1,11.254-17.356,38.663,38.663,0,0,1,1.4-20.637C3943.046,834.361,3948.3,827.446,3954.115,823.746Z" fill="#fff" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.362"/>
                <line id="Line_24" data-name="Line 24" x1="55.076" y2="160.132" transform="translate(3922.863 792.259)" fill="#fff" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.362"/>
                <path id="Path_273" data-name="Path 273" d="M3883.171,863.643c-5.865-3.627-11.2-10.475-14.231-19.2-5.289-15.232-1.551-30.367,8.35-33.8s22.214,6.123,27.5,21.354c3.03,8.726,3.085,17.407.729,23.889,5.866,3.626,11.2,10.474,14.233,19.2a38.683,38.683,0,0,1,1.663,20.618,38.677,38.677,0,0,1,11.472,17.212,39.41,39.41,0,0,1,1.917,19.366,39.4,39.4,0,0,1,10.5,16.386c5.289,15.232,1.55,30.366-8.35,33.8s-22.214-6.123-27.5-21.355a39.409,39.409,0,0,1-1.918-19.365,39.4,39.4,0,0,1-10.5-16.386,38.665,38.665,0,0,1-1.664-20.618,38.673,38.673,0,0,1-11.472-17.212C3880.871,878.806,3880.816,870.123,3883.171,863.643Z" fill="#fff" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.362"/>
                <line id="Line_25" data-name="Line 25" x2="53.994" y2="160.5" transform="translate(3882.853 824.159)" fill="#fff" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.362"/>
              </g>
              <path id="Rectangle_162" data-name="Rectangle 162" d="M32.691,0h24.58A32.691,32.691,0,0,1,89.961,32.691v54.78a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V32.691A32.691,32.691,0,0,1,32.691,0Z" transform="translate(3968.364 985.463) rotate(180)" fill="#be2bbb" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.362"/>
              <line id="Line_26" data-name="Line 26" x1="89.007" transform="translate(3878.711 917.646)" fill="#fff" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.362"/>
              <path id="Rectangle_163" data-name="Rectangle 163" d="M8.176,0H104.32A8.176,8.176,0,0,1,112.5,8.176V11.25a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V8.176A8.176,8.176,0,0,1,8.176,0Z" transform="translate(3980.659 992.567) rotate(-180)" fill="#f0e8e5" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.362"/>
            </g>
          </g>
          <g id="Group_1442" data-name="Group 1442" transform="translate(6 61)">
            <g id="Group_881" data-name="Group 881" transform="translate(822.58 112.985)">
              <path id="Path_3491" data-name="Path 3491" d="M554.736,143.767H5.958a5.458,5.458,0,1,1,0-10.916H554.736a5.458,5.458,0,1,1,0,10.916Z" transform="translate(-0.127 2.843)" fill="none" stroke="#a69f9f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
              <line id="Line_162" data-name="Line 162" y1="130.158" transform="translate(108.106 5.536)" fill="none" stroke="#a69f9f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
              <line id="Line_163" data-name="Line 163" y1="135.694" transform="translate(452.334 0)" fill="none" stroke="#a69f9f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
              <rect id="Rectangle_624" data-name="Rectangle 624" width="190.443" height="10.916" transform="translate(184.999 135.694)" fill="#a69f9f"/>
            </g>
            <g id="Group_1443" data-name="Group 1443" transform="translate(178.58 112.985)">
              <path id="Path_3491-2" data-name="Path 3491" d="M554.736,143.767H5.958a5.458,5.458,0,1,1,0-10.916H554.736a5.458,5.458,0,1,1,0,10.916Z" transform="translate(-0.127 2.843)" fill="none" stroke="#a69f9f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
              <line id="Line_162-2" data-name="Line 162" y1="130.158" transform="translate(108.106 5.536)" fill="none" stroke="#a69f9f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
              <line id="Line_163-2" data-name="Line 163" y1="135.694" transform="translate(452.334 0)" fill="none" stroke="#a69f9f" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"/>
              <rect id="Rectangle_624-2" data-name="Rectangle 624" width="190.443" height="10.916" transform="translate(184.999 135.694)" fill="#a69f9f"/>
            </g>
          </g>
          <g id="sign2" transform="translate(0 20)">
            <rect id="Rectangle_185" data-name="Rectangle 185" width="279.31" height="86.697" transform="translate(491.691 491.358)" fill="#fff" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.264"/>
            <rect id="Rectangle_1905" data-name="Rectangle 1905" width="279.31" height="9.697" transform="translate(491.691 568.358)" fill="#fecdb4" stroke="#fecdb4" strokeLinecap="round" strokeWidth="1.264"/>
            <text id="HOW_TO_COMPLETE_THE_ENROLLMENT_FORM" data-name="HOW TO COMPLETE THE ENROLLMENT FORM" transform="translate(628 511)" fill="#595454" fontSize="22"  letterSpacing="0.02em"><tspan x="-124.708" y="24">HOW TO COMPLETE THE </tspan><tspan x="-104.561" y="46">ENROLLMENT FORM</tspan></text>
          </g>
          <g id="sign4" transform="translate(665.649 20)">
            <rect id="Rectangle_185-2" data-name="Rectangle 185" width="279.31" height="86.697" transform="translate(491.851 491.358)" fill="#fff" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.264"/>
            <rect id="Rectangle_1905-2" data-name="Rectangle 1905" width="279.31" height="9.697" transform="translate(491.691 568.358)" fill="#fecdb4" stroke="#fecdb4" strokeLinecap="round" strokeWidth="1.264"/>
            <text id="AssistPoint_Digital_Enrollment" data-name="AssistPoint Digital Enrollment" transform="translate(630 511)" fill="#595454" fontSize="22" ><tspan x="-106.101" y="24">ASSISTPOINT DIGITAL </tspan><tspan x="-68.347" y="46">ENROLLMENT</tspan></text>
          </g>
          <g id="sign1" transform="translate(-336.996 20)">
            <rect id="Rectangle_185-3" data-name="Rectangle 185" width="279.31" height="86.697" transform="translate(491.691 491.358)" fill="#fff" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.264"/>
            <rect id="Rectangle_1905-3" data-name="Rectangle 1905" width="279.31" height="9.697" transform="translate(491.691 568.358)" fill="#fecdb4" stroke="#fecdb4" strokeLinecap="round" strokeWidth="1.264"/>
            <text id="OPTIONS_TO_ENROLL" data-name="OPTIONS TO ENROLL" transform="translate(630 522)" fill="#595454" fontSize="22"  letterSpacing="0.02em"><tspan x="-107.515" y="24">OPTIONS TO ENROLL</tspan></text>
          </g>
          <g id="sign3" transform="translate(328.653 20)">
            <rect id="Rectangle_185-4" data-name="Rectangle 185" width="279.31" height="86.697" transform="translate(491.847 491.358)" fill="#fff" stroke="#9f9089" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.264"/>
            <rect id="Rectangle_1905-4" data-name="Rectangle 1905" width="279.31" height="9.697" transform="translate(491.691 568.358)" fill="#fecdb4" stroke="#fecdb4" strokeLinecap="round" strokeWidth="1.264"/>
            <text id="PROVIDER_PORTAL" data-name="PROVIDER PORTAL" transform="translate(632 522)" fill="#595454" fontSize="22"  letterSpacing="0.02em"><tspan x="-94.19" y="24">PROVIDER PORTAL</tspan></text>
          </g>
        </g>
      </svg>


    </div>
      
  )
}
