async function restaurantListLoader({ request, params }) {
    const res = await fetch("http://127.0.0.1:5555/restaurants")
      .then(resp => resp.json())
    return res
  }

export {
    restaurantListLoader
}

