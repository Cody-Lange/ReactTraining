import React from "react"
import Navbar from "./components/Navbar"
import Card from "./components/Card"
import data from "./data"

export default function App() {
    const cards = data.map((item, index) => {
        const isLastCard = index === data.length - 1;
        return (
            <div key={item.id}>
                <Card {...item} />
                <div className={`card-divider ${isLastCard ? 'hide-divider' : ''}`}></div>
            </div>
        );
    });
    
    return (
        <div className="cards--main">
            <Navbar />
            <section className="cards--container">
                {cards}
            </section>
        </div>
    );
}
