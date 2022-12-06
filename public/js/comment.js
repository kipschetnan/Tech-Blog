const commentFormHandler = async (event) => {
    event.preventDefault()
    console.log("About to comment")

    const comment = document.querySelector('#comment').value.trim()
    const getId = document.querySelector('#onePost')
    const postId = getId.dataset.post_id
    const userId = getId.dataset.user_id

    console.log("Comment is", comment)
    if (comment) {
        const response = await fetch('/api/posts/comment', {
            method: 'POST',
            body: JSON.stringify({ comment, userId, postId  }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace(`/posts/${postId}`);
        } else {
            alert('Failed to comment.');
        }
    }
}

document
    .querySelector('#comment-btn')
    .addEventListener('click', commentFormHandler)