// window.addEventListener('click', () => {
    //     console.log("js OK !");
    // })
    




// récupération api --------------------------------------------
// cible les élément balise du dom
const header_elt = document.getElementById("header");
const content_elt = document.getElementById("content");

fetch("https://api.blablagues.net/?rub=blagues")

    .then((res) =>  res.json())
    .then((data) => {
        console.log(data.data.content);
        header_elt.textContent = data.data.content.text_head
        content_elt.textContent = data.data.content.text !== ""
        ? data.data.content.text 
        : data.data.content.text_hidden;
    });
        // .catch((error) => console.log(error));
    
// -------------------------------------------------------------