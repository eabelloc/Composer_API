const composersURL = "http://localhost:8060/api/composers/getAll";

window.onload = () => {
  initComposers();
};

const initComposers = async () => {
  const composers = await getComposers();
  mappedComposers(composers);
};

const getComposers = async () => {
  const rawData = await fetch(composersURL);
  const jsonData = await rawData.json();
  return jsonData;
};

const mappedComposers = (list) => {
    list.data.composers.map((item) => {
        return printComposers ({name: item.name,
                            year: item.year,
                            origin: item.origin,
                            image: item.images,
                            style: item.style,
                            favoriteWork: item.myFavouriteWork,
                            biography: item.biography
        })
})};

const printComposers = (item) => {
    const charactersContainer = document.querySelector('#composers_container')
    charactersContainer.innerHTML += `
    <figure class="figure_container">
        <div class="name_year_origin_container">
            <h3>${item.name}</h3>
            <h4>${item.year}</h4>
            <h4 class="character_origin">${item.origin}</h4>
        </div>
        <div class="img_container">
            <img src="${item.image}" alt="${item.name}" />
        </div>
        <h4>${item.style}</h4>
        <h4>${item.favoriteWork}</h4>
        <p>${item.biography}</p>
    </figure>
  `;
};

/*PARALLAX :3*/
$(window).scroll(function(e){
    parallax();
  });
  function parallax(){
    var scrolled = $(window).scrollTop();
    $('.bg').css('top',-(scrolled*0.2)+'px');
  }