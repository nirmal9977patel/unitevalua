
const url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`;

async function getdata(){
   try{
    let res= await fetch(url);
    let data= await res.json();
    console.log(data);
    appendvoucher(data);
   }
   catch(err){
     console.log(err)
   }

}
getdata()

function appendvoucher(nirmal){
    console.log(nirmal);
    nirmal.forEach(function(el){
        let box= document.createElement("div");
        let h3=document.createElement("h4");
        h3.innerText=el.Name;
        let image=document.createElement("img");
        image.src=el.image;
        let price=document.createElement("h4");
        price.innerText=el.Price;
        let btn=document.createElement("button");
        btn.innerText="Buy now";
        btn.setAttribute("class","buy_voucher")
        btn.addEventListener("click",function(){
             localStorage.setItem("purchase",JSON.stringify(el))
             window.location.href="purchase.html";
        });

        box.append(image,h3,price,btn);
        document.querySelector("#voucher_list").append(box);

    });
}
