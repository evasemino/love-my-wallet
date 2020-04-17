$(document).ready(function () {
    $('.btn btn-secondary agregar')
        .on(
            'click',
            function () {
                var Duplicarpago =
                    <div class="pago__container-primary row">
                        <p class="col-6 pago__description">Fibertel</p>
                        <button type="button" class="col-6 btn btn-secondary pagar">Pagar</button>
                    </div>

                    ;
                $('.btn btn-secondary agregar').append(Duplicarpago);
            },
        );
});

