/* GLOBAL VARIABLES */

const movieID = new URLSearchParams(window.location.search).get("movieID");

console.log(movieID);

const endpoint = movieID ? "https://striveschool-api.herokuapp.com/api/movies/" + movieID : "https://striveschool-api.herokuapp.com/api/movies/"

console.log(endpoint);
/* GLOBAL VARIABLES END */

/* ASYNC FUNCTIONS */

if (movieID !== null) {
  try {
    const loadProductInfo = async () => {
      const response = await fetch(endpoint, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjQ0NTgyZWExZDAwMTViYjAzZWEiLCJpYXQiOjE2NDM3OTk2MjIsImV4cCI6MTY0NTAwOTIyMn0.-64K2XQEdJuZl90T0yseyiP61ilY33mW8lOvLq1gTuM",
        },
      });
      const product = await response.json();
      /* PRE-FILLING UP FORM */
      document.getElementById("nameValue").value = product.name;
      document.getElementById("descriptionValue").value = product.description;
      document.getElementById("brandValue").value = product.brand;
      document.getElementById("imgUrlValue").value = product.imageUrl;
      document.getElementById("priceValue").value = product.price;

      /* CHANGING BUTTONS, TEXTS ETC.... */

      document.querySelector("#submitBtn").innerText = "Edit Product";
      document.querySelector(".btn-danger").classList.remove("d-none");
      document.querySelector("h3").innerText = "Edit Product Details:";
    };
    window.onload = () => {
      loadProductInfo();
    };
  } catch (error) {
    console.log(error);
  }

  const editProduct = async (event) => {
    event.preventDefault();

    const myEvent = {
      name: document.getElementById("nameValue").value,
      description: document.getElementById("descriptionValue").value,
      brand: document.getElementById("brandValue").value,
      imageUrl: document.getElementById("imgUrlValue").value,
      price: document.getElementById("priceValue").value,
    };

    try {
      const response = await fetch(endpoint, {
        method: "PUT",
        body: JSON.stringify(myEvent),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjQ0NTgyZWExZDAwMTViYjAzZWEiLCJpYXQiOjE2NDM3OTk2MjIsImV4cCI6MTY0NTAwOTIyMn0.-64K2XQEdJuZl90T0yseyiP61ilY33mW8lOvLq1gTuM",
        },
      });

      const message = await response.json();
      /* console.log("EDIT Successful", message); */
      document
        .getElementById("alert-editing-completed")
        .classList.remove("d-none");
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = (event) => {
    fetch(endpoint, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjQ0NTgyZWExZDAwMTViYjAzZWEiLCJpYXQiOjE2NDM3OTk2MjIsImV4cCI6MTY0NTAwOTIyMn0.-64K2XQEdJuZl90T0yseyiP61ilY33mW8lOvLq1gTuM",
      },
    }).catch((error) => console.log(error));
    document
      .getElementById("alert-deletion-completed")
      .classList.remove("d-none");
    document.getElementById("form-container").classList.add("d-none");
  };

  /* EVENT LISTENERS INSIDE IF */

  document.getElementById("form").addEventListener("submit", editProduct);
  document.querySelector("#dltBtn").addEventListener("click", deleteProduct);

  /* EVENT LISTENERS INSIDE IF END */
} else {
  const postData = async (event) => {
    event.preventDefault();
    console.log("POST SEQUENCE INITIATED");

   

    const myEvent = {
      name: document.getElementById("name").value,
      description: document.getElementById("description").value,
      category: document.getElementById("category").value,
      imageUrl: document.getElementById("image").value,
      
    };

    console.log()

    try {
      
      const response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(myEvent),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjQ0NTgyZWExZDAwMTViYjAzZWEiLCJpYXQiOjE2NDM3OTk2MjIsImV4cCI6MTY0NTAwOTIyMn0.-64K2XQEdJuZl90T0yseyiP61ilY33mW8lOvLq1gTuM",
        },
      });

      const message = await response.json();
      console.log("POST Successful", message);
      
      document.getElementById("form").reset();

      
    } catch (error) {
      console.log(error)
    }
  };

  /* EVENT LISTENERS INSIDE IF */

  document.getElementById("form").addEventListener("submit", postData);
  /* EVENT LISTENERS INSIDE IF END */
}

/* const showLoading = (isloading) => {
  const spinner = document.getElementById("spinner");
  if (isloading) spinner.classList.remove("d-none");
  else if (isloading) spinner.classList.add("d-none");
};

const checkForm = () => {
  console.log("CHECKING FORM START");
  let inputs = Array.from(document.querySelectorAll(".form-control"));

  inputs.forEach((input) => {
    if (input.value === "" && !input.classList.contains("empty-field")) {
      input.classList.add("empty-field");
    } else {
      input.classList.add("validated");
    }
  });
  if (inputs.some((input) => input.classList.contains("empty-field")))
    throw new Error("All fields must be filled");
  console.log("FIRST IF CHECK PASSED");
}; */

/* ASYNC FUNCTIONS END */

/* OTHER FUNCTIONS */
/* OTHER FUNCTIONS END */

/* GLOBAL EVENT LISTENERS */

/*GLOBAL EVENT LISTENERS END */
