function toggleShowBal(){const el=document.querySelector("strong");el.innerHTML=("NGN 23,000");
el.style.color=("green");
                        }


function withdrawal(){
  const message= document.querySelector("span");
  message.innerHTML="Note : Only palmpay and Opay is available for withdrawal";
  message.style.color="red";
}


function cont(){const mess= document.getElementById("mess");
                mess.innerHTML="Account not activated, Click the deposit button above";
mess.style.color="red";


let amount= 23000;
const input = document.getElementById("choose").value;
                
if(input>amount){
  window.alert("Amount is higher than Wallet Balance");
  mess.innerHTML="Amount is higher than wallet balance";
} else{
  window.alert("okay");
}
               }
