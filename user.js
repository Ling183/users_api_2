async function init() {
    const queryPar = location.search
    const urlPar = new URLSearchParams(queryPar)
    const id = urlPar.get('user_id')
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}?_embed=posts&_embed=albums`)
    const user = await res.json()
    console.log(user)
    console.log(user.email)
    console.log(user.phone)
    console.log(user.username)
    console.log(user.website)
    console.log(user.company.name)
    console.log(user.address)
    console.log(user.address.city)
    console.log(user.address.street)
    console.log(user.address.suite)
    console.log(user.address.zipcode)
    console.log(user.address.geo)
    console.log(user.address.geo.lat)
    console.log(user.address.geo.lng)

    let {name, email, phone, username, website, posts, albums } = user
    let {city, street, suite, zipcode } = user.address
    let {lat, lng} = user.address.geo
    let companyName = user.company.name

    console.log(name)
    console.log(email)
    console.log(phone)
    console.log(username)
    console.log(website)
    console.log(companyName)
    console.log(city)
    console.log(street)
    console.log(suite)
    console.log(zipcode)
    console.log(lat)
    console.log(lng)
    console.log(posts)
    console.log(albums)

    posts.map(post => {
        console.log(post)
        console.log(post.title)
        console.log(post.id)
    })

    albums.map(album => {
        console.log(album)
        console.log(album.title)
        console.log(album.id)
    })
//     const postRes = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
//     const posts = await postRes.json()

//     const albumsRes = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
//     const albums = await albumsRes.json()

//     
}
init()