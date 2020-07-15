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

    var html = `
    <div class='col-md-1-12'>
        <div class='card bg-light car-card m-3'>
            <div class='card-header p-0 bg-info'>
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
                <img class='pokepicture' src='tmp.png' alt='${model}'>
            </div>
            <div class='card-footer text-muted p-0'>
                <div class='row m-0'>
                    <div class='col-4 border-right text-center'>
                        <span class='hp-tag-title'>Year:</span>
                        <span class='hp-tag-value'>${year}</span>
                    </div>
                    <div class='col-4 border-right text-center'>
                        <span class='atk-tag-title'>Price:</span>
                        <span class='atk-tag-value'>${price}</span>
                    </div>
                    <div class='col-4 border-right text-center'>
                        <span class='def-tag-title'>Transmision:</span>
                        <span class='def-tag-value'>${transmision}</span>
                    </div>
                    <div class='col-12 border-right border-top text-center'>
                        <span class='spd-tag-title'>Body Styles:</span>
                        <span class='spd-tag-value'>${bodystyles}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
return html;
}