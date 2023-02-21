import {createPageLinkHeader} from './header.js'
import { firstLetterUP } from './functions.js'
import { API_URL } from './config.js';

async function init() {
    const pageContent = document.querySelector('#page-content')
    pageContent.before(createPageLinkHeader())
    const queryParams = location.search
    const urlParams = new URLSearchParams(queryParams)
    const postId= urlParams.get('post_id')
    console.log(queryParams)
    // const id = 25
    const res = await fetch(`${API_URL}/posts/${postId}?_embed=comments`)
    const post = await res.json()
    let {title, body, comments} = post

    
    const postWrapper = document.createElement('div')
    postWrapper.classList.add('post-wrapper')


    pageContent.append(postWrapper)

    const postTitle = document.createElement('h1')
    postTitle.classList.add('post-title')
    postTitle.textContent = firstLetterUP(title)

    const postBody = document.createElement('p')
    postBody.classList.add('post-body')
    postBody.textContent = firstLetterUP(body)

    postWrapper.append(postTitle, postBody)

    comments.map(comment => {
        console.log(comment)
        console.log(comment.body)
        console.log(comment.email)
        console.log(comment.name)

        let {body, email, name} = comment
        console.log(body)
        console.log(email)
        console.log(name)
    })
}
init()
