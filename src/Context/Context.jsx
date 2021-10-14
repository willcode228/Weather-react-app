import React from 'react';
import getData from '../Hoc/getData';

export const Context = React.createContext(null);

const Provider = (props) => {
    return (
        <Context.Provider value={props.state}>
            {props.children}
        </Context.Provider>
    )
}

export default getData(Provider);
