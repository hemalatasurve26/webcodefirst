async function getUsers() {
  let url = "https://makeup-api.herokuapp.com/api/v1/products.json";

  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}
async function fetchdata() {
  //Pagination
  // const PER_PAGE_PRODUCT = 6;
  // const TOTAL_PAGE = 10;

  // let currentPage = 1;
  // let currentBrand = "";

  // const urls = currentBrand
  //   ? `${url}?page=${currentPage}=${PER_PAGE_PRODUCT}&email=${currentBrand}`
  //   : `${url}?page=${currentPage}=${PER_PAGE_PRODUCT}`;

  // alert(urls);
  //pagination end

  let users = await getUsers();
  let html = "";
  users.forEach((user) => {
    let htmlSegment = `<div class="user">
                            <img src"${user.api_featured_image}" height="200px" width="200px" >
                            <h2>Brand Name: ${user.brand}</h2>
                            <h3>Product Name: ${user.name}</h3>
                        </div>
                        <div>Price: ${user.price}</div>
    <div>Product link: ${user.product_link}</div>
    <div>Product Description: ${user.description}</div>`;

    html += htmlSegment;
  });

  let container = document.querySelector(".container");
  container.innerHTML = html;
}

fetchdata();

// document.getElementById("prev-btn").addEventListener("click", () => {
//   if (currentPage > 1) {
//     currentPage--;
//     fetchData();
//   }
// });
// document.getElementById("next-btn").addEventListener("click", () => {
//   if (currentPage < TOTAL_PAGE) {
//     currentPage++;
//     fetchData();
//   }
// });

function filterProduct(value) {
  let button = document.querySelectorAll(".button-value");
  button.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

window.onload = () => {
  filterProduct("all");
};
document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".name");
});
