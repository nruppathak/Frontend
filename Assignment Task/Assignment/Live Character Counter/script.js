const textBox = document.getElementById("textBox");
const counter = document.getElementById("counter");

const maxChars = 100;

textBox.addEventListener("input", () => {
    let remaining = maxChars - textBox.value.length;

   
    counter.textContent = `Characters left: ${remaining}`;

    
    if (remaining > 60) {
        counter.style.color = "green";  
    } 
    else if (remaining > 20) {
        counter.style.color = "orange"; 
    } 
    else {
        counter.style.color = "red";    
    }

   
    if (remaining < 0) {
        textBox.value = textBox.value.slice(0, maxChars);
    }
});
