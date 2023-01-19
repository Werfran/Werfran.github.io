fetch("https://randomuser.me/api/").then((response) => {
    const responseObj = response.json();
    responseObj.then((data) => {
        const persona = data.results[0];
        localStorage.setItem("usuarioData", JSON.stringify(persona));
        fillData(persona);
    });
});

fillData = function (dataUsuario) {
    document.getElementById("imagenUsuario").src = dataUsuario.picture.large;
    document.getElementById("nombreHeader").innerHTML =
        dataUsuario.name.last + ", " + dataUsuario.name.first + ".";
    document.getElementById("correoText").innerHTML = dataUsuario.email;
    document.getElementById("telefonoText").innerHTML = dataUsuario.phone;
    document.getElementById("celularText").innerHTML = dataUsuario.cell;
    document.getElementById("residenciaText").innerHTML =
        dataUsuario.location.city +
        ", " +
        dataUsuario.location.state +
        ", " +
        dataUsuario.location.country +
        ".";
};

function bufferText(fieldName) {
    const el = document.createElement("textarea");
    el.value = document.getElementById(fieldName).innerHTML;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
}
