const msg = document.getElementById('msg')
const btnOla = document.getElementById('btnOla')

btnOla.addEventListener('click', f);
function f() {
    msg.textContent = 'Olá';
};
