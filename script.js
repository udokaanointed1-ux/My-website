// A fake list of existing accounts (In reality, this is a secure database)
       

const existingAccounts =  ["udokaanointed1@gmail.com"];
const existingPasswords =[ "123456" ];
        function checkAccount() {
            const inputVal = document.getElementById("userEmail").value;
            const message = document.getElementById("message");
const pass= document.getElementById("password").value;
            // Check if email exists in the list
            if (existingAccounts.includes(inputVal)&& existingPasswords.includes(pass)) {
                // Allow access (Redirect to the protected webpage)
                window.location.href = "wallet.html"; 
            } else {
                // Deny access
                message.textContent = "No account found with this email.";
              message.style.color="red";
        }
        

if (existingPasswords.includes(pass)){
  alert("Login successful....");

} else{
  alert("Wrong password");
  message.innerHTML="Wrong password , not identified";
window
}
        }
  


