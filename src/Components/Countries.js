import React,{useState,useEffect} from 'react'
import Render from './Render';

const Countries = () => {
    const[countries,setCountries]=useState([]);
    const[loading,setLoading]=useState(false)

    useEffect(()=>{
        const getdata=async()=>{
            try{
                setLoading(true);
                  const res=await fetch('https://v6.exchangerate-api.com/v6/ba79921a9bbdab1d962ec047/codes');
    const data=await res.json();
    setCountries(data.supported_codes);
    console.log(data.supported_codes[0]);

            }catch(err){
                
                console.log(err);
            }
            setLoading(false)
           

        }
        getdata();
         
    },[])


  return (
    <div className='countries'>
        <div className='countries_info'>
             <p>
        currency codes

        </p>
         <p>
        countries
            
        </p>
        </div>
        {!loading ? countries.map((country,index)=>{return <>
            <Render
            k={index}
             code={country[0]}
             country={country[1]}
             />

            
            </>}):<span className='loader'>..loading</span>}
    </div>
  )
}

export default Countries