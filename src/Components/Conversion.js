import React,{useState} from 'react'
import './conversion.css'
const Conversion = () => {
    const[from,setFrom]=useState('')
      const[to,setTo]=useState('')
      const[amount,setAmount]=useState(0);
      const[resData,setResData]=useState([]);
      const[loading,setLoading]=useState(false)

      const submitHandler=async (e)=>{
        e.preventDefault();
       let from1=from.toUpperCase().trim();
       let to1=to.toUpperCase().trim();
       let Amount=amount;
    try{
                setLoading(true);
                  const res=await fetch(`https://v6.exchangerate-api.com/v6/ba79921a9bbdab1d962ec047/pair/${from1}/${to1}/${Amount}`,{method:"GET"});
    const data=await res.json();
   await setResData([{conversion_rate:data.conversion_rate,conversion_result:data.conversion_result
}]);
    console.log(data);
  

            }catch(err){
                // setLoading(true);
                console.log(err);
            }
            setLoading(false)




        console.log(
            from1+","+to1
        );
        console.log(resData);
      }
  return (
    <div className='container'>

    <div className='form'>
       
       <div>
       <label htmlFor="">base-currency</label>
        <input type="text"
        placeholder='USD'
        onChange={(e)=>setFrom(e.target.value)}

         name="" id="" />

         </div>
         <div >
         <label htmlFor="base">target-currency</label>
           <input type="text"
                  placeholder='INR'
                 name="" id=""
                   onChange={(e)=>setTo(e.target.value)} />
                 

         </div>
         <div>
<label htmlFor="">Amount</label>
         <input type="number"
                   placeholder='Amount'
                   onChange={(e)=>setAmount(e.target.value)} name="" id="" />
             

         </div>
                   <button onClick={submitHandler}>Convert</button>

        
    </div>

    <div>
    hello
        {resData.length>0 ? resData.map((data,index)=>{return<div>
        <p>{data.conversion_rate}</p> 
        <p>{data.conversion_result}</p></div>}):'empty'}
    </div>



    </div>
  )
}

export default Conversion