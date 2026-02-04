import { useAtom } from "jotai";
import { useState } from "react";
import { useLocation } from "wouter";
import flashcardAtom from "../atom/FlashcardAtom";

export default function AddCard() {

    const [flashcards, setFlashcards] = useAtom(flashcardAtom);
    const [front, setFront] = useState("");
    const [back, setBack] = useState("");
    const [, navigate] = useLocation();

    const addFlashcard = () => {

        // todo: call RESTFUL API here

        const newCard = {
            id: Math.floor(Math.random() * 100000 + 1),
            front, 
            back
        };

        // 1. clone the array
        // 2. spread into the array and put at the end
        const modifiedFlashcards = [...flashcards, newCard];
        setFlashcards(modifiedFlashcards);
        navigate('/');
    }

    return <>
     <h1>Add Card</h1>
     <p>Number of Cards Right Now = {flashcards.length}</p>
     <div className="mt-3 mb-3">
        <label>Front:</label>
        <input type="text"
               className="form-control" 
               value={front}
               onChange={event=>setFront(event.target.value) }
        />
     </div>
     <div className="mt-3 mb-3">
        <label>Back:</label>
        <input type="text" 
               className="form-control" 
               value={back}
               onChange={e=>setBack(e.target.value)}
        />
     </div>
     <button className="mt-3 btn btn-primary"
             onClick={addFlashcard}
     >Create</button>
    </>
}