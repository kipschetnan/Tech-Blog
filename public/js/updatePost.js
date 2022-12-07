const updatePostFormHandler = async (event) => {
    event.preventDefault()
    console.log("About to update post")

    const post = document.querySelector('#postData')
    const postId = post.dataset.post_id
    const title = document.querySelector('#post-title').value.trim()
    const content = document.querySelector('#post-content').value.trim()

    if (title && content) {
        const response = await fetch('/api/posts/updatePost', {
            method: 'PUT',
            body: JSON.stringify({ postId, title, content }),
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok) {
            document.location.replace(`/dashboard`)
        } else {
            alert('Failed to update post.')
        }
    }
}

const deletePostFormHandler = async (event) => {
    event.preventDefault()
    console.log("About to delete post")

    const post = document.querySelector('#postData')
    const postId = post.dataset.post_id
    // const title = document.querySelector('#post-title').value.trim()
    // const content = document.querySelector('#post-content').value.trim()

    if (postId) {
        const response = await fetch('/api/posts/deletePost', {
            method: 'DELETE',
            body: JSON.stringify({ postId }),
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok) {
            document.location.replace(`/dashboard`)
        } else {
            alert('Failed to delete post.')
        }
    }
}

document.querySelector('#updatePostBtn').addEventListener('click', updatePostFormHandler)

document.querySelector('#deletePostBtn').addEventListener('click', deletePostFormHandler)