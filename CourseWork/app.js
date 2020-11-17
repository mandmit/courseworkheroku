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
const Abouttxt4 = document.getElementById("text4");
const Header5 = document.getElementById("header5");
const Imag5 = document.getElementById("im5");
const Abouttxt5 = document.getElementById("text5");
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
    Abouttxt4: Abouttxt4.innerText,
    Header5: Header5.innerText,
    Imag5: Imag5.src,
    Abouttxt5: Abouttxt5.innerText
};
{
    $ajaxUtils.sendGetRequest("https://courseapplicati0n.herokuapp.com/swiper/"+1,function(response){
        const json =  (JSON.parse(response.responseText))[0];
        Header1.innerText = json.header;
        Abouttxt1.innerText = json.text;
        Imag1.src = json.image;
        });
    $ajaxUtils.sendGetRequest("https://courseapplicati0n.herokuapp.com/swiper/"+2,function(response){
        const json =  (JSON.parse(response.responseText))[0];
        Header2.innerText = json.header;
        Abouttxt2.innerText = json.text;
        Imag2.src = json.image;
        });
    $ajaxUtils.sendGetRequest("https://courseapplicati0n.herokuapp.com/swiper/"+3,function(response){
        const json =  (JSON.parse(response.responseText))[0];
        Header3.innerText = json.header;
        Abouttxt3.innerText = json.text;
        Imag3.src = json.image;
        });
    $ajaxUtils.sendGetRequest("https://courseapplicati0n.herokuapp.com/swiper/"+4,function(response){
        const json =  (JSON.parse(response.responseText))[0];
        Header4.innerText = json.header;
        Abouttxt4.innerText = json.text;
        Img4.src = json.image;
        });
    $ajaxUtils.sendGetRequest("https://courseapplicati0n.herokuapp.com/swiper/"+5,function(response){
        const json =  (JSON.parse(response.responseText))[0];
        Header5.innerText = json.header;
        Abouttxt5.innerText = json.text;
        });
    }
};