//----- VARIABLES ----- //

const panels = document.querySelectorAll(".panel");

//----- EVENT LISTENERS ----- //

panels.forEach(panel =>{

    panel.addEventListener("click", ()=>{
        quitarClaseActive();
        panel.classList.add("active");
    })

})

//----- FUNCIONES ----- //

function quitarClaseActive(){

    panels.forEach(panel =>{
        panel.classList.remove("active");
    })
}