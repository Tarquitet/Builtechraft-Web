// Obtener el año actual
var ActualYear = new Date().getFullYear();

// Construir el texto
var texto = "© " + ActualYear + " Builtechraft, a Minecraft server.";

// Actualizar el texto en el div
document.getElementById("ServerLive").textContent = texto;
