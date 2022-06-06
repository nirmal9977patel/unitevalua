

let balance= localStorage.getItem("usre")||0;

document.querySelector("#amount").innerHTML=balance;
document.querySelector("#amount")
    let  amount = document.querySelector("#amount").value;

    balance= +balance + +amount;
    document.querySelector("#amount").innerHTML=balance;
    localStorage.setItem("user",JSON.stringify(amount));
    window.location.reload();   


   


