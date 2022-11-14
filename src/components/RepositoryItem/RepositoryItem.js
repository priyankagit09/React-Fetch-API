import React, {useState, useEffect} from 'react'
import Loader from 'react-loader-spinner'



import { setLanguages } from '../../redux/action/languageAction';
import {useDispatch, useSelector} from "react-redux";
import './RepositoryItem.css'
const constants= {
  success: 'success',
  failure:'failure',
  progress: 'inProgress'

}

const RepositoryItem = () => {
  const dispatch =useDispatch();
  const program=useSelector((state) => state.allLanguages.products.popular_repos)
  var language= useSelector((state) => state.allLanguages.language)
 console.log(language)
  const [status, setStatus] =useState('');
  const fetchProgram = async () => {
    setStatus(constants.progress)
    const url ="https://apis.ccbp.in/popular-repos";
    const options = {
      method: "GET"
    }
    const text=language
    console.log(text)
    
    fetch(`${url}?language=${text}`, options)
    
    .then(res => {
      if (!res.ok) {
        throw Error()
      }
      return res.json()
    })
    .then(data => {
      console.log(data)
      setStatus(constants.success)
      dispatch(setLanguages(data));
    })
    .catch((err) => {
      setStatus(constants.failure)
      
      
    })

  }
  useEffect(() => {
    fetchProgram()
  },[language])

  const renderSuccess =() => {
    const lastrender= program.map((each) => {
      return (
        <div className="each-container" key={each.id}>
          
          <div className="every-container">
           <div>
            <img src={each.avatar_url} alt={each.name} className="image-author"/>
           </div>
          <h1 className="language-name">{each.name}</h1>
          <div className="first-box">
            <img src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png" alt="stars"/>
            <p>{each.stars_count} stars</p>
          </div>
          <div className="second-box">
             <img src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png" alt="forks"/>
             
            <p>{each.forks_count} forks</p>
          </div>
          <div className="third-box">
          <img src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png" alt="open issues"/>
            <p>{each.issues_count} issues</p>
          </div>
        </div>
        </div>
      )
  
    })
    return lastrender
    
  }

  const renderProgress =() => {
  return (
  
    <div testid="loader">
    <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
 </div>
  )
  }

const renderFailure =() => {
  return (
    <div className="">
      <img src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png" alt="failure-image" className="failure-image-container"/>
     <p className="paragraph">Something went wrong</p>
    </div>
  )
  }
  




  const renderAllLanguages =()=> {
    switch (status) {
      case constants.progress:
        return renderProgress()
      case constants.success:
        return renderSuccess()
      case constants.failure:
        return renderFailure()
      default:
        return null 
      
    }
  }



  return (
    <div className="last-container">
      
       
        
        {renderAllLanguages()}
    </div>
  )
}

export default RepositoryItem