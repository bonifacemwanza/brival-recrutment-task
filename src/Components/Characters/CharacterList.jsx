import React from 'react'
import { useSelector } from 'react-redux'
import LargeCard from './LargeCard'
import MediumCard from './MediumCard'
import SmallCard from './SmallCard'

const CharacterList = () => {
  const state = useSelector(state => state.reducer).Characters
  
  
  return (
    <div className='character_list' id="list" >
        {state.map(( element, index)=>{
          if(index === 0) return <LargeCard key={index} data={element}/>
          else if(index === 5) return <MediumCard key={index} data={element}/>
          else return <SmallCard key={index} data={element}/>
        })}
    </div>
  )
}

export default CharacterList