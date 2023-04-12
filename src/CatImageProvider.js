import React, {useContext, createContext, FC, useState} from 'react'

const AccessTokenProvider = (props) => {
    const [cat, setCat] = useState("");
    return <AccessToken.Provider value={[accessToken, setAccessToken]} {...props} />
}

const AccessToken = createContext(null)
const getCat = async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search');
    const cats = await response.json();
    setCat(cats[0].url);
}
const useAccessToken = () => useContext(AccessToken)

export {AccessTokenProvider, useAccessToken}