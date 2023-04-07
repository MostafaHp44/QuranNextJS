import stylequrankareem from '../styles/qurankareem.module.css';
import Link from "next/link"

const QuranKareem = (props) => {
    return (
    <div className={stylequrankareem.ListSourah}>
        {props.quran.data.map(q=>(
            <div key={q.number} className={stylequrankareem.Sourah}>
              <Link href={`QuranKareem/Surah${q.number}`}>{q.name}</Link>               
            </div>
        ))}
    </div>
    );
}
 
export default QuranKareem;


export async function getStaticProps() {
    const res= await fetch('http://api.alquran.cloud/v1/surah');
    const data= await res.json();
    return {
      props: {
        quran:data
      }, // will be passed to the page component as props
    }
  }
  