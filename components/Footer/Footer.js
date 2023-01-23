import Image from 'next/image'
import componentStyles from './styles.module.scss'
import Link from 'next/link'
import utilStyles from '@styles/utils.module.css'
import varStyles from '@styles/vars.module.scss'
import SocialIcons from '@components/SocialIcons'

const name = 'Planet Caravan Studios'
export const siteTitle = 'Next.js Sample Website'

export default function Footer({ children, home }) {
  return (
    <>
    <footer className={componentStyles.Footer}>
        
        <Link href="/">
          <a>BMS CONGRESS ACCESS</a>
        </Link>
        
        
      </footer>      
    </>
  )
}
