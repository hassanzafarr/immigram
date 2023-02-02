import React, { useState } from 'react'

import {form,type,getMyQuestion}from "./child/data"

export default function Test() {

   
    const [from, setfrom] = useState([])
    const onQuestion = (data)=>{
        setfrom([...from,getMyQuestion(data)])
        console.log(getMyQuestion(data))
    }

  return (
   
<>
{type.map(val=>(<button onClick={()=>{setfrom(form[val])}}>{val}</button>))}

{(form!==[])?from.map(value=>(<FormWay {...value} ques={onQuestion}/>)):<p>no data to show</p>}
</>

  )
}

const FormWay = ({question,option,ques})=>(
    <ul>
        {question}
        {option.map(val=><button onClick={()=>ques(val)}>{val}</button>)}
    </ul>
)