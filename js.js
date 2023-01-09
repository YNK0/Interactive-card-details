const c_name=document.getElementById("c_name"); //Input del nombre
const img_name = document.getElementById("card_name"); //Imagen con el nombre  

const card_number = document.getElementById("c_number") //Input de los numeros
const img_number = document.getElementById("card_number") //Img del los umeros mostrados

const card_month = document.getElementById("cc_month")
const card_year = document.getElementById("cc_year")
const img_date = document.getElementById("card_date")

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
            c_name.value=erase_last(c_name.value);
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
            card_number.value=erase_last(card_number.value);
            document.getElementById("c_number").classList.add("error_d");
        }
    }
    let card_value=""
    for (let x=0; x<card_number.value.length;x++) {
        if (x==4 || x==8 || x==12){ 
            card_value+=(" ");
        }
        card_value+=card_number.value[x];
    }
    img_number.innerHTML =card_value;
}


card_month.addEventListener("input", ()=> {
    input_date_check();
})

function input_date_check() {
    for( let i=0; i<card_month.value.length; i++){
        if(card_month.value[i].match(/[\d]/g)){
            card_month.value=card_month.value;
            card_month.classList.remove("error_d");
        } else {
            card_month.value=erase_last(card_month.value);
            card_month.classList.add("error_d");
        }
    }
    selection(1,card_month.value)
}

card_year.addEventListener("input", ()=>{
    input_date_year_check();
})

function input_date_year_check() {
    for( let i=0; i<card_year.value.length; i++){
        if(card_year.value[i].match(/[\d]/g)){
            card_year.value=card_year.value;
            card_year.classList.remove("error_d");
        } else {
            card_year.value=erase_last(card_year.value);
            card_year.classList.add("error_d");
        }
    }
    selection(2,card_year.value)
}

let date

function selection(option, data) {
    if(option==1) {
        img_date.innerHTML = data+"/";
        date=data+"/";
    }
    if(option==2) {
        img_date.innerHTML = date+data;
    }
    console.log()
}

function erase_last(values) {
    return values.slice(0,-1);
}

