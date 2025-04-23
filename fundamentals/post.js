function sendHTTPRequest(url, method, data){
    return fetch(
        url,
        {
            method: method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        },
    )
    .then((response) => {
        return response.json();
    });
}

async function createPosts(title, content){
    const userId = 1;
    const post = {
        title: title,
        content: content,
        userId: userId
    }
    await sendHTTPRequest(
        'https://jsonplaceholder.typicode.com/posts',
        'POST',
        post
    );
}