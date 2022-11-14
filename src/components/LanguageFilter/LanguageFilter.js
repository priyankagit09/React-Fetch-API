import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import { setLanguage } from '../../redux/action/languageAction'
import './LanguageFilter.css'


const Languages=[{id: 1, text:"ALL"}, {id: 2, text:"Javascript"}, {id: 3, text:"Ruby"}, {id: 4, text:"Java"}, {id: 5, text:"CSS"}]

const LanguageFilter = (props) => {
   const dispatch =useDispatch()
   const [state, setState] =useState(Languages[0].text)
  //  const [ids, setIds] =useState(1)
   const {details, update, isActive}=props
   const {text,id}=details
   
const activeClass= isActive? "active": ""
  
    const handle =() => {
      
      
      setState(text)
      // setIds(id)
      update(id)
      
      dispatch(setLanguage(text))
      
    
     
    
     
    //  console.log(imp)
      
  }

   
 



// const {id, text}=x
// console.log(text)


  return (
    <li>
   
        <button className={`buttons ${activeClass}`} onClick={handle}>{text}</button>
        
    </li>
  )
}

export default LanguageFilter