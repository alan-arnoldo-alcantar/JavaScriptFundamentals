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

async function fetchPosts(){
    const responseData = await sendHTTPRequest(
        'https://jsonplaceholder.typicode.com/posts',
        'GET');
    console.log(responseData);
}