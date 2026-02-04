import { useLocation } from "wouter";

function Flashcard(props) {

    const [, navigate] = useLocation();

    return <div className="card h-100">
        <div className="card-body">
            <div className="flashcard-front">
                <h6 className="text-muted mb-2">Front</h6>
                <p className="card-text">{props.front}</p>
            </div>
            <div className="flashcard-back" style={{
                visibility: props.showBack ? "visible" : "hidden"
            }}>
                <h6 className="text-muted mb-2">Back</h6>
                <p className="card-text">{props.back}</p>
            </div>
        </div>
        <div className="card-footer bg-transparent">
            <button className="btn btn-sm btn-primary me-2"
                onClick={(e)=>{
                    navigate("/edit/" + props.id)
                }}  
            
            
            >Update</button>
            <button className="btn btn-sm btn-danger" onClick={()=>{
                navigate('/delete/' + props.id)
            }}>Delete</button>
        </div>
    </div>
}
export default Flashcard;