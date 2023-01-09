const c_name=document.getElementById("c_name"); //Input del nombre
const img_name = document.getElementById("card_name"); //Imagen con el nombre  

const card_number = document.getElementById("c_number") //Input de los numeros
const img_number = document.getElementById("card_number") //Img del los umeros mostrados

//Show name on IMG Card
c_name.addEventListener("input", ()=>{
    input_check();
});

function input_check() {
    for (let i=0; i<c_name.value.length; i++) {
        if(c_name.value[i].match(/[a-zA-Z ]/g)) {
            c_name.value=c_name.value;
            document.getElementById("c_name").classList.remove("error_d");
        } else {
            c_name.value="";
            document.getElementById("c_name").classList.add("error_d");
        }
    }
    img_name.innerHTML = c_name.value;
}

//Show numbers on card img
card_number.addEventListener("input", ()=> {
    input_number_Check();
});

function input_number_Check() {
    for( let i=0; i<card_number.value.length; i++){
        if(card_number.value[i].match(/[\d]/g)){
            card_number.value=card_number.value;
            document.getElementById("c_number").classList.remove("error_d");
        } else {
            card_number.value="";
            document.getElementById("c_number").classList.add("error_d");
        }
    }

    let card_value = card_number.value;
    console.log(card_value.length)

    if (card_value.length== 4) {
        card_value+=("-");
    }
    if (card_value.length==9 ) {
        card_value+=("-");
    }
    if (card_value.length== 14 ) {
        card_value+=("-");
    }
    
    img_number.innerHTML =card_value;
    
    
}
