var paginasBloqueadas = [
    "twitter.com",
    "x.com",
    "tiktok.com"
];

chrome.storage.local.get("estado").then((result) => {
    if(result["estado"] == "activo")
    {
        console.log(window.location.hostname);
        if(!document.body.innerHTML.includes('deja de boludear pelotuda'))
        {
            for(i=0;i<paginasBloqueadas.length;i++)
            {
                let pagina = paginasBloqueadas[i];
                let host = window.location.hostname.toLowerCase();
                if(pagina ==  host || "www."+ pagina == host)
                {
                    //document.body.innerHTML = '<h2>deja de boludear pelotuda.</h2>'
                    console.log("nueva URL: ", chrome.runtime.getURL("trabajando.html"));
                    window.location.replace(chrome.runtime.getURL("trabajando.html"));
                }
            }
        }
    }
});