function establecerEstado (){
    chrome.storage.local.get("estado").then((result) => {
        console.log(result);
        if(result["estado"] == "activo")
            chrome.storage.local.set({ "estado": "inactivo" }).then(() => {
                chrome.action.setIcon({path: "/img/focus-off-128.png"});
              });
        else
            chrome.storage.local.set({ "estado": "activo" }).then(() => {
                chrome.action.setIcon({path: "/img/focus-on-128.png"});
             });
      });
        
}


establecerEstado();