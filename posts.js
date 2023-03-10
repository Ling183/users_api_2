import { createPageLinkHeader } from "./header.js"
import { firstLetterUP } from "./functions.js"


async function init() {
    const res = await fetch ('https://jsonplaceholder.typicode.com/posts?_limit=15&_expand=user')
    const posts = await res.json()
    

    const pageContent = document.querySelector('#page-content')
    const header = createPageLinkHeader()
    const postsList = createPostsListElement(posts)
    pageContent.append(postsList)
    pageContent.before(header)
    
}
function createPostsListElement(posts) {
    const postsList = document.createElement('ul')
    postsList.classList.add('users-list', 'data-list')

    posts.map(post => {
           
        const UserName = post.user.name

        const postItem = document.createElement('li')
        postItem.classList.add('post-item')

        const postLink = document.createElement('a')
        postLink.classList.add('post-link')

        postLink.textContent = firstLetterUP(post.title)
        postLink.href = './post.html?post_id=' + post.id

        const postAuthor = document.createElement('a')
        postAuthor.textContent = UserName
        postAuthor.href = './user.html?user_id=' + post.userId

        postItem.append(postLink, ' - ', postAuthor)

        postsList.append(postItem)
})

return postsList
}



init()

