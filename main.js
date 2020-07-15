(function(){
    'use strict';

    var make;
    var model;
    var budget;
    var transmision;

    var results = [];

    function filterCars(make, model, budget, transmision){
        for(var i=0; i<carsList.length; i++){
            var downPayment = carsList[i].price * 0.20;
            if(make === carsList[i].make && carsList[i].model.includes(model) && 
                transmision === carsList[i].transmision && budget > downPayment){
                results.push(carsList[i]);
            }
        }
        return results;
    }

    //Cambia los valores de entrada aquí para probar
    console.log(filterCars("Chevrolet", "Silverado", 20000, "manual"));
    var filtro = filterCars("Chevrolet", "Silverado", 20000, "manual");

    // Preparo el elemento donde se mostrará la información del filtro de carros
    var listaCarros = document.getElementById('carsList-container');
    listaCarros.innerHTML="";
    var tmpHTML="";

    // Recorrer arreglo de carros filtrados
    for (var index = 0; index < filtro.length; index++) {
        var unAuto = filtro[index];
        var fMake = unAuto.make;
        var fModel = unAuto.model;
        var fTransmision = unAuto.transmision;
        var fColors = unAuto.colors;
        var fPrice = unAuto.price;
        var fYear = unAuto.year;    
        var fBodystyles = unAuto.body_styles;

        //Creo una tarjeta y la guardo dentro del HTML a mostrar
        tmpHTML = tmpHTML + createCarCard(fMake, fModel, fTransmision, fColors, fPrice, fYear, fBodystyles);
    }
    //Coloco todo el contenido generado en el HTML
    listaCarros.innerHTML=tmpHTML;

})();