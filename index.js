const input= document.getElementById('searchInput');
const container = document.getElementById('container');
const btn = document.getElementById("searchButton");

  btn.addEventListener("click", async ()=>{

    const inputValue = input.value;
    
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`);
    console.log(response);
    const data = await response.json();
     console.log(data);
     container.innerHTML = ""



     if(inputValue === ""){
        container.innerHTML =`
          <h3>Please enter & search for your meal</h3>
        `;   
     }
     else{
    data.meals.map((ele)=>{
    //   console.log(ele.strMealThumb);
   
     container.innerHTML +=`
     <div class="inner" >
     <img src="${ele.strMealThumb}" alt="images">
     </div>
     `
     })
   } 
  })   
  
  const clearButton = document.getElementById('clearButton');

  clearButton.addEventListener('click',()=>{
    container.innerHTML="";
  })
  