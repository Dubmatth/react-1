import React, { Fragment } from 'react'

const Membre = ({ nom, age, children, hideName }) => {
    return (
        <Fragment>
            <h2 style={{
                backgroundColor: age < 10 ? 'grey' : 'purple', 
                color: age < 10 ? 'white' : 'black'
            }}>
                {nom.toUpperCase()} : {age}
            </h2>
            { children ? <p>{children}</p> : <Fragment/>}
            <button onClick={hideName}>X</button>
        </Fragment>
    )
}

export default Membre;
