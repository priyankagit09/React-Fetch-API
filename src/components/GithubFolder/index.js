import React, {useState}  from 'react'
import LanguageFilter from '../LanguageFilter/LanguageFilter'
import RepositoryItem from '../RepositoryItem/RepositoryItem'

import './index.css'

const Languages=[{id: 1, text:"ALL"}, {id: 2, text:"Javascript"}, {id: 3, text:"Ruby"}, {id: 4, text:"Java"}, {id: 5, text:"CSS"}]

const GithubFolder = () => {
  
    const [statesId, setStates]=useState(Languages[0].text)
  
    
    const update =(id) => {
     setStates(id)
    
    
  }
   

   

    return (
      <div className="bg-container">
    <div className="small-container">
        <h1 className="heading">Popular</h1>
        <ul className="first-container">
       
         {Languages.map((each) => {
            return <LanguageFilter details={each}  key={each.id} update={update} isActive={statesId===each.id}/>

        })} 
        </ul>
        <RepositoryItem/>
        
    </div>
    </div>
  )
}

export default GithubFolder