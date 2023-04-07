import Link from 'next/link';
import stylenav from '../styles/NavBar.module.css'

const NavBar = () => {
    return (
         <div className={stylenav.MainNav}>
            <ul className={stylenav.CatNav}>
               <Link href='/'><li className={stylenav.ListNav}>الرئيسيه</li></Link> 
               <Link href='/About'><li className={stylenav.ListNav}>عنا</li></Link>
               <Link href='/ContactUs'> <li className={stylenav.ListNav}>تواصل معنا </li></Link>
               <Link href='/PrivacyPolcy'> <li className={stylenav.ListNav}>سياسه الاستخدام </li></Link>
            </ul>
         </div>
         );
}
 
export default NavBar;