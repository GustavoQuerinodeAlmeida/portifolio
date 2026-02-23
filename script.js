const btn = document.querySelector("#btnMostrar");
const foto = document.querySelector("#foto");

btn.addEventListener("click", () => {
  
  if (foto.style.display === "none" || foto.style.display === "") {
   
    foto.style.display = "block";
    setTimeout(() => {
      foto.style.opacity = "1";  
    }, 100);
    btn.textContent = "Esconder Foto";  
  } else {
    
    foto.style.opacity = "0";  
    setTimeout(() => {
      foto.style.display = "none";  
    }, 500);  
    btn.textContent = "Mostrar Foto"; o
  }
});




 

