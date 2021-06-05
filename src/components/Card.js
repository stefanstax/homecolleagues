import React from 'react'

const Card = (props) => {
    return (
        <div className="text-xl text-white font-thin mx-3 my-3 p-3 rounded-md shadow-lg w-full md:w-2/6 lg:w-2/6 xl:w-1/6 text-center" style={{backgroundColor: "#004AAD"}}>
            <img className="my-3 mx-auto rounded-full" style={{width: "70%"}} src={`https://robohash.org/${props.username}?set=set5`} alt="robots" />
            <h2 className="font-semibold text-black my-2 rounded-md" style={{backgroundColor: "#F5BD02"}}>{props.name}</h2>
            <p>Known By: {props.username}</p>
            <p>Email: {props.email}</p>
            <p>City: {props.city}</p>
            <p>Website: {props.website}</p>
            <p>Company: {props.company}</p>
        </div>
    )
}

export default Card
