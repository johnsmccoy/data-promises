
    // Purpose: Store and retrieve data from remote API

const APIObject = {

}



APIObject.getTypes = () => {
   return fetch("http://localhost:8088/types")
    .then(response => response.json())
}


APIObject.getProducts = () => {
   return fetch("http://localhost:8088/inventory")
    .then(response => response.json())
}



APIObject.saveProduct = (product) => {
    return fetch("http://localhost:8088/inventory", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product)
    });
}

