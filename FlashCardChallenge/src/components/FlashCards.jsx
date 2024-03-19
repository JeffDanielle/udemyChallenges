import Questions from "../data/questions";
import { useState } from "react";
const FlashCards = () => {
    const [selectedId, setSelectedId] = useState(null);

    const handleClick = (id) => {
        setSelectedId(id !== selectedId ? id : null);
    }

    const qData = Questions.map((items) => {
        return (
            <div
                key={items.id}
                onClick={() => handleClick(items.id)}
                className={selectedId === items.id ? "selected" : ""}>
                <p>{items.id === selectedId ? items.answer : items.question}</p>
            </div>
        );
    })
    return (
        <div className="flashcards">
            {qData}
        </div>
    );
}

export default FlashCards;