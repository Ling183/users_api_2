async function init () {

    const res = await fetch('https://jsonplaceholder.typicode.com/albums?_limit=30&_embed=photos&_expand=user')
    const albums = await res.json()

    if (!albums.length || albums.length === 0) {
        return
    }

        const pageContent = document.querySelector('#page-content')
        const header = createPageLinkHeader()
        const albumsList = createAlbumsListElement(albums)
        pageContent.append(albumsList)
        pageContent.before(header)
}

function createAlbumsListElement(albums) {
    
    const albumsList = document.createElement('div')
    albumsList.classList.add('albums-list')

    
    albums.map(album => {
      const albumItem = createAlbumItemElement(album)        
      albumsList.append(albumItem)  

       
    })
    return albumsList

}
function createAlbumItemElement(album){

    // console.log(album.title)
        // console.log(album.user.name)
        // console.log(album.photos.length)
        // console.log([Math.floor(Math.random() * album.photos.length)])

        const title = album.title
        const name =  album.user.name
        const photosNumber = album.photos.length
        const randomIndex = Math.floor(Math.random() * album.photos.length)
        const ranPhoto = album.photos[randomIndex]
                    // const randomPhotoUrl = randomPhoto.thumbnailUrl
                    // const randomPhotoTitle = randomPhoto.title

        const albumItem = document.createElement('div')
        albumItem.classList.add('album-item')

        const albumItemLink = document.createElement('a')
        albumItemLink.href = './album.html'

                    
                    
        const photoElement = document.createElement('img')
        photoElement.src = ranPhoto.thumbnailUrl
        photoElement.title = ranPhoto.title

        const albumTitle = document.createElement('h2')
        albumTitle.textContent = `${title} (${photosNumber}), author: ${name}`
        albumItem.append(albumItemLink)
                    
        albumItemLink.append(photoElement, albumTitle)

        albumItem.append(albumItemLink)

        return albumItem
}

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
        console.log(menuItem)

        // let title = menuItem.title
        // let path = menuItem.path

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

init()