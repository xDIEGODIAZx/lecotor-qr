
// genera el codigo QR
//nombro a la funcion
function generar_qr() {
    //variable que genera el codigo QR
    var qrcode= new QRCode("cont_qr", {
        text: document.getElementById('aqr').value,
        width: 480,
        height: 480,
        colorDark: "#000000",
        colorLight: "#ffffff", //color de fondo
        correctLevel: QRCode.CorrectLevel.H //correcciones
    });
}

function convertir_sin_opc() {
new QRCode(document.getElementById('cont_qr'), 
document.getElementById('aqr').value) //imput aqr toma la informacion y toma el valor que contenga
}
//funcion para descargar QR
function guardar_QR(){
    const qeleem = document.querySelector('#cont_qr canvas')
    const dlink = document.getElementById('lnk_desc')
    var imagen = qeleem.toDataURL("image/png").replace("image/png", //elegimos guardar la imagen como png
    "image/octet-stream")
    dlink.setAttribute('href', imagen);
    dlink.setAttribute('download' , 'miQRCODE.png');//nombre para descargar la imagen que se ejecuta automaticamente
    dlink.click();
}
//funcion limpiar
function limpiar () {
    document.getElementById('cont_qr').innerHTML = "";//dejamos un valor nulo o vacio al final para que se limpie cont_qr
}
