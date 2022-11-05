export const save = (messagesToSave) => {
    localStorage.setItem('messages', JSON.stringify(messagesToSave));
}