import { useLocation, useParams } from "react-router-dom"

import { useEffect, useState } from "react";

import axios from "axios";
function Detail() {
  const {id} =useParams()
  const [singleData, setSingleData] = useState("data");

  // const [getData,setGetData] = useState(null);
  // const location = useLocation();
  // console.log(location.pathname);

  useEffect(()=>{
    const getData = async () => {

      const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setSingleData(data);
    }
    getData();
  },[id])
  // useEffect(() => {
    
  //   // setGetData(data.filter( dt => dt.id == id))
  //   if (id) {
      
  //     setGetData(data.find( dt => dt.id == id))
  //     console.log("Get Data",getData);
  //   }
  // },[id])

  console.log(singleData,"Single data")
  return (
    <div>
      {
       <div  style={{marginTop:"30px",cursor:"pointer"}}>
       <div>{singleData?.title}</div>
       <img src={singleData?.image} alt="" width={"100px"}/>
   </div>
        
      }


    </div>
  )
}

export default Detail