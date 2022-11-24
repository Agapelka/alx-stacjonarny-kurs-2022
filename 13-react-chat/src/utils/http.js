
// PUT
export const editMessage = (id, message) => {
    return fetch(`http://localhost:5000/messages/${id}`, {
        method: 'PUT',
        headers: {
            'Content-type':'application/json'
        },
        body: JSON.stringify(message)
    })
}

// GET
export const getMessage = (id) => {
    return fetch(`http://localhost:5000/messages/${id}`)
    .then(res => res.json())
}

// FETCH
export const fetchMessages = () => {
    return fetch('http://localhost:5000/messages')
    .then (res => res.json())
}

// POST
export const postMessage = (messageToSend) => {
    fetch('http://localhost:5000/messages', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'
    },
    body: JSON.stringify(messageToSend)
})
}