let divEl = document.querySelectorAll(".main-div")[0];

let api = "https://dummyjson.com/products";

fetch(api)
  .then((response) => response.json())
  .then((item) => {
    let product = item.products;
    console.log(product);

    for (let i = 0; i < product.length; i++) {
      divEl.innerHTML += `

            <div class = "card">

                <img  src = "${product[i].images}" />
                <h2> ${product[i].title} </h2>
                <p> $ ${product[i].price}</p>

            </div>

            `;
    }
  });
