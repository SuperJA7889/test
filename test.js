var rngButton = document.getElementById("rng")
var numberText = document.getElementById("number")

function wait(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
}
rngButton.addEventListener("click",async function()
{
    var n = 0
    numberText.style.color = "black"
    while (n < 20)
    {
        numberText.innerHTML = Math.ceil(Math.random() * 100).toString();
        n = n + 1;
        console.log("a")
        await wait(50)
    }
     numberText.style.color = "green"
    numberText.innerHTML = Math.ceil(Math.random() * 100).toString()
})