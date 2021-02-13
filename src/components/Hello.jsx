import React, { useContext } from 'react';
import { AppContext } from '@context/AppContext';

const Hello = () => {
    const { state } = useContext(AppContext);
    console.log(state)
    return (
        <h1>{state.home}</h1>
    )
}

export default Hello;