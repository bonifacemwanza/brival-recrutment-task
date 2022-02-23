import React from 'react'
import {AiOutlineLeft, AiOutlineRight} from "react-icons/ai"
import { useSelector } from 'react-redux'

let searchStr = window.location.search
let page = parseInt(searchStr.substr(6,searchStr.length))
page = page ? page : 1


var forwardArr = []
for (let index = page + 1; index <= 10; index++) {
  forwardArr.push(index)
}
var backwardArr = []
for (let index = 1; index < page; index++) {
  backwardArr.push(index)
}
const Pagination = () => {
  const state = useSelector(state => state.reducer).Characters
  const handleClick = (jump) => {
    if(jump < 2) window.location.replace("http://" + window.location.host + "/Characters/?page=" + (page + jump))
    else window.location.replace("http://" + window.location.host + "/Characters/?page=" + (jump))
  }

  return (
    <div className='pagination' style={state.length < 1 ? {display:"none"}:{}}>
        <button className='page_move' style={page === 1 ?{display:"none"}:{}} onClick={()=>handleClick(-1)}>
            <AiOutlineLeft/>
        </button>
        {backwardArr.map(element => {
          return <button key={element} onClick={()=>handleClick(element)}>{element}</button>
        })}
        <button className='pagination_button_active'>{page}</button>
        {forwardArr.map(element => {
          return <button key={element} onClick={()=>handleClick(element)}>{element}</button>
        })}
        <button className='page_move' style={page === 10 ?{display:"none"}:{}} onClick={()=>handleClick(1)}>
            <AiOutlineRight/>
        </button>
    </div>
  )
}

export default Pagination