let imgBox = document.querySelector(".imgBox");
let qrImage = document.querySelector("#qr-image");
let qrText = document.querySelector("#qr-text");
let heading = document.querySelector(".heading");

function generateQR(){
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        setTimeout(() => {
            imgBox.classList.add("show-img");
            heading.style.display = "none";
        }, 1000);
    } else {
        qrText.classList.add('error');
        setTimeout(() => {
            qrText.classList.remove('error');
        }, 1000);
    }
}
