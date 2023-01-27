getCharacters().then((characters) => renderCharacter(characters));

const renderCharacter = (characters) => {
    const html = characters.map(
        (character) =>
            `
            <li class="splide__slide">
                <div class="character-image" src="" alt="" style="background-image: url(${character.image})">
                    <div class="slider-item-bottom">
                      <div class="character-name">
                        <span>${character.name}</span>
                      </div>
                      <div>
                        <span><i class="fa-sharp fa-solid fa-circle fa-2xs" style="color: ${renderStatus(character)}"></i></span>
                        <span class="character-situation">${character.status}</span>
                        <span>-</span>
                        <span class="character-species">${character.species}</span>
                      </div>
                    </div>
                </div>
            </li>
            `
    ).join("");
    document.getElementById("splide_list").innerHTML = html;

    new Splide(".splide", {
        type: 'loop',
        perPage : 3
    }).mount();
}

const renderStatus = (character) => {
    if (character.status === "Alive") {
        return "green";
    } else if (character.status === "Dead")
        return "red";
    else return "gray";
  };