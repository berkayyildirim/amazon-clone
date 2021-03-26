// setup data layer
// we need this to track the basket

import React, {createContext, useContext, useReducer} from "react";

// This is the data layer
export const StateContext = createContext();

// Build a provider

// arrow function'da eğer object açarsan içinde bir şey return etmen gerek. Object açtın ama retunr koymazsan hiçbir şey vermez. Eğer object açmaz boş bırakırsan, direk ne yazıyorsa onu verir.

export const StateProvider = ({ reducer, initialState, children }) => {
    return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
    );
};

// This is how we use it inside of a component
export const useStateValue = () => useContext(StateContext);