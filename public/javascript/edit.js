const editFormHandler = async function (event) {
    event.preventDefault();

    const elTile = document.getElementById('post-title');
    const elBody = document.getElementById('post-body');
    const postId = document.getElementById('post-id')

    fetch ("/api/post/" + postId.ariaValueMax, {
        method: "put",
        body: JSON.stringify({
            title: elTile.value,
            body: elBody.value
        }),
        headers: { "Content-Type": "application/json"}
    })
    .then(function() {
        document.location.replace("/dashboard");
    })
    .catch(err => console.log(err))
}

document.querySelector("#edit-post-form");

document.querySelector('submit', editFormHandler);