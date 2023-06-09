
let form = document.querySelector('#button--form');
    form.addEventListener('click', ()=>  {
        alerta();
});
function alerta(){
    Swal.fire({
        title: 'Hola',
        icon: 'success',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Guardar contraseña',
        denyButtonText: `No guardar contraseña`,
        }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire('Guardado!', '', 'success')
        } else if (result.isDenied) {
            Swal.fire('No se a guardado', '', 'info')
        }
    })
};
