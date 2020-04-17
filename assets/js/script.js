$(document).ready(function () {
    $('.pago__primary-button')
        // Reciba un 'click'
        .on(
            'click',
            // Ejecutar la siguiente función
            function () {
                // Aquí no hace falta usar el e.preventDefault, porque es un botón que al
                // hacerle click no tiene un comportamiento por defecto, salvo que sea un
                // botón con type="submit"

                // Guardo en una variable el elemento a clonar
                var Duplicarpago =
                    <li class="list-group-item">
                        <article class="d-flex justify-content-between p-2 bd-highlight">
                            <div class="text-uppercase tax-name">ECOGAS</div>
                            <div class="tax-price">$592</div>
                            <div class="tax-action">
                                <a href="#" class="btn btn-primary text-uppercase">pagar</a>
                            </div>
                        </article>
                    </li>
                    ;
                $('.pago__primary-button').append(Duplicarpago);
            },
        );
    // Fin función Clonar Elemento
});
  // Fin función DocumentReady
