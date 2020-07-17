(function(){
    'use strict';

    var results = [];

    function filterCars(make, model, budget, transmision){
        for(var i=0; i<carsList.length; i++){
            var downPayment = carsList[i].price * 0.20;
            if(make === carsList[i].make && model == carsList[i].year && 
                transmision === carsList[i].transmision && budget > downPayment){
                results.push(carsList[i]);
            }
        }
        return results;
    }

    document.getElementById("sendButton").addEventListener("click", function(){
        let make = document.getElementById("makeSelect").value;
        let year;
        let radio1 = document.getElementById("yearRadioButton1");
        let radio2 = document.getElementById("yearRadioButton2");
        if(radio1.checked){
            year = radio1.value;
        }else if(radio2.checked){
            year = radio2.value;
        }
        let budget = document.getElementById("budget").value;
        let transmision = document.getElementById("transmisionSelect").value;

        var filtro = filterCars(make, year, budget, transmision);
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

    });


})();