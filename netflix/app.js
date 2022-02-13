const soruContainer1=document.getElementById("soruContainer1");
const soruContainer2=document.getElementById("soruContainer2");
const soruContainer3=document.getElementById("soruContainer3");
const cevap=document.getElementById("cevap");
const cevap2=document.getElementById("cevap2");
const cevap3=document.getElementById("cevap3");
const btn=document.getElementById("btnSubmit")


// RATE //


btn.addEventListener("click",()=>{

window.open("/netflix-series/index.html");


})


soruContainer1.addEventListener("click", function(){

    if(cevap.style.display=="none"){
        cevap.style.display="block";
        soruContainer1.style.border="2px green solid"
    }
    else{
        cevap.style.display="none";
        soruContainer1.style.border="1px red solid"
    }

})


soruContainer2.addEventListener("click", function(){

    if(cevap2.style.display=="none"){
        cevap2.style.display="block";
        soruContainer2.style.border="2px green solid"
    }
    else{
        cevap2.style.display="none";
        soruContainer2.style.border="1px red solid"
    }

})


soruContainer3.addEventListener("click", function(){

    if(cevap3.style.display=="none"){
        cevap3.style.display="block";
        soruContainer3.style.border="2px green solid"
    }
    else{
        cevap3.style.display="none";
        soruContainer3.style.border="1px solid red"
    }

})
