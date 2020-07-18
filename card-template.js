function createCarCard(make, model, transmision, colors, price, year, bodystyles) {
    // Generamos una etiqueta por cada color del carro
    var type = "";
    if (colors.length > 1) { //Si el carro tiene más de un color... iteramos
        for (var typecount = 0; typecount < colors.length; typecount++) {
            type = type + `<span class='badge tag-${colors[typecount]} float-right p-2 mx-1'>${colors[typecount]}</span>`;
        }
    } else { //Si el carro tiene un solo color, lo mostramos
        type = type + `<span class='badge tag-${colors[0]} float-right p-2 mx-1'>${colors[0]}</span>`;
    }

    var bodylist = "";
    for (var index = 0; index < bodystyles.length; index++) {
        bodylist = bodylist + `<span class='badge tag-${bodystyles[index]} float-right p-2 mx-1'>${bodystyles[index]}</span>`;
    }

    var html = `
    <div class='col-md-1-12'>
        <div class='card bg-light car-card m-3'>
            <div class='card-header p-0 bg-primary-carcool'>
                <div class='row m-0'>
                    <div class='col-8 my-auto'>
                        <span class='car-make'>${make}</span> 
                        <span class='car-model'>${model}</span>
                    </div>
                    <div class='col-4 cropped'>
                        <img src='./img/logos/${make}.png' alt='${make}'>
                    </div>
                </div>
            </div>
            <div class='card-body'>
                <div class='row'>
                    <div class='col-12'>
                    ${type}
                    </div>
                </div>
                <img class='car-picture' src='./img/ghostVehicleLarge.jpg' alt='${model}'>
            </div>
            <div class='card-footer text-muted p-0'>
                <div class='row m-0'>
                    <div class='col-4 border-right text-center px-1'>
                        <span class='year-tag-title text-primary-carcool'>Year:</span>
                        <span class='year-tag-value'>${year}</span>
                    </div>
                    <div class='col-4 border-right text-center px-1'>
                        <span class='price-tag-title text-primary-carcool'>Price:</span>
                        <span class='price-tag-value'>${price}</span>
                    </div>
                    <div class='col-4 border-right text-center px-1'>
                        <span class='transmission-tag-title text-primary-carcool'>Trans.:</span>
                        <span class='transmission-tag-value'>${transmision}</span>
                    </div>
                    <div class='col-12 border-right border-top text-center px-2 d-flex justify-content-between'>
                        <span class='bodyStyles-tag-title text-primary-carcool'>Body Styles:</span>
                        <span class='bodyStyles-tag-value'>${bodylist}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
return html;
}