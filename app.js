// header-2
window.addEventListener("scroll",function(){
    var header = this.document.querySelector(".header-2");
    header.classList.toggle("stickyy",this.window.scrollY>10);
})


//  header-2
window.addEventListener("scroll",function(){
    var header = this.document.querySelector(".header-2");
    header.classList.toggle("sticky",this.window.scrollY>530);
})

function menu(){
    var header = this.document.querySelector(".menuu");
    header.classList.toggle("open-menu");
}
function games(){
    window.location.href = "http://127.0.0.1:5500/game.html";

}
function btn_more_game(){
    alert("nimana bawa");
}