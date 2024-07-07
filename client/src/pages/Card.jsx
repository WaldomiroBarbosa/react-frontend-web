import React from "react";
import { FaTimes } from "react-icons/fa";

import "./Card.css";

function Card({ cardData, closeModal }) {
    const { image_url, name, level, atk, def, desc } = cardData;

    return (
        <div className="card-overlay" onClick={closeModal}>
            <div className="card-wrapper" onClick={(e) => e.stopPropagation()}>
                <button onClick={closeModal}>
                    <FaTimes id="close-icon" />
                </button>
                <div>
                    <img src={image_url} id="card-image" alt="error" />
                </div>
                <div>
                    <h3 className="card-name">{name}</h3>
                    <h3 className="card-info">LVL.: {level} ATK: {atk} DEF: {def}</h3>
                    <h3 className="description">{desc}</h3>
                </div>
                <div>
                    <button>ADD TO DECK</button>
                    <button>REMOVE FROM DECK</button>
                </div>
            </div>
        </div>
    );
}

export default Card;