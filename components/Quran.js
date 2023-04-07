import Link from 'next/link';
import stylequran from '../styles/Quran.module.css'

const Quran = () => {
    return (
    <div className={stylequran.MainQuran}>
<Link href='/QuranKareem'><h1 className={stylequran.cat}>قران </h1></Link>
<Link href='/Hades'><h1 className={stylequran.cat}>حديث</h1></Link>
<Link href='/Sunah'><h1 className={stylequran.cat}>السنة النبويه</h1></Link>
    </div>
    );
}
 
export default Quran;