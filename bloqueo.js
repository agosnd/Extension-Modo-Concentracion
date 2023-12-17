
chrome.storage.local.get("estado").then((result) => {
    if(result["estado"] == "activo")
    {
        console.log(window.location.hostname);
        chrome.storage.sync.get("listaUrls").then((result) =>{
            let listaUrls = result.listaUrls;
            console.log(listaUrls);
            for(i=0;i<listaUrls.length;i++)
            {
                let pagina = listaUrls[i];
                let host = window.location.hostname.toLowerCase();
                if(pagina ==  host || "www."+ pagina == host)
                {
                    window.location.replace(chrome.runtime.getURL("trabajando.html"));
                }
            }
        })
        
    }
});