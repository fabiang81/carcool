(function(){
    'use strict';
    var results = [];

    function filterCars(make, model, budget, transmision){
        results = [];
        for(var i=0; i<carsList.length; i++){
            var minus20perc = carsList[i].price * 0.20;
            var plus20perc = carsList[i].price * 1.2;
            if(make === carsList[i].make && model == carsList[i].year && 
                transmision === carsList[i].transmision && (budget >= minus20perc && budget <= plus20perc)){
                results.push(carsList[i]);
            }
        }
        return results;
    }

    function showFilteredCars(){
            let make = document.getElementById("makeSelect").value;
            let year = document.getElementById("yearSelect").value;
            let budget = parseInt(document.getElementById("budget").value);
            let transmision = document.getElementById("transmisionSelect").value;

            let filtro = filterCars(make, year, budget, transmision);

            // Preparo el elemento donde se mostrará la información del filtro de carros
            document.getElementById('carsList-container').innerHTML="";
            let listaCarros = document.getElementById('carsList-container');
            let tmpHTML="";

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
    }

    document.getElementById("sendButton").addEventListener("click", function(){
        showFilteredCars();
        event.preventDefault();
    });

    /* Cargamos una preselección de contenido al entrar a la página*/
    filterCars('Chevrolet',2020,60000,'auto');
    showFilteredCars();

})();