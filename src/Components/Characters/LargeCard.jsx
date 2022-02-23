import React from 'react'

const LargeCard = ({data}) => {
  let thumbnail = data.thumbnail.path +"."+ data.thumbnail.extension
  let desc = data.description.length > 140 ? data.description.substr(0,140) + "..." : data.description
  desc = desc ? desc : "No Description"

  return (
    <div className='large_card'>
        <div className="large_image" style={{backgroundImage:`url(${thumbnail})`}}></div>
        <div className='large_card_text'>
            <p className='title_text'>{data.name}</p>
            <p className='desc_text'>{desc}</p>
        </div>
    </div>
  )
}

export default LargeCard