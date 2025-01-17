import { useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'

export default function HeadAnalytics({ 
  //Props
  id, image, title, 
  previewText, author, date
}) {

  //console.log(author);

  return (
    <>
      
        {/* Google Tag Manager - Global base code */}
       <Script
         id="gtag-base"
         strategy="afterInteractive"
         dangerouslySetInnerHTML={{
           __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-KK2PS5V');
           `,
         }}
       />
                 
    </>
  )
}
