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

export default function AccessDoors({ 
  //Props
  id, children
}) {

  //console.log(author);

  return (
    <div className={componentStyles.AccessDoors}>
      <svg width="2009.752" height="1175.542" viewBox="0 0 2009.752 1175.542">
        <defs>
          <linearGradient id="linear-gradient" x1="0.263" y1="-0.1" x2="0.918" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0" stop-color="#373231"/>
            <stop offset="1" stop-color="#453838"/>
          </linearGradient>
          <filter id="Rectangle_638" x="475.822" y="643.612" width="133.8" height="82.848" filterUnits="userSpaceOnUse">
            <feOffset dy="3" input="SourceAlpha"/>
            <feGaussianBlur stdDeviation="3" result="blur"/>
            <feFlood flood-color="#595454" flood-opacity="0.2"/>
            <feComposite operator="in" in2="blur"/>
            <feComposite in="SourceGraphic"/>
          </filter>
          <filter id="Rectangle_638-2" x="813.957" y="643.612" width="133.8" height="82.848" filterUnits="userSpaceOnUse">
            <feOffset dy="3" input="SourceAlpha"/>
            <feGaussianBlur stdDeviation="3" result="blur-2"/>
            <feFlood flood-color="#595454" flood-opacity="0.2"/>
            <feComposite operator="in" in2="blur-2"/>
            <feComposite in="SourceGraphic"/>
          </filter>
          <filter id="Rectangle_638-3" x="1152.092" y="643.613" width="133.8" height="82.848" filterUnits="userSpaceOnUse">
            <feOffset dy="3" input="SourceAlpha"/>
            <feGaussianBlur stdDeviation="3" result="blur-3"/>
            <feFlood flood-color="#595454" flood-opacity="0.2"/>
            <feComposite operator="in" in2="blur-3"/>
            <feComposite in="SourceGraphic"/>
          </filter>
        </defs>
        <g id="Group_1555" data-name="Group 1555" transform="translate(82 79)">
          <g id="Misc">
            <path id="Path_3792" data-name="Path 3792" d="M0,0H1932.2V1010.093H0Z" transform="translate(-14.793 -16.624)" fill="#fef5db" stroke="#595454" stroke-width="1" opacity="0.196"/>
            <rect id="Rectangle_151" data-name="Rectangle 151" width="1941.038" height="102.572" transform="translate(-13.786 993.47)" fill="#fff" stroke="#453838" stroke-miterlimit="10" stroke-width="1"/>
            <rect id="Rectangle_791" data-name="Rectangle 791" width="1692.952" height="1001.857" transform="translate(-82 -1.997)" fill="none"/>
            <rect id="Rectangle_797" data-name="Rectangle 797" width="1692.952" height="1001.857" transform="translate(-82 -1.997)" fill="none"/>
            <rect id="Rectangle_809" data-name="Rectangle 809" width="1692.952" height="1001.857" transform="translate(-82 -1.997)" fill="none"/>
            <rect id="Rectangle_821" data-name="Rectangle 821" width="1692.952" height="1001.857" transform="translate(-82 -1.997)" fill="none"/>
            <rect id="Rectangle_833" data-name="Rectangle 833" width="1692.952" height="1001.857" transform="translate(-82 -1.997)" fill="none"/>
            <rect id="Rectangle_850" data-name="Rectangle 850" width="1692.952" height="1001.857" transform="translate(-82 -1.997)" fill="none"/>
            <rect id="Rectangle_869" data-name="Rectangle 869" width="1692.952" height="1001.857" transform="translate(-82 -1.997)" fill="none"/>
            <rect id="Rectangle_870" data-name="Rectangle 870" width="1692.95" height="1078.86" transform="translate(-82 -79)" fill="none"/>
            <line id="Line_279" data-name="Line 279" x2="349" transform="translate(730.924 1028.468)" fill="none" stroke="#707070" stroke-width="1"/>
          </g>
          <g id="Lights">
            <path id="Path_3946" data-name="Path 3946" d="M142.192,304.553h0a12.5,12.5,0,0,1-12.467-12.467v-20.4a12.467,12.467,0,1,1,24.934,0v20.4a12.5,12.5,0,0,1-12.467,12.467" transform="translate(-82 -2)" fill="#fde6c2"/>
            <path id="Union_4" data-name="Union 4" d="M-10106-5262.125a20.2,20.2,0,0,1,13.072-14.751v-23.955a6.634,6.634,0,0,1,4.591-6.31V-5335h4.078v27.858a6.634,6.634,0,0,1,4.591,6.31v23.955a20.207,20.207,0,0,1,13.072,14.751Z" transform="translate(10146.492 5533.172)" fill="#908a89"/>
            <path id="Path_3765" data-name="Path 3765" d="M607.291,304.553h0a12.5,12.5,0,0,1-12.467-12.467v-20.4a12.467,12.467,0,1,1,24.934,0v20.4a12.5,12.5,0,0,1-12.467,12.467" transform="translate(-82 -2)" fill="#fde6c2"/>
            <path id="Path_3767" data-name="Path 3767" d="M626.993,273.046a20.165,20.165,0,0,0-39.4,0Z" transform="translate(-82 -2)" fill="#908a89"/>
            <path id="Path_3768" data-name="Path 3768" d="M613.921,262.392h-13.26v-28.05a6.63,6.63,0,0,1,13.26,0Z" transform="translate(-82 -2)" fill="#908a89"/>
            <rect id="Rectangle_861" data-name="Rectangle 861" width="4.08" height="35.36" transform="translate(523.251 198.172)" fill="#908a89"/>
            <path id="Path_3769" data-name="Path 3769" d="M1072.389,304.553h0a12.5,12.5,0,0,1-12.467-12.467v-20.4a12.467,12.467,0,1,1,24.934,0v20.4a12.5,12.5,0,0,1-12.467,12.467" transform="translate(-82 -2)" fill="#fde6c2"/>
            <path id="Union_2" data-name="Union 2" d="M-10106-5262.125a20.21,20.21,0,0,1,13.072-14.751v-23.955a6.634,6.634,0,0,1,4.591-6.31V-5335h4.078v27.858a6.634,6.634,0,0,1,4.591,6.31v23.955a20.207,20.207,0,0,1,13.072,14.751Z" transform="translate(11076.688 5533.172)" fill="#908a89"/>
            <path id="Path_3773" data-name="Path 3773" d="M1537.488,304.553h0a12.5,12.5,0,0,1-12.467-12.467v-20.4a12.467,12.467,0,1,1,24.934,0v20.4a12.5,12.5,0,0,1-12.467,12.467" transform="translate(-82 -2)" fill="#fde6c2"/>
            <path id="Union_3" data-name="Union 3" d="M-10106-5262.125a20.2,20.2,0,0,1,13.072-14.751v-23.955a6.634,6.634,0,0,1,4.591-6.31V-5335h4.078v27.858a6.634,6.634,0,0,1,4.591,6.31v23.955a20.207,20.207,0,0,1,13.072,14.751Z" transform="translate(11541.787 5533.172)" fill="#908a89"/>
            <rect id="Rectangle_864" data-name="Rectangle 864" width="1656.74" height="4.135" transform="translate(-82 214.482)" fill="#908a89"/>
          </g>
          <g id="Plant" transform="translate(-8170.069 -6606.283)">
            <line id="Line_269" data-name="Line 269" x2="27.641" y2="156.763" transform="translate(9656.695 7340.178)" fill="#e9e1e0"/>
            <line id="Line_271" data-name="Line 271" x2="20.903" y2="118.553" transform="translate(9640.26 7378.389)" fill="#e9e1e0"/>
            <line id="Line_273" data-name="Line 273" x2="19.728" y2="111.882" transform="translate(9687.78 7385.059)" fill="#e9e1e0"/>
            <g id="Group_1128" data-name="Group 1128" transform="translate(0 1)">
              <path id="Path_3809" data-name="Path 3809" d="M1568.046,783.58h0c-6.4,0-10.671,5.187-9.543,11.586L1580.408,919.4h23.172l-21.905-124.234a14.421,14.421,0,0,0-13.629-11.586" transform="translate(8069.17 6577.542)" fill="#e9e1e0" stroke="#707070" stroke-width="1"/>
              <path id="Path_3811" data-name="Path 3811" d="M1611.386,789.622h0c-6.4,0-10.671,5.188-9.543,11.586l20.738,117.609h23.172l-20.738-117.609a14.421,14.421,0,0,0-13.629-11.586" transform="translate(8073.342 6578.123)" fill="#e9e1e0" stroke="#707070" stroke-width="1"/>
              <path id="Path_3813" data-name="Path 3813" d="M1583.084,748.992h0c-6.4,0-10.671,5.188-9.543,11.586l28.591,162.151H1625.3l-28.592-162.151a14.421,14.421,0,0,0-13.629-11.586" transform="translate(8070.617 6574.212)" fill="#e9e1e0" stroke="#707070" stroke-width="1"/>
              <line id="Line_270" data-name="Line 270" x2="27.641" y2="156.763" transform="translate(9656.695 7340.178)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
              <line id="Line_272" data-name="Line 272" x2="20.903" y2="118.553" transform="translate(9640.26 7378.389)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
              <line id="Line_274" data-name="Line 274" x2="19.728" y2="111.882" transform="translate(9687.78 7385.059)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5"/>
            </g>
            <path id="Path_3815" data-name="Path 3815" d="M1556.558,907.474c0,36.982,6.085,72.384,41.9,102.812h106.966V907.474Z" transform="translate(8069 6589.467)" fill="#be2bbb"/>
            <line id="Line_275" data-name="Line 275" x2="113.53" transform="translate(9626.25 7514.657)" fill="#fff"/>
            <line id="Line_276" data-name="Line 276" x2="113.53" transform="translate(9626.25 7514.657)" fill="none" stroke="#474343" stroke-linejoin="round" stroke-width="1"/>
          </g>
          <g id="Doors">
            <g id="Door_1" data-name="Door 1" transform="translate(321.409 468.78)">
              <g id="Group_193" data-name="Group 193" transform="translate(0 0)">
                <path id="Path_3483" data-name="Path 3483" d="M0,0H278.452V524.689H0Z" fill="#a69f9f"/>
                <rect id="Rectangle_181" data-name="Rectangle 181" width="231.573" height="484.621" transform="translate(24.064 23.719)" fill="#fff" stroke="#595454" stroke-width="1"/>
                <rect id="Rectangle_183" data-name="Rectangle 183" width="10.677" height="161.277" transform="translate(6.121 185.392)" fill="#fff" stroke="#9f9089" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.403"/>
                <path id="Path_3486" data-name="Path 3486" d="M70.567,368.947,208.338,237.8" transform="translate(-0.217 -0.731)" fill="none" stroke="#707070" stroke-width="1"/>
                <path id="Path_3487" data-name="Path 3487" d="M70.567,368.947,208.338,237.8" transform="translate(-7.196 36.155)" fill="none" stroke="#707070" stroke-width="1"/>
              </g>
              <g id="Component_3_23" data-name="Component 3 – 23" transform="translate(81.413 101.832)">
                <g transform="matrix(1, 0, 0, 1, -484.82, -649.61)" filter="url(#Rectangle_638)">
                  <rect id="Rectangle_638-4" data-name="Rectangle 638" width="115.8" height="64.848" rx="3" transform="translate(484.82 649.61)" fill="url(#linear-gradient)"/>
                </g>
                <text id="Scan_Here" data-name="Scan
      Here" transform="translate(52.514 29.689)" fill="#fff" font-size="17" font-family="SegoeUI-Bold, Segoe UI" font-weight="700"><tspan x="0" y="0">SCAN</tspan><tspan x="0" y="17">HERE</tspan></text>
                <g id="Group_875" data-name="Group 875" transform="translate(21.943 18.061) rotate(3)">
                  <path id="Path_160" data-name="Path 160" d="M0,6.082c0,.018,0,.037,0,.056a8.581,8.581,0,0,0,1.625,5.024A5.6,5.6,0,0,0,2,11.651,1.554,1.554,0,0,0,4.319,9.578s-.019-.021-.046-.056l.007-.007.012.012a1.617,1.617,0,0,1-.146-.177A5.835,5.835,0,0,1,3.109,6.082,5.833,5.833,0,0,1,4.144,2.821a1.888,1.888,0,0,1,.147-.18l-.012.012-.007-.006c.027-.035.046-.057.046-.057A1.555,1.555,0,0,0,2,.518a5.615,5.615,0,0,0-.378.491A8.58,8.58,0,0,0,0,6.03Z" transform="translate(18.584 8.648)" fill="#fff"/>
                  <path id="Path_161" data-name="Path 161" d="M3.592,0A1.525,1.525,0,0,1,4.8,2.452a11.349,11.349,0,0,0-1.752,6.3A12.492,12.492,0,0,0,4.836,15.3,1.525,1.525,0,0,1,2.347,17.06,15.281,15.281,0,0,1,0,8.747,14.161,14.161,0,0,1,2.379.6,1.523,1.523,0,0,1,3.592,0Z" transform="translate(12.704 5.934)" fill="#fff"/>
                  <path id="Path_162" data-name="Path 162" d="M4.351,0a1.526,1.526,0,0,1,1.22,2.439,16.681,16.681,0,0,0-2.519,9.179A18.028,18.028,0,0,0,5.6,21.131,1.526,1.526,0,1,1,3.1,22.87,21,21,0,0,1,0,11.618,19.38,19.38,0,0,1,3.127.613,1.523,1.523,0,0,1,4.351,0Z" transform="translate(6.35 3.022)" fill="#fff"/>
                  <path id="Path_163" data-name="Path 163" d="M5.184,0A1.526,1.526,0,0,1,6.4,2.439,22.024,22.024,0,0,0,3.051,14.6,24.087,24.087,0,0,0,6.439,27.179,1.526,1.526,0,0,1,3.93,28.915,26.7,26.7,0,0,1,0,14.6C0,6.012,3.8.828,3.961.613A1.522,1.522,0,0,1,5.184,0Z" transform="translate(0 0)" fill="#fff"/>
                </g>
                <g id="Rectangle_639" data-name="Rectangle 639" transform="translate(1.158 1.158)" fill="none" stroke="#707070" stroke-width="1.5">
                  <rect width="114.063" height="62.532" rx="3" stroke="none"/>
                  <rect x="0.75" y="0.75" width="112.563" height="61.032" rx="2.25" fill="none"/>
                </g>
              </g>
            </g>
            <g id="Group_1060" data-name="Group 1060" transform="translate(321.409 352.709)">
              <path id="Path_3791" data-name="Path 3791" d="M0,0H278.451V86.431H0Z" transform="translate(0 0)" fill="#fff" stroke="#9f9089" stroke-linecap="round" stroke-width="1.264"/>
              <text id="BENEFITS_REVIEW" data-name="BENEFITS REVIEW" transform="translate(16.565 30.477)" fill="#595454" font-size="22" font-family="SegoeUI, Segoe UI" letter-spacing="0.02em"><tspan x="-89.189" y="24">BENEFITS REVIEW</tspan></text>
              <rect id="Rectangle_617" data-name="Rectangle 617" width="276.761" height="11.58" transform="translate(0.353 74.855)" fill="#ffd186"/>
            </g>
            <g id="Group_1060-2" data-name="Group 1060" transform="translate(656.423 352.709)">
              <path id="Path_3791-2" data-name="Path 3791" d="M0,0H278.451V86.431H0Z" transform="translate(3.121 0)" fill="#fff" stroke="#9f9089" stroke-linecap="round" stroke-width="1.264"/>
              <text id="PA_Appeals_Support" data-name="PA &amp; Appeals Support" transform="translate(-1.153 32.215)" fill="#595454" font-size="22" font-family="SegoeUI, Segoe UI"><tspan x="-119.308" y="24">PA &amp; APPEALS SUPPORT</tspan></text>
              <rect id="Rectangle_617-2" data-name="Rectangle 617" width="276.761" height="11.58" transform="translate(3.474 74.855)" fill="#ffd186"/>
            </g>
            <g id="Door_2" data-name="Door 2" transform="translate(659.544 468.613)">
              <g id="Group_193-2" data-name="Group 193" transform="translate(0 0)">
                <path id="Path_3483-2" data-name="Path 3483" d="M0,0H278.451V524.688H0Z" fill="#a69f9f"/>
                <rect id="Rectangle_181-2" data-name="Rectangle 181" width="52.789" height="230.345" transform="translate(24.064 23.719)" fill="#fff" stroke="#595454" stroke-width="1"/>
                <rect id="Rectangle_183-2" data-name="Rectangle 183" width="10.677" height="161.276" transform="translate(6.121 185.391)" fill="#fff" stroke="#9f9089" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.403"/>
                <path id="Path_3487-2" data-name="Path 3487" d="M128.4,267.392,159.083,237.8" transform="translate(-89.172 -79.785)" fill="none" stroke="#707070" stroke-width="1"/>
                <path id="Path_3488" data-name="Path 3488" d="M128.4,267.432l16.933-16.564" transform="translate(-89.172 -102.754)" fill="none" stroke="#707070" stroke-width="1"/>
              </g>
              <g id="Component_3_24" data-name="Component 3 – 24" transform="translate(81.413 101.999)">
                <g transform="matrix(1, 0, 0, 1, -822.96, -649.61)" filter="url(#Rectangle_638-2)">
                  <rect id="Rectangle_638-5" data-name="Rectangle 638" width="115.8" height="64.848" rx="3" transform="translate(822.96 649.61)" fill="url(#linear-gradient)"/>
                </g>
                <text id="Scan_Here-2" data-name="Scan
      Here" transform="translate(52.514 29.689)" fill="#fff" font-size="17" font-family="SegoeUI-Bold, Segoe UI" font-weight="700"><tspan x="0" y="0">SCAN</tspan><tspan x="0" y="17">HERE</tspan></text>
                <g id="Group_875-2" data-name="Group 875" transform="translate(21.943 18.061) rotate(3)">
                  <path id="Path_160-2" data-name="Path 160" d="M0,6.082c0,.018,0,.037,0,.056a8.581,8.581,0,0,0,1.625,5.024A5.6,5.6,0,0,0,2,11.651,1.554,1.554,0,0,0,4.319,9.578s-.019-.021-.046-.056l.007-.007.012.012a1.617,1.617,0,0,1-.146-.177A5.835,5.835,0,0,1,3.109,6.082,5.833,5.833,0,0,1,4.144,2.821a1.888,1.888,0,0,1,.147-.18l-.012.012-.007-.006c.027-.035.046-.057.046-.057A1.555,1.555,0,0,0,2,.518a5.615,5.615,0,0,0-.378.491A8.58,8.58,0,0,0,0,6.03Z" transform="translate(18.584 8.648)" fill="#fff"/>
                  <path id="Path_161-2" data-name="Path 161" d="M3.592,0A1.525,1.525,0,0,1,4.8,2.452a11.349,11.349,0,0,0-1.752,6.3A12.492,12.492,0,0,0,4.836,15.3,1.525,1.525,0,0,1,2.347,17.06,15.281,15.281,0,0,1,0,8.747,14.161,14.161,0,0,1,2.379.6,1.523,1.523,0,0,1,3.592,0Z" transform="translate(12.704 5.934)" fill="#fff"/>
                  <path id="Path_162-2" data-name="Path 162" d="M4.351,0a1.526,1.526,0,0,1,1.22,2.439,16.681,16.681,0,0,0-2.519,9.179A18.028,18.028,0,0,0,5.6,21.131,1.526,1.526,0,1,1,3.1,22.87,21,21,0,0,1,0,11.618,19.38,19.38,0,0,1,3.127.613,1.523,1.523,0,0,1,4.351,0Z" transform="translate(6.35 3.022)" fill="#fff"/>
                  <path id="Path_163-2" data-name="Path 163" d="M5.184,0A1.526,1.526,0,0,1,6.4,2.439,22.024,22.024,0,0,0,3.051,14.6,24.087,24.087,0,0,0,6.439,27.179,1.526,1.526,0,0,1,3.93,28.915,26.7,26.7,0,0,1,0,14.6C0,6.012,3.8.828,3.961.613A1.522,1.522,0,0,1,5.184,0Z" transform="translate(0 0)" fill="#fff"/>
                </g>
                <g id="Rectangle_639-2" data-name="Rectangle 639" transform="translate(1.158 1.158)" fill="none" stroke="#707070" stroke-width="1.5">
                  <rect width="114.063" height="62.532" rx="3" stroke="none"/>
                  <rect x="0.75" y="0.75" width="112.563" height="61.032" rx="2.25" fill="none"/>
                </g>
              </g>
            </g>
            <g id="Door_3" data-name="Door 3" transform="translate(997.678 468.611)">
              <g id="Group_193-3" data-name="Group 193" transform="translate(0 0)">
                <path id="Path_3483-3" data-name="Path 3483" d="M0,0H278.452V524.689H0Z" fill="#a69f9f"/>
                <rect id="Rectangle_181-3" data-name="Rectangle 181" width="231.573" height="484.621" transform="translate(24.064 23.719)" fill="#fff" stroke="#595454" stroke-width="1"/>
                <rect id="Rectangle_183-3" data-name="Rectangle 183" width="10.677" height="161.277" transform="translate(6.121 185.392)" fill="#fff" stroke="#9f9089" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.403"/>
                <path id="Path_3486-2" data-name="Path 3486" d="M70.567,368.947,208.338,237.8" transform="translate(-0.217 -0.731)" fill="none" stroke="#707070" stroke-width="1"/>
                <path id="Path_3487-3" data-name="Path 3487" d="M70.567,368.947,208.338,237.8" transform="translate(-7.196 36.155)" fill="none" stroke="#707070" stroke-width="1"/>
              </g>
              <g id="Component_3_25" data-name="Component 3 – 25" transform="translate(81.414 102.001)">
                <g transform="matrix(1, 0, 0, 1, -1161.09, -649.61)" filter="url(#Rectangle_638-3)">
                  <rect id="Rectangle_638-6" data-name="Rectangle 638" width="115.8" height="64.848" rx="3" transform="translate(1161.09 649.61)" fill="url(#linear-gradient)"/>
                </g>
                <text id="Scan_Here-3" data-name="Scan
      Here" transform="translate(52.514 29.689)" fill="#fff" font-size="17" font-family="SegoeUI-Bold, Segoe UI" font-weight="700"><tspan x="0" y="0">SCAN</tspan><tspan x="0" y="17">HERE</tspan></text>
                <g id="Group_875-3" data-name="Group 875" transform="translate(21.943 18.061) rotate(3)">
                  <path id="Path_160-3" data-name="Path 160" d="M0,6.082c0,.018,0,.037,0,.056a8.581,8.581,0,0,0,1.625,5.024A5.6,5.6,0,0,0,2,11.651,1.554,1.554,0,0,0,4.319,9.578s-.019-.021-.046-.056l.007-.007.012.012a1.617,1.617,0,0,1-.146-.177A5.835,5.835,0,0,1,3.109,6.082,5.833,5.833,0,0,1,4.144,2.821a1.888,1.888,0,0,1,.147-.18l-.012.012-.007-.006c.027-.035.046-.057.046-.057A1.555,1.555,0,0,0,2,.518a5.615,5.615,0,0,0-.378.491A8.58,8.58,0,0,0,0,6.03Z" transform="translate(18.584 8.648)" fill="#fff"/>
                  <path id="Path_161-3" data-name="Path 161" d="M3.592,0A1.525,1.525,0,0,1,4.8,2.452a11.349,11.349,0,0,0-1.752,6.3A12.492,12.492,0,0,0,4.836,15.3,1.525,1.525,0,0,1,2.347,17.06,15.281,15.281,0,0,1,0,8.747,14.161,14.161,0,0,1,2.379.6,1.523,1.523,0,0,1,3.592,0Z" transform="translate(12.704 5.934)" fill="#fff"/>
                  <path id="Path_162-3" data-name="Path 162" d="M4.351,0a1.526,1.526,0,0,1,1.22,2.439,16.681,16.681,0,0,0-2.519,9.179A18.028,18.028,0,0,0,5.6,21.131,1.526,1.526,0,1,1,3.1,22.87,21,21,0,0,1,0,11.618,19.38,19.38,0,0,1,3.127.613,1.523,1.523,0,0,1,4.351,0Z" transform="translate(6.35 3.022)" fill="#fff"/>
                  <path id="Path_163-3" data-name="Path 163" d="M5.184,0A1.526,1.526,0,0,1,6.4,2.439,22.024,22.024,0,0,0,3.051,14.6,24.087,24.087,0,0,0,6.439,27.179,1.526,1.526,0,0,1,3.93,28.915,26.7,26.7,0,0,1,0,14.6C0,6.012,3.8.828,3.961.613A1.522,1.522,0,0,1,5.184,0Z" transform="translate(0 0)" fill="#fff"/>
                </g>
                <g id="Rectangle_639-3" data-name="Rectangle 639" transform="translate(1.158 1.158)" fill="none" stroke="#707070" stroke-width="1.5">
                  <rect width="114.063" height="62.532" rx="3" stroke="none"/>
                  <rect x="0.75" y="0.75" width="112.563" height="61.032" rx="2.25" fill="none"/>
                </g>
              </g>
            </g>
            <g id="Group_1060-3" data-name="Group 1060" transform="translate(997.327 352.709)">
              <path id="Path_3791-3" data-name="Path 3791" d="M0,0H278.451V86.431H0Z" transform="translate(0 0)" fill="#fff" stroke="#9f9089" stroke-linecap="round" stroke-width="1.264"/>
              <rect id="Rectangle_617-3" data-name="Rectangle 617" width="276.761" height="11.58" transform="translate(0.353 74.855)" fill="#ffd186"/>
              <text id="Billing_Coding" data-name="Billing &amp; Coding" transform="translate(21.234 32.216)" fill="#595454" font-size="22" font-family="SegoeUI, Segoe UI" letter-spacing="0.02em"><tspan x="-97.643" y="24">BILLING &amp; CODING</tspan></text>
            </g>
          </g>
          <g id="Painting" transform="translate(1360.903 -92.532)">
            <rect id="Rectangle_775" data-name="Rectangle 775" width="143.373" height="217.405" transform="translate(-48.787 503.274)" fill="#fff"/>
            <rect id="Rectangle_776" data-name="Rectangle 776" width="143.373" height="217.405" transform="translate(-48.787 503.274)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.497"/>
            <path id="Path_3817" data-name="Path 3817" d="M0,0H126.66V200.691H0Z" transform="translate(-40.429 511.631)" fill="#ffeccd"/>
            <rect id="Rectangle_778" data-name="Rectangle 778" width="126.66" height="200.691" transform="translate(-40.429 511.631)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.497"/>
            <path id="Path_3735" data-name="Path 3735" d="M90.277,511.05s-3.355,7.207,19.869,75.291c21.268,62.346,4.75,49.039-13.57,33.217-27.174-23.47,22.6,75.7,3.687,92.182" transform="translate(-57.401 0.581)" fill="none" stroke="#8f3189" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.497"/>
            <path id="Path_3734" data-name="Path 3734" d="M60.76,511.05s-3.355,7.207,19.869,75.291c21.268,62.346,4.75,49.039-13.57,33.217-27.174-23.47,22.6,75.7,3.687,92.182" transform="translate(-70.591 0.581)" fill="none" stroke="#474343" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.497"/>
          </g>
          <g id="Stool" transform="translate(103.662 -25.399)">
            <rect id="Rectangle_865" data-name="Rectangle 865" width="65.252" height="30.506" transform="translate(-18.221 780.038)" fill="#fff" stroke="#595454" stroke-width="1"/>
            <rect id="Rectangle_868" data-name="Rectangle 868" width="91.963" height="12.971" transform="translate(-31.577 933.244)" fill="#fff" stroke="#474343" stroke-miterlimit="10" stroke-width="1"/>
            <path id="Path_3779" data-name="Path 3779" d="M145.27,1059.474h0a4.107,4.107,0,0,0,4.095-4.419L129.1,789.434H109.179l32.014,266.423a4.107,4.107,0,0,0,4.078,3.617" transform="translate(-73.362 -5.607)" fill="#fff"/>
            <path id="Path_3780" data-name="Path 3780" d="M145.27,1059.474h0a4.107,4.107,0,0,0,4.095-4.419L129.1,789.434H109.179l32.014,266.423A4.107,4.107,0,0,0,145.27,1059.474Z" transform="translate(-73.362 -5.607)" fill="none" stroke="#474343" stroke-miterlimit="10" stroke-width="1"/>
            <path id="Path_3778" data-name="Path 3778" d="M49.727,1059.474h0a4.107,4.107,0,0,1-4.095-4.419L65.9,789.434H85.818L53.8,1055.857A4.107,4.107,0,0,1,49.727,1059.474Z" transform="translate(-92.793 -5.607)" fill="#fff" stroke="#474343" stroke-miterlimit="10" stroke-width="1"/>
            <path id="Path_3781" data-name="Path 3781" d="M145.006,799.816H66.327a15.646,15.646,0,1,1,0-31.292h78.679a15.646,15.646,0,1,1,0,31.292" transform="translate(-91.246 -12)" fill="#be2bbb"/>
          </g>
        </g>
      </svg>


    </div>
      
  )
}
