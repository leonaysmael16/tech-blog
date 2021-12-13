const commentFormHandler = async function (event) {
    event.preventDefault();

    const postId = document.querySelector('input[name="post-id"').value;
    const body = document.querySelector('input[name"comment-body"').value;
    
    if (body) {
        await fetch('/api/comment', {
            method: 'POST',
            body: JSON.stringify({
                postId,
                body
            
            }),
            headers: {
                'Content-type': 'application/json'
            }
        });
        document.location.reload();
    }
};

document.querySelector('#new-comment-form');
document.addEventListener('submit', commentFormHandler)