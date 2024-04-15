async function restaurantListLoader({ request, params }) {

    const res = await fetch("http://127.0.0.1:5555/restaurants")
      .then(resp => resp.json())
    return res
}

async function restaurantLoader({ params }) {
    const response = await fetch(`http://127.0.0.1:5555/restaurants/${params.id}`);
    const data = await response.json();
    return data;
}

export {
    restaurantListLoader,
    restaurantLoader

}

export { restaurantListLoader };
