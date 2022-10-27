import './Button.css'; 

type Props = {
    text: string
}

export default function Button(props : Props) {
    return (
        <div className="container-button">
            <button type="submit" >
                <span>{props.text}</span>
            </button>
        </div>
    )
}