
// step-1: load api

const loadmeals = (search) => {
 
 const url =`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
fetch(url)

.then (res =>res.json())
.then( data=>displaymeals(data.meals));

}

// step:-2 display function

const displaymeals = meals =>{

    // meal container div connect event handler
    const mealsContainer = document.getElementById('meal-container');
 
    mealsContainer.innerHTML ='' ;
    meals.forEach(meal=>{

console.log(meal)

       const mealDiv =document.createElement('div'); //class div
        mealDiv.classList.add('col'); //class create 
        mealDiv.innerHTML =`
       
        <div class="card">
    
                      <img src="${meal.strMealThumb
                      }" class="card-img-top" alt="...">
                      searchfeild.value
                     <h5 class="card-title">${meal.strMeal}</h5>
                     <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
                      <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
       </div>
        
        </div>
        `;
        mealsContainer.appendChild(mealDiv);  //append child of div

    })
}

//onclick function 
const searchfood =() =>{
    const searchfeild = document.getElementById('searchFeild');

    const searchText = searchfeild.value ;
    loadmeals(searchText);
    searchfeild.value = '' ;


}

loadmeals();