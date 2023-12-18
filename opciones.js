let botonAgregar = document.getElementById("btnAgregar");
let ul = document.getElementById("listaDeUrls");
let botonShorts = document.getElementById("toggle");
var listaUrls = [];

function inicializarOpciones(){
    chrome.storage.sync.get("listaUrls").then((result) => {
        listaUrls = result.listaUrls;
        
        listaUrls.forEach(valor => {
            crearItem(valor)
        });
    })
    chrome.storage.sync.get("shorts").then ((result) =>{
        shorts = result.shorts;
        if(shorts == true){
            botonShorts.checked = true;
        }
        else
            botonShorts.checked = false;
    })
}

function crearItem(texto)
{
    let li = document.createElement("li");
    let btnEliminar = document.createElement("button");
    p = document.createTextNode(texto);
    li.appendChild(p);
    li.appendChild(btnEliminar);
    li.classList.add('itemListaUrls');
    btnEliminar.classList.add('botonItem');
    
    

    btnEliminar.addEventListener("click", () => {
        let liSeleccionado = btnEliminar.parentElement;
        let urlEliminada = liSeleccionado.firstChild.textContent;
        const resultado = listaUrls.find(url => url  === urlEliminada);
        console.log(resultado);
        let indice = listaUrls.indexOf(resultado);
        listaUrls.splice(indice, 1);

        liSeleccionado.remove();
        chrome.storage.sync.set({listaUrls: listaUrls});
    });
    ul.appendChild(li);
}
botonAgregar.addEventListener("click", () => {
    let url = document.getElementById('urlIngresada').value;
    const resultado = listaUrls.find(pagina => pagina === url);
        if(resultado == undefined){
            if(url !== ""){
                crearItem(url);
                listaUrls.push(url);
                chrome.storage.sync.set({listaUrls: listaUrls});
                document.getElementById('urlIngresada').value = "";
            }
            else
                alert("ingresa un url que quieras bloquear")
                
        }
        else{
            alert("La url ingresada ya esta dentro de las bloquedas")
            document.getElementById('urlIngresada').value = "";
        }
    },
)
inicializarOpciones();

botonShorts.addEventListener("click", () => {
    let estadoShorts = botonShorts.checked;
    
    if(estadoShorts == true){
        console.log(estadoShorts);
        chrome.storage.sync.set({shorts: estadoShorts});
    }
    else{
        chrome.storage.sync.set({shorts: estadoShorts});
        console.log(estadoShorts)
    }
        
})