// animação suave ao clicar no menu

document.querySelectorAll("nav a").forEach(link=>{
    link.addEventListener("click", e=>{
        e.preventDefault();
        document.querySelector(link.getAttribute("href"))
        .scrollIntoView({
            behavior:"smooth"
        });
    });
});