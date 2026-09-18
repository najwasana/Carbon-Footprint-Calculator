function calculate() {

let electricity = Number(document.getElementById("electricity").value);  
let driving = Number(document.getElementById("driving").value);  
let flying = Number(document.getElementById("flying").value);  
let eating = Number(document.getElementById("eating").value);  

let total =  
    (electricity * 0.82) +  
    (driving * 0.21) +  
    (flying * 90) +  
    (eating * 5);  

document.getElementById("result").innerHTML =  
    "🌍 Your Carbon Footprint: " + total.toFixed(2) + " kg CO₂";  

let precautionHTML = "<div class='precaution-container'>";  

if (total < 500) {  
    precautionHTML += `  
    <div class="precaution-card low">  
        <div class="icon">🌱</div>  
        <p>Great job! Keep saving electricity.</p>  
    </div>  
    <div class="precaution-card low">  
        <div class="icon">🚶</div>  
        <p>Continue using eco-friendly transport.</p>  
    </div>`;  
}  
else if (total < 1000) {  
    precautionHTML += `  
    <div class="precaution-card medium">  
        <div class="icon">⚠️</div>  
        <p>Reduce vehicle usage.</p>  
    </div>  
    <div class="precaution-card medium">  
        <div class="icon">🍃</div>  
        <p>Consume more plant-based food.</p>  
    </div>`;  
}  
else {  
    precautionHTML += `  
    <div class="precaution-card high">  
        <div class="icon">🚨</div>  
        <p>Urgently reduce electricity consumption.</p>  
    </div>  
    <div class="precaution-card high">  
        <div class="icon">✈️</div>  
        <p>Avoid unnecessary air travel.</p>  
    </div>`;  
}  

precautionHTML += "</div>";  
document.getElementById("precautions").innerHTML = precautionHTML;

}