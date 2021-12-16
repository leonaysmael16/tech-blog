const newFormHandler = async function(event) {
    event.preventDefault();
  
    const postTitle = document.querySelector('#post-title').value;
    const postContent = document.querySelector('#content').value;
  
    console.log(postTitle);
    console.log(postContent);
  
    await fetch(`/api/post-routes`, {
      method: 'POST',
      body: JSON.stringify({
        postTitle,
        postContent,
      }),
      headers: { 'Content-Type': 'application/json' },
    });

};

document.querySelector('#new-post-form').addEventListener('click', newFormHandler);