const Surah = (props) => {
    return (
    <div>
{props.surah.data.name}
{props.surah.data.ayahs.map(a=>(
    <div>
        {a.text}
    </div>
))}
    </div>
    );
}
 
export default Surah;

export async function getServerSideProps(context) {
    const res= await fetch(`http://api.alquran.cloud/v1/surah/${context.params.Surah}/ar.alafasy`)
    const data=res.json();
    
    return {
      props: {
        surah:data
      }, // will be passed to the page component as props
    }
  }
  