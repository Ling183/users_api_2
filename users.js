
async function init() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users?_embed=posts')
  const users = await res.json()
  
  console.log(users)
  const pageContent = document.querySelector('#page-content')
  const header = createPageLinkHeader()
  const usersList = createListElement(users)

  pageContent.append(usersList)
  pageContent.before(header)
}

function createListElement(users) {
  const usersList = document.createElement('ul')
  usersList.classList.add('users-list', 'data-list')


  users.map(user => {

    console.log(user.posts.length)
    console.log(user.id)
    const postsCount = user.posts.length
          
    const userItem = document.createElement('li')
    userItem.classList.add('user-item')
    userItem.innerHTML = `<a href="./user.html">${user.name}(${postsCount})</a>`

    usersList.append(userItem)
            
  })

  return usersList
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

