import React, { Fragment } from 'react'

const Membre = ({ nom, age, children, hideName, handleChange }) => {
    return (
        <Fragment>
            <h2 style={{
                backgroundColor: age < 10 ? 'grey' : 'purple', 
                color: age < 10 ? 'white' : 'black'
            }}>
                {nom.toUpperCase()} : {age}
            </h2>
            { children ? <p>{children}</p> : <Fragment/>}
            
            <input type="text" value={nom} onChange={handleChange}/>

            <button onClick={hideName}>X</button>
        </Fragment>
    )
}

export default Membre;
