import React, { Fragment } from 'react'

const Membre = ({ nom, children }) => {
    return (
        <Fragment>
            <h1>Membre de ma famille : {nom.toUpperCase()}</h1>
            { children ? <p>{children}</p> : <Fragment/>}
        </Fragment>
    )
}

export default Membre;
