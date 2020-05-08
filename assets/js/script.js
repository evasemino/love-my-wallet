$(document).ready(function () {
  $(".agregar-servicio").on(
    "click",

    function () {
      var lementoAPagar = `
                <br> 

                <li class="list-group-item cuenta__container py-3 my-3">
                <article class="servicio d-flex justify-content-between p-2 bd-highlight">
                <div>
                <h2 class="text-uppercase servicio__nombre">Afip</h2>
                <h4 class="servicio__precio">Monto: $2500</h4>
                <h4 class="servicio__vencimiento">Vencimiento: 20/05/20 </h4>
            </div>
            <div class="tax-action">
                  <a href="pago.html" class="btn btn-primary agregar text-uppercase">pagar</a>
                </div>
              </article>
                   
                
            </li> 
          `;
      $(".servicios-impagos").append(lementoAPagar);
    }
  );
});
