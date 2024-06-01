import React from 'react'
import {AiFillStar,AiOutlineStar} from "react-icons/ai"
function Ratings({rating,onClick,style}) {
  return (
    <div>
     {[...Array(5)].map((_,i)=>{
        return(
           <span onClick={()=>onClick(i+1)} style={style} key={i}>{rating > i ?(<AiFillStar fontSize={15}/>):(<AiOutlineStar fontSize={15}/>)}</span>
        )
     })} 
    </div>
  )
}

export default Ratings
