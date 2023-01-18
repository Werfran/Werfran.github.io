fetch("https://randomuser.me/api/").then(
    (response) => {
        const responseObj= response.json();
        responseObj.then((data)=> {
            const persona = data.results[0];
            localStorage.setItem("usuarioData",JSON.stringify(persona));
            fillData(persona);
        })
    }
);

fillData = function(dataUsuario){
    document.getElementById("imagenUsuario").src = dataUsuario.picture.large
}
