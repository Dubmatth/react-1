import React, { Fragment } from 'react'

const Membre = ({ nom, age, children }) => {
    return (
        <Fragment>
            <h2>{nom.toUpperCase()} : {age}</h2>
            { children ? <p>{children}</p> : <Fragment/>}
        </Fragment>
    )
}

export default Membre;
