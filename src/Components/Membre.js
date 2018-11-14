import React from 'react'

const Membre = (props) => {
    const name = props.nom
    return (
        <h1>Membre de ma famille : {name}</h1>
    )
}

export default Membre;
