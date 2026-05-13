import React from 'react'

const Card = (props) => {
  return (
    <div>
        <a href={props.ele.url} target="_blank">
                <img className='h-50 rounded-2xl' src={props.ele.download_url}></img>
                <h1 className=' text-xl font-bold text-center text-white'>{props.ele.author}</h1>
       </a>
    </div>
  )
}

export default Card
