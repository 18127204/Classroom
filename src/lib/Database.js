import { useState, useEffect } from "react"
import BasicCard from "../components/BasicCard/BasicCard"
const Database = () => {
    const [items, setItems] = useState([])
    const renderCard=(id,name)=>{
      return (<BasicCard classId={id} Name={name} />)
    }
    useEffect(() => 
      fetch("https://classroom25251325.herokuapp.com/classes")
      .then(res => res.json())
      .then(
        (result) => {
          var array_card=[]
          for(let i=0;i<result.length;++i){
            array_card.push(renderCard(result[i].id,result[i].name));
          }
          setItems(array_card)     
        },
        (error) => {
          setItems(error)
        }
      )   
      , [])
      return (<div sx={{
        mt: '500px'
      }}>{items}</div>)
}
export default Database;

