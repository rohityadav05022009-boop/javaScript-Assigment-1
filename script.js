let input = document.getElementById('url');
let btn = document.getElementById('btn');
let qr = document.getElementById('qr');
let error =document.getElementById('error');

function generator(){
    let st = input.value.trim();

    if (st === "") {
    error.innerText = "Invalid Input";
    error.style.color = "red";
    qr.style.display = "none";
    return;
}

    error.innerText = "";

    // let output = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example' + st;
       let output = 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=' + encodeURIComponent(st);
    qr.src = output;

    qr.style.display = 'block';

}