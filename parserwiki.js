class MyXMLReader {

    constructor() {
        this.nodo = null;
        this.mapa = null;
        this.contador = 0;
    }


    obtenerNodo(nombreNodo) {
        $.ajax({
            type: "GET",
            url: "https://diegotrapiello.github.io/ExtraordinariaSEW/wikihades.xml",
            dataType: "xml",
            success: function (xml) {
                console.log(xml);
                reader.mapa = $("#mapaDiv").detach();
                $(xml).find('personaje').each(function () {
                    var nombre = $(this).find('nombre').first().text();
                    if (nombre == nombreNodo) {
                        reader.nodo = $(this);
                        $(".mainPanel").empty();
                        reader.crearElementoDentro("h2", reader.nodo.find('nombre').first().text(), ".mainPanel", "primerh2");
                        reader.crearElementoDentro("figure", "", ".mainPanel", "primerfigure");
                        var stringDatos = "<img src=\"" + reader.nodo.find('imagen').text() + "\" alt=\"" + "Imagen de " + reader.nodo.find('nombre').first().text() + "\" >";
                        $('#primerfigure').html(stringDatos);
                        reader.crearElementoDentro("h3", "Descripción", ".mainPanel");
                        reader.crearElementoDentro("p", reader.nodo.find("descripcion").first().text(), ".mainPanel", "descripcion");

                        if (reader.nodo.find("bendicion").length > 0) {
                            reader.crearElementoDentro("h3", "Bendiciones", ".mainPanel");
                            reader.crearElementoDentro("table", "", ".mainPanel", "tablabendiciones");
                            stringDatos = "<tr><th class=\"columnaNombre\">Nombre</th><th class=\"columnaDescripcion\">Efecto</th></tr>";
                            var bendicion = reader.nodo.find("bendicion").first();
                            while (bendicion.length > 0) {
                                stringDatos += "<tr><td>" + bendicion.find("nombre").first().text() + "</td><td> " + bendicion.find("efecto").first().text() + " </td></tr>";
                                bendicion = bendicion.next();
                            }
                            $('#tablabendiciones').html(stringDatos);
                        }

                        if (reader.nodo.find("combate").length > 0) {
                            reader.crearElementoDentro("h3", "Combate", ".mainPanel");
                            reader.crearElementoDentro("p", reader.nodo.find("combate").first().text(), ".mainPanel");
                        }

                        reader.crearElementoDentro("h3", "Notas", ".mainPanel");
                        reader.crearElementoDentro("p", reader.nodo.find("notas").first().text(), ".mainPanel");


                    }
                });
                $(xml).find('nivel').each(function () {
                    var nombre = $(this).find('nombre').first().text();
                    if (nombre == nombreNodo) {
                        reader.nodo = $(this);
                        $(".mainPanel").empty();
                        reader.crearElementoDentro("h2", reader.nodo.find('nombre').first().text(), ".mainPanel", "primerh2");
                        reader.crearElementoDentro("figure", "", ".mainPanel", "primerfigure");
                        var stringDatos = "<img src=\"" + reader.nodo.find('imagen').text() + "\" alt=\"" + "Imagen de " + reader.nodo.find('nombre').first().text() + "\" >";
                        $('#primerfigure').html(stringDatos);

                        stringDatos = "";
                        reader.crearElementoDentro("h3", "Trampas", ".mainPanel");
                        reader.crearElementoDentro("ul", "", ".mainPanel", "listatrampas");
                        var trampa = reader.nodo.find("trampa").first();
                        while (trampa.length > 0) {
                            stringDatos += "<li>" + trampa.text() + "</li>";
                            trampa = trampa.next();
                        }
                        $('#listatrampas').html(stringDatos);


                        reader.crearElementoDentro("h3", "Minijefes", ".mainPanel");
                        reader.crearElementoDentro("table", "", ".mainPanel", "tablaminijefes");
                        stringDatos = "<tr><th class=\"columnaNombre\">Nombre minijefe</th><th class=\"columnaDescripcion\">Descripción</th></tr>";
                        var minijefe = reader.nodo.find("minijefe").first();
                        while (minijefe.length > 0) {
                            stringDatos += "<tr><td>" + minijefe.find("nombre").first().text() + "</td><td> " + minijefe.find("descripcion").first().text() + " </td></tr>";
                            minijefe = minijefe.next();
                        }
                        $('#tablaminijefes').html(stringDatos);

                        reader.crearElementoDentro("h3", "Jefes", ".mainPanel");
                        reader.crearElementoDentro("table", "", ".mainPanel", "tablajefes");
                        stringDatos = "<tr><th class=\"columnaNombre\">Nombre Jefe</th><th class=\"columnaDescripcion\">Descripción</th></tr>";
                        var jefe = reader.nodo.find("jefe").first();
                        while (jefe.length > 0) {
                            stringDatos += "<tr><td>" + jefe.find("nombre").first().text() + "</td><td> " + jefe.find("descripcion").first().text() + " </td></tr>";
                            jefe = jefe.next();
                        }
                        $('#tablajefes').html(stringDatos);

                        reader.crearElementoDentro("h3", "Enemigos", ".mainPanel");
                        reader.crearElementoDentro("table", "", ".mainPanel", "tablaenemigos");
                        stringDatos = "<tr><th class=\"columnaNombre\">Nombre enemigo</th><th class=\"columnaDescripcion\">Descripción</th></tr>";
                        var enemigo = reader.nodo.find("enemigo").first();
                        while (enemigo.length > 0) {
                            stringDatos += "<tr><td>" + enemigo.find("nombre").first().text() + "</td><td> " + enemigo.find("descripcion").first().text() + " </td></tr>";
                            enemigo = enemigo.next();
                        }
                        $('#tablaenemigos').html(stringDatos);


                    }

                });
                $(xml).find('moneda').each(function () {
                    var nombre = $(this).find('nombre').first().text();
                    if (nombre == nombreNodo) {
                        reader.nodo = $(this);
                        $(".mainPanel").empty();
                        reader.crearElementoDentro("h2", reader.nodo.find('nombre').first().text(), ".mainPanel", "primerh2");
                        reader.crearElementoDentro("figure", "", ".mainPanel", "primerfigure");
                        var stringDatos = "<img src=\"" + reader.nodo.find('imagen').text() + "\" alt=\"" + "Imagen de " + reader.nodo.find('nombre').first().text() + "\" >";
                        $('#primerfigure').html(stringDatos);


                        reader.crearElementoDentro("h3", "Descripcion", ".mainPanel");

                        reader.crearElementoDentro("p", reader.nodo.find("descripcion").first().text(), ".mainPanel");


                        reader.crearElementoDentro("h3", "Obtención", ".mainPanel");
                        reader.crearElementoDentro("p", reader.nodo.find("obtencion").first().text(), ".mainPanel");

                        reader.crearElementoDentro("h3", "Usos", ".mainPanel");
                        reader.crearElementoDentro("p", reader.nodo.find("usos").first().text(), ".mainPanel");
                    }

                });
                $(xml).find('miscelaneo').each(function () {
                    var nombre = $(this).find('nombre').first().text();
                    if (nombre == nombreNodo) {
                        reader.nodo = $(this);
                        $(".mainPanel").empty();
                        reader.crearElementoDentro("h2", reader.nodo.find('nombre').first().text(), ".mainPanel", "primerh2");
                        reader.crearElementoDentro("figure", "", ".mainPanel", "primerfigure");
                        var stringDatos = "<img src=\"" + reader.nodo.find('imagen').text() + "\" alt=\"" + "Imagen de " + reader.nodo.find('nombre').first().text() + "\" >";
                        $('#primerfigure').html(stringDatos);


                        reader.crearElementoDentro("h3", "Descripcion", ".mainPanel");

                        reader.crearElementoDentro("p", reader.nodo.find("descripcion").first().text(), ".mainPanel");

                        reader.crearElementoDentro("h3", "Obtención", ".mainPanel");

                        reader.crearElementoDentro("p", reader.nodo.find("obtencion").first().text(), ".mainPanel");

                        reader.crearElementoDentro("h3", "Notas", ".mainPanel");

                        reader.crearElementoDentro("p", reader.nodo.find("notas").first().text(), ".mainPanel");


                        if (reader.nodo.find("mejora").length > 0) {
                            reader.crearElementoDentro("h3", "Mejoras", ".mainPanel");
                            reader.crearElementoDentro("table", "", ".mainPanel", "tablamejoras");
                            stringDatos = "<tr><th class=\"columnaNombre\">Nombre</th><th class=\"columnaDescripcion\">Efecto</th></tr>";
                            var mejora = reader.nodo.find("mejora").first();
                            while (mejora.length > 0) {
                                stringDatos += "<tr><td>" + mejora.find("nombre").first().text() + "</td><td> " + mejora.find("descripcion").first().text() + " </td></tr>";
                                mejora = mejora.next();
                            }
                            $('#tablamejoras').html(stringDatos);
                        }



                    }

                });
                $(xml).find('botin').each(function () {
                    var nombre = $(this).find('nombre').first().text();
                    if (nombre == nombreNodo) {
                        reader.nodo = $(this);
                        $(".mainPanel").empty();
                        reader.crearElementoDentro("h2", reader.nodo.find('nombre').first().text(), ".mainPanel", "primerh2");
                        reader.crearElementoDentro("figure", "", ".mainPanel", "primerfigure");
                        var stringDatos = "<img src=\"" + reader.nodo.find('imagen').text() + "\" alt=\"" + "Imagen de " + reader.nodo.find('nombre').first().text() + "\" >";
                        $('#primerfigure').html(stringDatos);


                        reader.crearElementoDentro("h3", "Descripcion", ".mainPanel");

                        reader.crearElementoDentro("p", reader.nodo.find("descripcion").first().text(), ".mainPanel");


                        reader.crearElementoDentro("h3", "Obtención", ".mainPanel");
                        reader.crearElementoDentro("p", reader.nodo.find("obtencion").first().text(), ".mainPanel");

                        reader.crearElementoDentro("h3", "Usos", ".mainPanel");
                        reader.crearElementoDentro("p", reader.nodo.find("usos").first().text(), ".mainPanel");
                    }
                });
                $(xml).find('recuerdo').each(function () {
                    var nombre = $(this).find('nombre').first().text();
                    if (nombre == nombreNodo) {
                        reader.nodo = $(this);
                        $(".mainPanel").empty();
                        reader.crearElementoDentro("h2", reader.nodo.find('nombre').first().text(), ".mainPanel", "primerh2");
                        reader.crearElementoDentro("figure", "", ".mainPanel", "primerfigure");
                        var stringDatos = "<img src=\"" + reader.nodo.find('imagen').text() + "\" alt=\"" + "Imagen de " + reader.nodo.find('nombre').first().text() + "\" >";
                        $('#primerfigure').html(stringDatos);


                        reader.crearElementoDentro("h3", "Descripcion", ".mainPanel");

                        reader.crearElementoDentro("p", reader.nodo.find("descripcion").first().text(), ".mainPanel");


                        reader.crearElementoDentro("h3", "Efecto", ".mainPanel");
                        reader.crearElementoDentro("p", reader.nodo.find("efecto").first().text(), ".mainPanel");

                        reader.crearElementoDentro("h3", "Mensaje", ".mainPanel");
                        reader.crearElementoDentro("p", reader.nodo.find("mensaje").first().text(), ".mainPanel");
                    }

                });
                $(xml).find('arma').each(function () {
                    var nombre = $(this).find('nombre').first().text();
                    if (nombre == nombreNodo) {
                        reader.nodo = $(this);
                        $(".mainPanel").empty();
                        reader.crearElementoDentro("h2", reader.nodo.find('nombre').first().text(), ".mainPanel", "primerh2");
                        reader.crearElementoDentro("figure", "", ".mainPanel", "primerfigure");
                        var stringDatos = "<img src=\"" + reader.nodo.find('imagen').text() + "\" alt=\"" + "Imagen de " + reader.nodo.find('nombre').first().text() + "\" >";
                        $('#primerfigure').html(stringDatos);

                        reader.crearElementoDentro("h3", "Descripcion", ".mainPanel");
                        reader.crearElementoDentro("p", reader.nodo.find("descripcion").first().text(), ".mainPanel");

                        reader.crearElementoDentro("h3", "Estilo de combate", ".mainPanel");
                        reader.crearElementoDentro("p", reader.nodo.find("estilodecombate").first().text(), ".mainPanel");

                        reader.crearElementoDentro("h3", "Estadísticas", ".mainPanel");
                        reader.crearElementoDentro("p", reader.nodo.find("estadisticas").first().text(), ".mainPanel");

                        if (reader.nodo.find("aspecto").length > 0) {
                            reader.crearElementoDentro("h3", "Aspectos", ".mainPanel");
                            reader.crearElementoDentro("table", "", ".mainPanel", "tablaaspectos");
                            stringDatos = "<tr><th class=\"columnaNombre\">Nombre</th><th class=\"columnaDescripcion\">Descripción</th></tr>";
                            var aspecto = reader.nodo.find("aspecto").first();
                            while (aspecto.length > 0) {
                                stringDatos += "<tr><td>" + aspecto.find("nombre").first().text() + "</td><td> " + aspecto.find("descripcion").first().text() + " </td></tr>";
                                aspecto = aspecto.next();
                            }
                            $('#tablaaspectos').html(stringDatos);
                        }
                    }

                });
                reader.mostrarDatosUsuario();
                reader.guardarDatosUsuario(nombreNodo, (new Date(Date.now())).toUTCString());
            }
        });
    }


    obtenerJson() {
        $.ajax({
            type: "GET",
            url: "https://api.rawg.io/api/games/hades-2018?key=ffe741fd07bf491ab09b4b9746f13036",
            dataType: "json",
            success: function (json) {
                console.log(json);
                reader.mapa = $("#mapaDiv").detach();
                $(".mainPanel").empty();
                reader.crearElementoDentro("h2", "Informacion API RAWG", ".mainPanel", "primerh2");
                reader.crearElementoDentro("h3", "Géneros del juego", ".mainPanel");
                reader.crearElementoDentro("ul", "", ".mainPanel", "listageneros");
                var stringDatos = "";
                json.genres.forEach(genre =>
                    stringDatos += "<li>" + genre.name + "</li>"
                );

                $('#listageneros').html(stringDatos);

                reader.crearElementoDentro("h3", "Metacritic", ".mainPanel");
                reader.crearElementoDentro("p", "Nota Metacritic: " + json.metacritic, ".mainPanel");
                reader.crearElementoDentro("p", "Plataformas: ", ".mainPanel");
                reader.crearElementoDentro("ul", "", ".mainPanel", "listaplataformas");
                stringDatos = "";
                json.parent_platforms.forEach(platform =>
                    stringDatos += "<li>" + platform.platform.name + "</li>"
                );
                $('#listaplataformas').html(stringDatos);

                reader.crearElementoDentro("p", "Número de reviews: " + json.reviews_count, ".mainPanel");

                reader.crearElementoDentro("h3", "Reddit", ".mainPanel");
                reader.crearElementoDentro("figure", "", ".mainPanel", "primerfigure");
                var stringDatos = "<img src=\"" + json.reddit_logo + "\" alt=\"" + "Imagen de reddit" + "\" >";
                $('#primerfigure').html(stringDatos);

                reader.crearElementoDentro("p", "Nombre del subreddit: " + json.reddit_name, ".mainPanel");
                reader.crearElementoDentro("p", "Descripción del subreddit: " + json.reddit_description, ".mainPanel");

                reader.mostrarDatosUsuario();
                reader.guardarDatosUsuario("Informacion RAWG Hades", (new Date(Date.now())).toUTCString());
            }
        });
    }

    mostrarDatosUsuario() {
        reader.crearElementoDentro("h3", "Geolocalización", ".mainPanel");
        reader.mapa.appendTo(".mainPanel");
        reader.crearElementoDentro("h3", "Datos de usuario", ".mainPanel");
        var ultimafecha = "Sin conexion previa";
        if (typeof localStorage.fechaAcceso !== 'undefined') {
            ultimafecha = localStorage.fechaAcceso;
        }
        var ultimoArticulo = "Sin conexion previa";
        if (typeof localStorage.ultimoArticulo !== 'undefined') {
            ultimoArticulo = localStorage.ultimoArticulo;
        }

        var latitud = "No ha accedido a aportar su ubicación";
        if (typeof localStorage.latitud !== 'undefined') {
            latitud = localStorage.latitud;
        }

        var longitud = "No ha accedido a aportar su ubicación";
        if (typeof localStorage.longitud !== 'undefined') {
            longitud = localStorage.longitud;
        }

        var tiempoLeyendo = 0;
        if (typeof localStorage.tiempoLeyendo !== 'undefined') {
            console.log(localStorage.tiempoLeyendo);
            tiempoLeyendo = ((Date.now() - localStorage.tiempoLeyendo) / 1000).toFixed(2);
        }

        reader.crearElementoDentro("p", "Última conexion: " + ultimafecha, ".mainPanel");
        reader.crearElementoDentro("p", "Ultimo articulo visitado: " + ultimoArticulo, ".mainPanel");
        reader.crearElementoDentro("p", "Ultimo latitud guardada: " + latitud, ".mainPanel");
        reader.crearElementoDentro("p", "Ultimo longitud guardada: " + longitud, ".mainPanel");
        reader.crearElementoDentro("p", "Tiempo en el anterior articulo: " + tiempoLeyendo + " segundos", ".mainPanel");

    }
    crearElementoDentro(tipoElemento, texto, insertarDentroDe, id) {
        var elemento = document.createElement(tipoElemento);
        elemento.innerHTML = texto;
        if (id)
            elemento.id = id;
        $(elemento).appendTo(insertarDentroDe);
    }


    guardarDatosUsuario(nombreArticulo, fechaAcceso) {
        localStorage.setItem("ultimoArticulo", nombreArticulo);
        localStorage.setItem("fechaAcceso", fechaAcceso);
        localStorage.setItem("tiempoLeyendo", Date.now());
    }

}
class MapaDinamico {

    initMap() {
        return function () {
            var position = {
                lat: 43.3672702,
                lng: -5.8502461
            };
            var mapa = document.getElementById('mapa');
            mapa.style.height = "20em";
            mapa.style.width = "30em";
            var mapaGeoposicionado = new google.maps.Map(mapa, {
                zoom: 8,
                center: position,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });

            var infoWindow = new google.maps.InfoWindow;
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function (position) {
                    var pos = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    };
                    localStorage.setItem("latitud", position.coords.latitude);
                    localStorage.setItem("longitud", position.coords.longitude);

                    infoWindow.setPosition(pos);
                    infoWindow.setContent('Posición actual');
                    infoWindow.open(mapaGeoposicionado);
                    mapaGeoposicionado.setCenter(pos);
                }, function () {
                    this.handleLocationError(true, infoWindow, mapaGeoposicionado.getCenter());
                });
            } else {
                this.handleLocationError(false, infoWindow, mapaGeoposicionado.getCenter());
            }
        }
    }

    handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
            'Error: Ha fallado la geolocalización' :
            'Error: Su navegador no soporta geolocalización');
        infoWindow.open(mapaGeoposicionado);
    }

}

var reader = new MyXMLReader();
var mapaDinamico = new MapaDinamico().initMap();