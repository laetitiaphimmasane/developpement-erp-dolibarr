var url = "http://localhost/dolibarr/api/index.php/products/"
    var api = "?DOLAPIKEY=test"
    var html = document.querySelector("#produit")
    var numProduit = location.search.substring(1).split("?")[0].split("=")[1];


    fetch(url + numProduit + api)
        .then(response => response.json())
        //.then(rep => console.log(rep))
        .then(data => {
            html.innerHTML= `
            <div class="container">
            <div class="card text-center">
                <div class="card-header">
                ${data.label}
                </div>
                <div class="card-body">
                    <h5 class="card-title">REF : ${data.ref} ${data.label}</h5>
                    <div class="card-text text-justify" style="padding:1%">
                        <div class="container">
                            <div class="row">
                                <img class="col-6" src="${data.url}">
                                <div class="col-6">
                                    <p> ${data.description} </p>
                                    <p class="float-right"> ${data.price_base_type} € (TVA : ${data.tva_tx} %)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-footer text-muted">
                Last update : ${data.date_creation}
                </div>
            </div>
            </div>
            `
        })

        .catch((err) => console.log("Cannot get data" + err));