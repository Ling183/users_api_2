
const titleWrapper = document.querySelector('#title-wrapper')
titleWrapper.before(createPageLinkHeader())

const title = document.createElement('h1');
title.innerText = 'Home sweet Home';
titleWrapper.append(title);



function createPageLinkHeader() {
    const header = document.createElement('header')
    const nav = document.createElement('nav')
    nav.classList.add('main-navigation')
    const menuList = document.createElement('ul')
    menuList.classList.add('menu')

    const menuListItems = [
        {
            title: 'Home',
            path: 'index.html'
        },
        {
            title: 'Posts',
            path: 'posts.html'
        },
        {
            title: 'Users',
            path: 'users.html'
        },
        {
            title: 'Albums',
            path: 'albums.html'
        },
    ]

    menuListItems.map(menuItem => {
        
        let {title, path } = menuItem
        const menuItemElement = document.createElement('li')
        menuItemElement.classList.add('menu-item')

        if (location.pathname === '/' + path) {
            menuItemElement.classList.add('active')
        }

        const menuLink = document.createElement('a')
        menuLink.textContent = title
        menuLink.href = './' + path

        
        menuItemElement.append(menuLink)


        menuList.append(menuItemElement)
    })


    nav.append(menuList)
    header.append(nav)
    return header
}