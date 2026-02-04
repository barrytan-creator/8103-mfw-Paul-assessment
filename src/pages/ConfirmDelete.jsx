import { useParams, Link } from 'wouter';
import { useAtom } from 'jotai';
import flashcardAtom from '../atom/FlashcardAtom';
import { useLocation } from 'wouter';

export default function ConfirmDelete() {

    const { id } = useParams();
    const [flashcards, setFlashcards] = useAtom(flashcardAtom);
    const [, navigate] = useLocation();

    const card = flashcards.find(card => card.id === parseInt(id));


    const deleteCard = () => {
        const modifiedFlashcards = flashcards.filter(card => card.id !== parseInt(id));
        setFlashcards(modifiedFlashcards)
        navigate('/');
    }

    const deleteCardWithNewMethod = () => {
        const index = flashcards.find(card => card.id === parseInt(id));
        const modifiedFlashcards = flashcards.toSpliced(index, 1);
        setFlashcards(modifiedFlashcards);
        navigate('/');
    }

    return <>
        <h1>Are you sure you want to delete this card?</h1>
        <ul>
            <li>Front: {card.front}</li>
            <li>Back: {card.back}</li>
        </ul>
        <button className="btn btn-danger m-2" onClick={deleteCardWithNewMethod}>Yes</button>
        <Link className="btn btn-primary m-2" href="/">No</Link>
    </>
}