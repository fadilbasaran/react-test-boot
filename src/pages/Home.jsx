import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
// export const data = [
//   {
//     id:0,
//     name: "React",
//     description:"React açıklama"
//   },
//   {
//     id:1,
//     name: "Vue",
//     description:"Vue açıklama"
//   },
//   {
//     id:2,
//     name: "Angular",
//     description:"Angular açıklama"
//   },
// ]
import axios from "axios"


function Home() {
  const navigate = useNavigate();
  const [allData, setAllData] = useState("data");
  const[loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const { data } = await axios.get("https://fakestoreapi.com/products");
      setAllData(data);
      setLoading(false);
    }
    getData();
  }, [])

  console.log("All Data : ", allData)

  return (

    

      loading?<div> AZ BEKLE  AQ....</div>:
      <div>
        {
          allData?.map((data, index) =>(
            <div key={index}  onClick={()=> navigate(`/detail/${data?.id}`)} style={{marginTop:"30px",cursor:"pointer"}}>
                <div>{data?.title}</div>
                <img src={data?.image} alt="" width={"100px"}/>
            </div>
          ))
        }
      </div>
    
  )
}

export default Home