let getCategories = () => {
  fetch("https://striveschool-api.herokuapp.com/api/movies/", {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjQ0NTgyZWExZDAwMTViYjAzZWEiLCJpYXQiOjE2NDM3OTk2MjIsImV4cCI6MTY0NTAwOTIyMn0.-64K2XQEdJuZl90T0yseyiP61ilY33mW8lOvLq1gTuM",
    },
  })
    .then((resp) => resp.json())
    .then((data) => {
        
        console.log(data);


        let [fantasy, comedy, drama, horror, crime] = data
        
       let fantasyMovies = fetch(
         "https://striveschool-api.herokuapp.com/api/movies/" + fantasy,
         {
           method: "GET",
           headers: {
             Authorization:
               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjQ0NTgyZWExZDAwMTViYjAzZWEiLCJpYXQiOjE2NDM3OTk2MjIsImV4cCI6MTY0NTAwOTIyMn0.-64K2XQEdJuZl90T0yseyiP61ilY33mW8lOvLq1gTuM",
           },
         }
       ).then((resp) => resp.json());

        let comedyMovies = fetch(
          "https://striveschool-api.herokuapp.com/api/movies/" + comedy,
          {
            method: "GET",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjQ0NTgyZWExZDAwMTViYjAzZWEiLCJpYXQiOjE2NDM3OTk2MjIsImV4cCI6MTY0NTAwOTIyMn0.-64K2XQEdJuZl90T0yseyiP61ilY33mW8lOvLq1gTuM",
            },
          }
        ).then((resp) => resp.json());

        let dramaMovies = fetch(
          "https://striveschool-api.herokuapp.com/api/movies/" + drama,
          {
            method: "GET",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjQ0NTgyZWExZDAwMTViYjAzZWEiLCJpYXQiOjE2NDM3OTk2MjIsImV4cCI6MTY0NTAwOTIyMn0.-64K2XQEdJuZl90T0yseyiP61ilY33mW8lOvLq1gTuM",
            },
          }
        ).then((resp) => resp.json());

        let horrorMovies = fetch(
          "https://striveschool-api.herokuapp.com/api/movies/" + horror,
          {
            method: "GET",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjQ0NTgyZWExZDAwMTViYjAzZWEiLCJpYXQiOjE2NDM3OTk2MjIsImV4cCI6MTY0NTAwOTIyMn0.-64K2XQEdJuZl90T0yseyiP61ilY33mW8lOvLq1gTuM",
            },
          }
        ).then((resp) => resp.json());

        let crimeMovies = fetch(
          "https://striveschool-api.herokuapp.com/api/movies/" + crime,
          {
            method: "GET",
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjQ0NTgyZWExZDAwMTViYjAzZWEiLCJpYXQiOjE2NDM3OTk2MjIsImV4cCI6MTY0NTAwOTIyMn0.-64K2XQEdJuZl90T0yseyiP61ilY33mW8lOvLq1gTuM",
            },
          }
        ).then((resp) => resp.json());

        const reducer = (accumulator, currentValue) => accumulator.concat(...currentValue)
        const retrieveAll = async () => {
            let results = await Promise.all([
              fantasyMovies,
              comedyMovies,
              dramaMovies,
              horrorMovies,
              crimeMovies,
            ]);

            console.log(results)
            
            let allMovies = results.reduce(reducer, [])

            console.log(allMovies);
            displayMovies(allMovies);
        }   

        retrieveAll()

    });
}

const displayMovies = (arr) => {
    const allMoviesContainer = document.getElementById("trendingMovies");
console.log(arr)
    arr.forEach(movie => {
        let newCol = document.createElement("div")
        newCol.className =
          "col text-white d-flex flex-column justify-content-between";
        newCol.innerHTML = `
                                <img src="${movie.imageUrl}" class="img-fluid" alt="...">                                
                                <div>
                                    <h5 class="">${movie.name}</h5> 
                                <p class="">${movie.category}</p>                                  
                                <a href="#" class="btn btn-dark">Edit</a> 
                                </div>                               
                            `;
        allMoviesContainer.appendChild(newCol);
    })

}



window.onload = () => {
    getCategories();
    
}


/* ASYNC FUNCTIONS */

/* const loadCategories = async () => {
        try {
            
          const response = await fetch(
            "https://striveschool-api.herokuapp.com/api/movies/",
            {
              method: "GET",
              headers: {
                Authorization:
                  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjQ0NTgyZWExZDAwMTViYjAzZWEiLCJpYXQiOjE2NDM3OTk2MjIsImV4cCI6MTY0NTAwOTIyMn0.-64K2XQEdJuZl90T0yseyiP61ilY33mW8lOvLq1gTuM",
              },
            }
          );
          const data = await response.json();

          console.log(data);

          getFantasy(data);
          getFantasy(data);
          getCrime(data);
          getComedy(data);
          getHorror(data)
        

         /*  const arrOfPromises =  data.map((category) => {
            fetch(
              "https://striveschool-api.herokuapp.com/api/movies/" + category,
              {
                method: "GET",
                headers: {
                  Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjQ0NTgyZWExZDAwMTViYjAzZWEiLCJpYXQiOjE2NDM3OTk2MjIsImV4cCI6MTY0NTAwOTIyMn0.-64K2XQEdJuZl90T0yseyiP61ilY33mW8lOvLq1gTuM",
                },
              }
            )
              .then((resp) => resp.json())
              .then((data) => {
                  
                console.log(data);
                  arrayOfCategories.push(data)
              })
          });
          
        console.log(arrayOfCategories);   
          
          
          
          
        } catch (error) {
            console.log(error);
        }
        
}

const getFantasy = async (arr) => {      
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/movies/Fantasy",
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjQ0NTgyZWExZDAwMTViYjAzZWEiLCJpYXQiOjE2NDM3OTk2MjIsImV4cCI6MTY0NTAwOTIyMn0.-64K2XQEdJuZl90T0yseyiP61ilY33mW8lOvLq1gTuM",
      },
    }
  );
  const data = await response.json();

  console.log(data);
}

const getDrama = async (arr) => {      
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/movies/Drama",
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjQ0NTgyZWExZDAwMTViYjAzZWEiLCJpYXQiOjE2NDM3OTk2MjIsImV4cCI6MTY0NTAwOTIyMn0.-64K2XQEdJuZl90T0yseyiP61ilY33mW8lOvLq1gTuM",
      },
    }
  );
  const data = await response.json();

  console.log(data);
}

const getCrime = async (arr) => {      
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/movies/Crime",
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjQ0NTgyZWExZDAwMTViYjAzZWEiLCJpYXQiOjE2NDM3OTk2MjIsImV4cCI6MTY0NTAwOTIyMn0.-64K2XQEdJuZl90T0yseyiP61ilY33mW8lOvLq1gTuM",
      },
    }
  );
  const data = await response.json();

  console.log(data);
}
const getComedy = async (arr) => {      
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/movies/Comedy",
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjQ0NTgyZWExZDAwMTViYjAzZWEiLCJpYXQiOjE2NDM3OTk2MjIsImV4cCI6MTY0NTAwOTIyMn0.-64K2XQEdJuZl90T0yseyiP61ilY33mW8lOvLq1gTuM",
      },
    }
  );
  const data = await response.json();

  console.log(data);
   assembleMovies(data);
}
const getHorror = async (arr) => {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/movies/Horror",
    {
      method: "GET",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjQ0NTgyZWExZDAwMTViYjAzZWEiLCJpYXQiOjE2NDM3OTk2MjIsImV4cCI6MTY0NTAwOTIyMn0.-64K2XQEdJuZl90T0yseyiP61ilY33mW8lOvLq1gTuM",
      },
    }
  );
  const data = await response.json();

  console.log(data);
  assembleMovies(data);
};


const assembleMovies = (arr) => {
    console.log(arr) 
    let allMovies = [];
    allMovies.concat(arr);
    console.log(allMovies);

} */

/* ASYNC FUNCTIONS END */
/* OTHER FUNCTIONS */
/* OTHER FUNCTIONS END */
/* EVENT LISTENERS */
/* EVENT LISTENERS END */

/* window.onload =   () => {
 loadCategories();
} */