import React from 'react'

const MediumCard = ({data}) => {
  let thumbnail = data.thumbnail.path +"."+ data.thumbnail.extension
  let desc = data.description.length > 180 ? data.description.substr(0,180) + "..." : data.description
  desc = desc ? desc : "Driven out of home by her abusive step-father, fourteen-year old Angel Salvadore slept in the woods, where her mutant nature manifested itse..."
  return (
    <div className='medium_card'>
        <div className="large_image" style={{backgroundImage:`url(${thumbnail})`}}></div>
        <div className='large_card_text'>
            <p className='title_text'>{data.name}</p>
            <p className='desc_text'>{desc}</p>
        </div>
    </div>
  )
}

export default MediumCard