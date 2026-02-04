import { useParams } from "wouter";
import { useAtom } from "jotai";
import { useState } from 'react';
import { useLocation} from 'wouter';
import flashcardAtom from "../atom/FlashcardAtom"

export default function EditCard() {

    const { id } = useParams();
    const [flashcards, setFlashcards] = useAtom(flashcardAtom);

    const card = flashcards.find(function (card) {
        return card.id === parseInt(id)
    })

    const [front, setFront] = useState(card.front);
    const [back, setBack] = useState(card.back);
    const [_, navigate] = useLocation();

    const updateFlashcard = () => {
        const newCard = {
            id, front, back
        };

        const index = flashcards.findIndex(card => card.id === parseInt(id));
        const modified = flashcards.with(index, newCard);

        setFlashcards(modified);
        navigate('/');
    }

    return <>
        <h1>Edit Card</h1>
        <div className="mt-3 mb-3">
            <label>Front:</label>
            <input type="text"
                className="form-control"
                value={front}
                onChange={event => setFront(event.target.value)}
            />
        </div>
        <div className="mt-3 mb-3">
            <label>Back:</label>
            <input type="text"
                className="form-control"
                value={back}
                onChange={e => setBack(e.target.value)}
            />
        </div>
        <button className="mt-3 btn btn-primary"
            onClick={updateFlashcard}
        >Update</button>

    </>
}