import React,{useState} from 'react'
import './conversion.css'
  import { Link } from 'react-router-dom'
const Conversion = () => {
    const[from,setFrom]=useState('')
      const[to,setTo]=useState('')
      const[amount,setAmount]=useState(0);
      const[resData,setResData]=useState([]);
      const[err,setErr]=useState(false);
    

      const submitHandler=async (e)=>{
        e.preventDefault();
       let from1=from.toUpperCase().trim();
       let to1=to.toUpperCase().trim();
       let Amount=amount;
    try{
               
                  const res=await fetch(`https://v6.exchangerate-api.com/v6/ba79921a9bbdab1d962ec047/pair/${from1}/${to1}/${Amount}`,{method:"GET"});
                  if(res.ok){
 const data=await res.json();
    setResData([{conversion_rate:data.conversion_rate,conversion_result:data.conversion_result}]);
    console.log(data);
                  }else{
                    setErr(true);
                  }
   
  

            }catch(err){
                // setLoading(true);
                 setErr(true);
                console.log(err);
            }
       
       
      }
  return (
    <div className='conversion_container'>

    <div className='form'>
       
       <div>
       <label htmlFor="">base-currency</label>
        <input type="text"
        placeholder='USD'
        onChange={(e)=>setFrom(e.target.value)}

         name="" id="" 
        
         />

         </div>
         <div >
         <label htmlFor="base">target-currency</label>
           <input type="text"
                  placeholder='INR'
                 name="" id="base"
                   onChange={(e)=>setTo(e.target.value)}
                   />
                 

         </div>
         <div>
<label htmlFor="target">Amount</label>
         <input type="number"
                   placeholder='Amount'
                   onChange={(e)=>setAmount(e.target.value)}
                    name="" id="target"
                      />
            

         </div>
                   <button onClick={submitHandler}>Convert</button>

        
    </div>

    <div className='output_data'>
    {err && <p>please Enter the valid currency codes</p>}
   
        {resData.length>0 ? resData.map((data)=>{return<div>
        <p>conversion_rate : <span> {data.conversion_rate}</span></p> 
        <p>conversion_result :<span> {data.conversion_result}</span> </p></div>}):<p>supported currency codes <Link to='codes'>Click here</Link></p>}
    </div>



    </div>
  )
}
export default Conversion