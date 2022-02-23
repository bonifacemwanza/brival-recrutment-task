import React from 'react'
import {AiFillEye} from "react-icons/ai"

const SmallCard = ({data}) => {
  let thumbnail = data.thumbnail.path +"."+ data.thumbnail.extension
  let desc = data.description.length > 180 ? data.description.substr(0,180) + "..." : data.description
  desc = desc ? desc : "No Description"
  return (
    <div className='small_card' style={{backgroundImage:`url(${thumbnail})`}}>
        <div className="small_card_text">
            <AiFillEye className="eye_icon"/>
            <p className='title_text'>{data.name}</p>
            <p className='desc_text'>{desc}</p>
        </div>
    </div>
  )
}

export default SmallCard