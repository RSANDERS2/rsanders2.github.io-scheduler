$(document).ready(function(){
//display the day
var currentDay = moment().format("dddd - MMMM Do YYYY, h:m a");
$("#currentDay").text(currentDay);

//time indicator based on color (past,present,future)
function timeIndicator() {
    var currentTime = moment().hour();

    $(".time-block").each(function (){
        var hourBlock = parseInt($(this).attr("id").split("block"[1]));

        if (hourBlock < currentTime) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
        else if (hourBlock === currentTime) {
            $(this).removeClass("past");
            $(this).addClass("present");
            $(this).removeClass("future");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    })
}
timeIndicator();

//seperate function for each time block
//click function saves description to local storage
//after refresh, info remains on the page

function block9() {
    var input9 = document.querySelector("#task9am");
    var output9 = document.querySelector("#task9am");
    var save9 = document.querySelector("#btn9");

    save9.addEventListener("click", storeOutput9);

    output9.textContent = localStorage.getItem("content9");
    input9.value = localStorage.getItem("content9");

    function storeOutput9() {
        localStorage.setItem("content9", input9.value);
        output9.textContent = input9.value;
    }
}
block9();

function block10() {
    var input10 = document.querySelector("#task10am");
    var output10 = document.querySelector("#task10am");
    var save10 = document.querySelector("#btn10");

    save10.addEventListener("click", storeOutput10);

    output10.textContent = localStorage.getItem("content10");
    input10.value = localStorage.getItem("content10");

    function storeOutput10() {
        localStorage.setItem("content10", input10.value);
        output10.textContent = input10.value;
    }
}
block10();

function block11() {
    var input11 = document.querySelector("#task11am");
    var output11 = document.querySelector("#task11am");
    var save11 = document.querySelector("#btn11");

    save11.addEventListener("click", storeOutput11);

    output11.textContent = localStorage.getItem("content11");
    input11.value = localStorage.getItem("content11");

    function storeOutput11() {
        localStorage.setItem("content11", input11.value);
        output11.textContent = input11.value;
    }
}
block11();

function block12() {
    var input12 = document.querySelector("#task12pm");
    var output12 = document.querySelector("#task12pm");
    var save12 = document.querySelector("#btn12");

    save12.addEventListener("click", storeOutput12);

    output12.textContent = localStorage.getItem("content12");
    input12.value = localStorage.getItem("content12");

    function storeOutput12() {
        localStorage.setItem("content12", input12.value);
        output12.textContent = input12.value;
    }
}
block12();

function block13() {
    var input13 = document.querySelector("#task13pm");
    var output13 = document.querySelector("#task13pm");
    var save13 = document.querySelector("#btn13");

    save13.addEventListener("click", storeOutput13);

    output13.textContent = localStorage.getItem("content13");
    input13.value = localStorage.getItem("content13");

    function storeOutput13() {
        localStorage.setItem("content13", input13.value);
        output13.textContent = input13.value;
    }
}
block13();

function block14() {
    var input14 = document.querySelector("#task14pm");
    var output14 = document.querySelector("#task14pm");
    var save14 = document.querySelector("#btn14");

    save14.addEventListener("click", storeOutput14);

    output14.textContent = localStorage.getItem("content14");
    input14.value = localStorage.getItem("content14");

    function storeOutput14() {
        localStorage.setItem("content14", input14.value);
        output14.textContent = input14.value;
    }
}
block14();

function block15() {
    var input15 = document.querySelector("#task15pm");
    var output15 = document.querySelector("#task15pm");
    var save15 = document.querySelector("#btn15");

    save15.addEventListener("click", storeOutput15);

    output15.textContent = localStorage.getItem("content15");
    input15.value = localStorage.getItem("content15");

    function storeOutput15() {
        localStorage.setItem("content15", input15.value);
        output15.textContent = input15.value;
    }
}
block15();

function block16() {
    var input16 = document.querySelector("#task16pm");
    var output16 = document.querySelector("#task16pm");
    var save16 = document.querySelector("#btn16");

    save16.addEventListener("click", storeOutput16);

    output16.textContent = localStorage.getItem("content16");
    input16.value = localStorage.getItem("content16");

    function storeOutput16() {
        localStorage.setItem("content16", input16.value);
        output16.textContent = input16.value;
    }
}
block16();

function block17() {
    var input17 = document.querySelector("#task17pm");
    var output17 = document.querySelector("#task17pm");
    var save17 = document.querySelector("#btn17");

    save17.addEventListener("click", storeOutput17);

    output17.textContent = localStorage.getItem("content17");
    input17.value = localStorage.getItem("content17");

    function storeOutput17() {
        localStorage.setItem("content17", input17.value);
        output17.textContent = input17.value;
    }
}
block17();

$("#clearAll").on("click", function() {
localStorage.clear();
block9();
block10();
block11();
block12();
block13();
block14();
block15();
block16();
block17();
})

});
