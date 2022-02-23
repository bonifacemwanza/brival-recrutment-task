import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux'
import CharacterList from '../Components/Characters/CharacterList'
import Pagination from '../Components/Characters/Pagination'
import { FETCH_DATA } from '../redux/actions'
import Data from  "../data.json"

let searchStr = window.location.search
let page = parseInt(searchStr.substr(6,searchStr.length))
page = page ? page : 1

const Characters = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    let dataArr = []
    for (let index = (page - 1) * 9; index < (page * 9); index++) {
      dataArr.push(Data.data.results[index])
    }
    dispatch(FETCH_DATA(dataArr))
  },[dispatch])
  return (
    <div className='Characters'>
        <h2>THE CHARACTERS</h2>
        <CharacterList/>
        <Pagination/>
    </div>
  )
}

export default Characters