let header=document.querySelector("header");
window.onscroll = function(){
    if (this.scrollY>=100) {
        header.classList.add("ac")
        
    }else{
        header.classList.remove("ac")  
    }
}



// 
let links=document.getElementById("links");
function open_close() {
    links.classList.toggle("active")
    
}