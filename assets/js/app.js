//Kredi kartına yapılan maskeleme işlemleri
let cc_number = document.querySelector(".form_card-number input");
let exp = document.querySelector('#exp');
let cvv = document.querySelector('#cvv');
let paymentSystem = document.querySelector('.paymanent-img img')
new Inputmask("9999 9999 9999 9999", {"placeholder": ""}).mask(cc_number);
new Inputmask("99/99", {"placeholder": ""}).mask(exp);
new Inputmask("999", {"placeholder": ""}).mask(cvv);

//input eventi ile kart bloğuna işlemler
document.querySelector("#creditcard").addEventListener('input', (e) => {
   document.querySelector(".card-no").innerText = e.target.value;
   
   //Mastercard 5 ile başlıyor, Visa 4 ile
   e.target.value[0] == "4" ? paymentSystem.src = "./assets/images/visa.svg" : e.target.value[0] == "5" && (paymentSystem.src = "./assets/images/mastercard.svg");
})

document.querySelector("#cardholder_name").addEventListener('input', (e) => {
   document.querySelector(".card-holders-name").innerText = e.target.value;
})

document.querySelector("#exp").addEventListener('input', (e) => {
   document.querySelector(".card-date").innerText = e.target.value;
})
