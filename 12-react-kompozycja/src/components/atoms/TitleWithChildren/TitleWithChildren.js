import './TitleWithChildren.css';

function TitleWithChildren(props) {
    return (
        <div className={`title ${props.isRed ? 'isRed' : ''}`}>
            {props.children}</div>
    )
}
export default TitleWithChildren