let amount= localStorage.getItem("amount");
document.querySelector("#wallet").innerHTML=amount;

let vouchers=JSON.parse(localStorage.getItem("voucher_list"));

let box=document.createElement("div");
let img=document.createElement("img");
img.src=vouchers.image;

let h4= document.createElement("h4");
h4.innerHTML=vouchers.name;

let price= document.createElement("h4");
h4.innerHTML=vouchers.price;

box.append(img,h4,price);
purchase_vouchers.append(box);