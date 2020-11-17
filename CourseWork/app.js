/* global $ajaxUtils */

const Header1 = document.getElementById("header1");
const Imag1 = document.getElementById("im1");
const Abouttxt1 = document.getElementById("text1");
const Header2 = document.getElementById("header2");
const Imag2 = document.getElementById("im2");
const Abouttxt2 = document.getElementById("text2");
const Header3 = document.getElementById("header3");
const Imag3 = document.getElementById("im3");
const Abouttxt3 = document.getElementById("text3");
const Header4 = document.getElementById("header4");
const Imag4 = document.getElementById("im4");
const Abouttxt4 = document.getElementById("text4");
const Header5 = document.getElementById("header5");
const Abouttxt5 = document.getElementById("text5");
let num = 0;
let start = {
    Header1: Header1.innerText,
    Imag1: Imag1.src,
    Abouttxt1: Abouttxt1.innerText,
    Header2: Header2.innerText,
    Imag2: Imag2.src,
    Abouttxt2: Abouttxt2.innerText,
    Header3: Header3.innerText,
    Imag3: Imag3.src,
    Abouttxt3: Abouttxt3.innerText,
    Header4: Header4.innerText,
    Imag4: Imag4.src,
    Abouttxt4: Abouttxt4.innerText,
    Header5: Header5.innerText,
    Abouttxt5: Abouttxt5.innerText
};
function(){
    while(num<=5){
        if(num === 1){
    $ajaxUtils.sendGetRequest("https://courseapplicati0n.herokuapp.com/swiper/"+num,function(response){
        const json =  (JSON.parse(response.responseText))[0];
        Header1.innerText = json.header;
        Abouttxt1.innerText = json.text;
        Imag1.src = json.image;
        });
        num++;
    }
        if(num === 2){
    $ajaxUtils.sendGetRequest("https://courseapplicati0n.herokuapp.com/swiper/"+num,function(response){
        const json =  (JSON.parse(response.responseText))[0];
        Header2.innerText = json.header;
        Abouttxt2.innerText = json.text;
        Imag2.src = json.image;
        });
        num++;
    }
        if(num === 3){
    $ajaxUtils.sendGetRequest("https://courseapplicati0n.herokuapp.com/swiper/"+num,function(response){
        const json =  (JSON.parse(response.responseText))[0];
        Header3.innerText = json.header;
        Abouttxt3.innerText = json.text;
        Imag3.src = json.image;
        });
        num++;
    }
        if(num === 4){
    $ajaxUtils.sendGetRequest("https://courseapplicati0n.herokuapp.com/swiper/"+num,function(response){
        const json =  (JSON.parse(response.responseText))[0];
        Header4.innerText = json.header;
        Abouttxt4.innerText = json.text;
        Imag4.src = json.image;
        });
        num++;
    }
        if(num ===5){
    $ajaxUtils.sendGetRequest("https://courseapplicati0n.herokuapp.com/swiper/"+num,function(response){
        const json =  (JSON.parse(response.responseText))[0];
        Header5.innerText = json.header;
        Abouttxt5.innerText = json.text;
        });
        num++;
    }
    }};
};