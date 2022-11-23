import './Title.css';

function Title(props) {
    return (
        <h1 className={`title ${props.isRed ? 'isRed' : ''}`}>{props.text}</h1>
    )
}
export default Title