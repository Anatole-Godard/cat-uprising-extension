import './App.css';
import {useEffect, useState} from "react";
import dayjs from "dayjs";

function App() {
    const [cat, setCat] = useState("");

    useEffect(() => {
        const catUrl = localStorage.getItem('cat-url')
        const lastCat = localStorage.getItem('last-cat')
        if (catUrl && lastCat && dayjs().diff(dayjs(lastCat), 'day') < 1) {
            setCat(catUrl)
        } else {
            getCat()
        }

    }, []);
    const getCat = async () => {
        const response = await fetch('https://api.thecatapi.com/v1/images/search');
        const cats = await response.json();
        const newCat = cats[0].url
        setCat(newCat);
        localStorage.setItem('cat-url', newCat)
        localStorage.setItem('last-cat', dayjs())
    }

    return (
        <div className="container">
            <img src={cat} alt=""/>
            <button onClick={getCat}>Get Cat</button>
        </div>
    );
}

export default App;