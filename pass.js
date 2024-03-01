const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet ="abcdefghijklmnopqrstuvwxyz";
const numberSet = "1234567890";
const symbolSet ="!@#$%^&*()";

//selectors
const passBox =document.getElementById("big-box")
const totalChar = document.getElementById("Pass")
const upperInput = document.getElementById("uppercase")
const lowerInput= document.getElementById("lowercase")
const numberInput= document.getElementById("numbers")
const symbolInput = document.getElementById("symbols")

const getRandomData = (dataSet) =>{
    return dataSet[Math.floor(Math.random()*dataSet.length)]
}

const generatePassword = (password ="") => {
    if (upperInput.checked){
        password += getRandomData(upperSet)
    }
    console.log(password)
}
document.getElementById("btn").addEventListener(
"click",
function(){
generatePassword();
}
)