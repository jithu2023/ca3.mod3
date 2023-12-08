const seachbutton = document.querySelector('.button');

const api_random = "https://www.themealdb.com/api/json/v1/1/random.php";
const randomMealText = document.querySelector('#meal-title');
const modalinstru=document.querySelector(".ingredient-head-list")
const  modaltxt1=document.querySelector(".modal-page")
const modalingr=document.querySelector(".ingredient-head-list")





// const ingredientList = document.querySelector('.ingredient-list')
const viewIngredients = document.querySelectorAll('.recommended-meal-ingredients');
const modalContainer = document.querySelector('.modal-container');
const closeButton = document.querySelector('.close');
const modalTitle = document.querySelector('.modalpage');
const modalImage = document.querySelector('.modal-img');

viewIngredients.forEach(function (viewIngredients) {
    viewIngredients.addEventListener('click', () => {
        // modalContainer.classList.add('show');
    });

});

// closeButton.addEventListener('click', () => {
//     modalContainer.classList.remove('show');
// });


// FETCHING AND GENERATING USER SEARCH RESULTS

seachbutton.addEventListener('click', () => {
  
    const userInput = document.querySelector('input').value
    const resultContainer = document.querySelector('.results');
    const resultText = document.querySelector('.search-result');
         
    var api_category = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=' + userInput;
    console.log(api_category)

    resultText.style.display = 'block'
    resultContainer.style.display = 'grid'


    function generateSearchResults(data) {

        const resultImageContainers = document.querySelectorAll('.resultimg')
        const resultMealNames = document.querySelectorAll('.result-title')
        const  modaltxt=document.querySelector(".modal-page")
        const modalinstru=document.querySelector(".ingredient-head-list")
      
        for (let i = 0; i < 20; i++) {
           

            data.meals.slice(0, 6).forEach((element, i) => {
                resultImageContainers[i].style.backgroundImage = `url(${element.strMealThumb})`;
                resultMealNames[i].innerHTML = `${element.strMeal}`
                // modaltxt[i].innerHTML=`Instructions :${element.strInstructions}`;
     
                // modalinstru[i].innerHTML=`<div>Recipies:${element.strMeal}<div>`;

           

            });
          
        for (let i = 0; i < 20; i++) {
            modalinstru.innerHTML=`ingredients:${element.strIngredient[i]}`}
        }
       
    }


    fetch(api_category)
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            console.log("Result is: ", data);
            generateSearchResults(data);
        })

})







function openModal() {
    document.getElementById('myModal').style.display = 'flex';
  }

  function closeModal() {
    document.getElementById('myModal').style.display = 'none';
  }












// FETCHING AND GENERATING RANDOM MEALS

function generateRandomMeal(data) {
    const randomImageBox = document.querySelector('.liked-meal')
    const  modaltxt=document.querySelector(".modal-page")
    const modalinstru=document.querySelector(".ingredient-head-list")
   
    data.meals.forEach(element => {
        
        randomMealText.innerText = `${element.strMeal}`
        randomImageBox.style.backgroundImage = `url(${element.strMealThumb})`
        modaltxt.innerHTML=`Instructions :${element.strInstructions}`;
     
        modalinstru.innerHTML=`<div>Recipies :${element.strMeal}<div>`;
        for (let i = 1; i<=20;i++){
            modalinstru.innerHTML=`ingredients:${element.strIngredient[i]}`

        }

    });
   
    // data.meals.forEach(element => {
    //     modaltxt.innerHTML = `${element.strMeal}`
    //     modalnstru.style.backgroundImage = `url(${element.strMealThumb})`
     
    // });
    
    console.log(data.meals)


}


fetch(api_random)
    .then(function (response) {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
        generateRandomMeal(data)
        // randomMealText.innerHTML= this.data.meals.strMeal
    })



 
//    constviewInmodel=querySelector(".box")
//    const  modaltxt=document.querySelector(".modal-title")
// const modalinstr=document.querySelector(".ingredient-head-list")
 
//     viewInmodel.addEventListener('click', () => {
//         generateSearchResults(data)
//         const  modal_txt=document.querySelector(".modal-title")
//         const modal_nstr=document.querySelector(".ingredient-head-list")
       
         
//     });