const open_i = document.getElementById("open_i");
const close_i = document.getElementById("close_i");
const flags_i = document.getElementById("flags_i");


open_i.addEventListener("click", ()=> {
    if(flags_i.style.display === "none" || !flags_i.style.display) {
        flags_i.style.display = "block";
    } else {
        flags_i.style.display = "none";
    }
})


close_i.addEventListener("click", ()=> {
    if(flags_i.style.display === "block") {
        flags_i.style.display = "none";
    } else {
        flags_i.style.display = "block";
    }
})

