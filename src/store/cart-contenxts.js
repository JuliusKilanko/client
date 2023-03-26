import React from "react";

const cartContext = React.createContext({
    items :[],
    totalAmount : 0,
    userName : '',
    addItem : ()=>{},
    removeItems : ()=>{}
})

export default cartContext