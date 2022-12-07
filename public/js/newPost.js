// const newPostBtnHandler = (event) => {
//     event.preventDefault()
//     console.log('about to add a new post')
//     document.location.replace('/dashboard/addPost')
// } 

const newPostFormHandler = async (event) => {
    event.preventDefault()
    console.log("About to add post")

    const title = document.querySelector('#post-title').value.trim()
    const content = document.querySelector('#post-content').value.trim()

    if (title && content) {
        const response = await fetch('/api/posts/addPost', {
            method: 'POST',
            body: JSON.stringify({ title, content }),
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.ok) {
            document.location.replace(`/dashboard`)
        } else {
            alert('Failed to add post.')
        }
    }
}

// document.querySelector('#newPostbtn').addEventListener('click', newPostBtnHandler)
document.querySelector('.newPost-form').addEventListener('submit', newPostFormHandler)