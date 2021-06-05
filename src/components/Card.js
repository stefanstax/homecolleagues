import React from 'react'

const Card = (props) => {
    return (
        <div className="w-25 ma3 pa2 br3 white" style={{backgroundColor: "#004AAD"}}>
            <img className="br4" style={{width: "200px"}} src={`https://robohash.org/${props.username}?set=set5`} alt="robots" />
            <h2>{props.name}</h2>
            <p>Known By: {props.username}</p>
            <p>Email: {props.email}</p>
            <p>City: {props.city}</p>
            <p>Website: {props.website}</p>
            <p>Company: {props.company}</p>
        </div>
    )
}

export default Card
