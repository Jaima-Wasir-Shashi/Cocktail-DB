const cardContainer = document.getElementById('card-container');
const showBtn = document.getElementById('show-more');
let count;


const loadJuice = () => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    .then(response => response.json())
    .then(juices => showRandomJuice(juices.drinks[0]));
}

const showRandomJuice = (juice) => {
    // console.log(juice.idDrink);
    
    const juiceCard = document.createElement('div');
    juiceCard.classList.add('col-md-4');
    juiceCard.innerHTML=`
        <div onclick="loadDetails(${juice.idDrink})" class="cd card bg-dark text-white" style="height: 320px;">
            <img src="${juice.strDrinkThumb}" class="card-img h-100" alt="..." style="object-fit: cover;">
            <div class="card-img-overlay" style="background-color: rgba(0, 0, 0, 0.319);">
                <h5 class="card-title text-white fw-bold fs-2">${juice.strDrink}</h5>
            </div>
            </div>
    `
    cardContainer.appendChild(juiceCard);
    count = document.getElementsByClassName('cd').length;
    // console.log(count);
    
    if (count%15==0) {
        showBtn.style.display='inline-block';
    }else{
        showBtn.style.display='none';
    }
}


const start = () => {
    for(let i =0 ; i<15; i++){
        loadJuice();
    }
}

// const loadDetails = (id) => {
//     const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
//     // console.log(url);

//     fetch(url)
//     .then(response => response.json())
//     .then(juice => showDetails(juice.drinks[0]))
// }


// const showDetails = (juice) => {
//     console.log(juice);
// }