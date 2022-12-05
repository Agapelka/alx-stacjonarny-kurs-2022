import Button from "components/atoms/Button/Button";
import Input from "components/atoms/Input/Input";


function ChatForm(props) {

    
        const renderAuthorErrorCode = (authorErrorCode) => {
            switch(authorErrorCode) {
                case 1:
                    return 'Pole Author nie może być puste';
                case 2:
                    return 'Pole Author musi mieć conajmniej 4 znaki';
                default:
                    return null;
            }
        }    


    return (
        <form onSubmit={props.handleSubmit}>
        <label>Author:
            <Input 
                value={props.authorInputValue} 
                onChange={props.handleAuthorInputChange}
                />
        </label>
            {/* {
                props.isAuthorError
                ? <p> Pole Author musi mieć conajmniej 4 znaki</p>
                : null
            } */}

            {
                props.authorErrorCode
                ? <p>{renderAuthorErrorCode(props.authorErrorCode)}</p>
                : null
            }

        
        <label>Message:
            <Input 
            value={props.messageInputValue} 
            onChange={props.handleMessageInputChange}
            />
        </label>
        <Button
            text="Send"
            type="submit"
        />
    </form>
    )
}
export default ChatForm;