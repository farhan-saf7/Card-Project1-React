import React from 'react'
import './UserCard.css'

function UserCard(props) {
  return (

    <div className='user-container' style={props.style}>
        <h3 id='user-name'>{props.name}</h3>
        <img id='user-img' src={props.img} alt="Saf"/>
        <p>{props.desc}</p>
    </div>

  )
}

export default UserCard
