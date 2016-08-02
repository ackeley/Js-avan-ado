function set_config(){
    var texts = {
            "titulo":"Shopping Control"
    };

    document.title = texts.titulo;
    document.getElementById("navTitle").innerHTML = texts.titulo;
}

set_config();