export const read = () => {
    let messagesToRead = JSON.parse(localStorage.getItem('messages'));
    if(messagesToRead === null) {
        return []; 
    }
    return messagesToRead;
}
