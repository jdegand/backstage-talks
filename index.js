const magazine5 = document.querySelector(".magazine-5");

//console.log(window.screen.height)
//console.log(document.documentElement.clientHeight)

document.querySelector(".scroll-container").addEventListener("scroll",(event) => {
   // console.log(window.scrollY + magazine5.getBoundingClientRect().top)
   // 1550 x 848
   // window.scrollY + magazine5.getBoundingClientRect().top === -847
   // window.scrollY + magazine5.getBoundingClientRect().top === -1695
   // window.scrollY + magazine5.getBoundingClientRect().top === -2543
   // window.scrollY + magazine5.getBoundingClientRect().top === -3391

    //console.log(document.documentElement.clientHeight)
    //document.documentElement.clientHeight - magazine5.getBoundingClientRect().bottom

    document.querySelectorAll(".index").forEach(index => index.style.fontWeight = "400")

    if(window.scrollY + magazine5.getBoundingClientRect().top === 1) {
        document.querySelector("[data-index='5']").style.fontWeight = "bold";
    } else if( window.scrollY + magazine5.getBoundingClientRect().top ===  -1*(document.documentElement.clientHeight - 1) ){
        document.querySelector("[data-index='4']").style.fontWeight = "bold";
    } else if ( window.scrollY + magazine5.getBoundingClientRect().top ===  -1 *( 2 * document.documentElement.clientHeight - 1) ) {
        document.querySelector("[data-index='3']").style.fontWeight = "bold";
    } else if ( window.scrollY + magazine5.getBoundingClientRect().top ===  -1 *( 3 * document.documentElement.clientHeight - 1) ) {
        document.querySelector("[data-index='2']").style.fontWeight = "bold";
    } else if ( window.scrollY + magazine5.getBoundingClientRect().top ===  -1 *( 4 * document.documentElement.clientHeight - 1) ) {
        document.querySelector("[data-index='1']").style.fontWeight = "bold";
    }
});
