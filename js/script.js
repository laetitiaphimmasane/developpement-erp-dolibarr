var url ="http://localhost/dolibarr/api/index.php/products?sortfield=t.ref&sortorder=ASC&limit=100&DOLAPIKEY=test"
var html = document.querySelector("#produits")

fetch(url)
    .then(response => response.json())
    .then(data => {
        data.forEach(el => {
            html.innerHTML += `
            <div class="accordion" id="accordionProduct">
            <div class="card">
                <div class="card-header" id="headingProduct" style="background-color: teal;">
                    <h5 class="mb-0">
                    <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseProduct" aria-expanded="true" aria-controls="collapseProduct" style="color: white">
                        (${el.id}) ${el.label}
                    </button>
                    </h5>
                </div>
            
                <div id="collapseProduct" class="collapse show" aria-labelledby="headingProduct" data-parent="#accordionProduct">
                    <div class="card-body">
                        <div> ${el.description}
                        ${el.price} € <br>
                    </div>
                    <br>

                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                    <a class="float-right" style="color:black;" href="./produit.html?id=${el.id}">Détails</a>
                    </div>
                </div>
            </div>
            </div>
            `
        });
    })
    .catch((err) => console.log("Cannot get data" + err))
