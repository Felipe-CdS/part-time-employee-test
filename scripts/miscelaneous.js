/*Validates the phone entry via regex. Shows a warning if the phone is wrong*/ 
function validateTelephone(){  
    //(21)00000-0000 regex || (21)000000000 regex || 21123456789 regex
    var regex = /^\(\d{2}\)\d{5}\-\d{4}$|^\(\d{2}\)\d{5}\d{4}$|^\d{11}$/;
    var TelephoneEntry = document.getElementById("phone").value;

    if(regex.test(TelephoneEntry)){
        document.getElementById("phone-input-warning").style.display = "none";
        return true;
    }
    else{
        document.getElementById("phone-input-warning").style.display = "initial";
        return false;
    }
}

document.getElementById("phone").addEventListener("change", validateTelephone);