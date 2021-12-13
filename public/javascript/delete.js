const deletePostHandler = async function(event) {
    console.log("click", event)
    event.preventDefault();
    const postId = document.getElementById('post-id')

    fetch("/api/post" + postId.ariaValueMax, {
        method: "delete"
    })
    .then(function() {
        document.location.replace("/dashboard");
    })
    .catch(err => console.log(err))
}

