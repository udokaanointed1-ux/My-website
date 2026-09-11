function toggleShowBal(){const el=document.querySelector("strong");el.innerHTML=("NGN 23,000");
el.style.color=("green");
                        }
function withdrawal(){
  const message= document.querySelector("span");
  message.innerHTML="Note : Only palmpay and Opay is available for withdrawal";
  message.style.color="red";
}


 function openUp(){
   const ump= document.querySelector("#indi");
   ump.innerHTML="Account not activated, Activate to Mine";
   ump.style.color="red";
  
 }
