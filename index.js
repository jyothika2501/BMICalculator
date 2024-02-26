function computeBMI(){
    let heightinMeters = [document.getElementById("height").value]/100;
    let weight = document.getElementById("weight").value;

    
    if(heightinMeters == "") {
        alert("Please enter your height");
    }
    else if(weight == "") {
        alert("Please enter your weight");
    }
    if(heightinMeters == "" && weight == ""){
        alert("Please enter your height and weight");
    }

    // bmi formula: weight(kq)/square of [height(in m)]

    let bmi = (weight)/ (heightinMeters ** 2);
    console.log(heightinMeters);
    console.log(weight);
    console.log(bmi);

    //displaying bmi in input field
    document.getElementById("bmi").value = bmi;
    
    document.getElementById("output").innerHTML = "Weight Condition : " + weightRanges(bmi);
}

function weightCondition(bmi) { 
    if(bmi < 18.5){
        return "underweight";
    }
    else if(18.5 < bmi && bmi < 24.9){
        return "healthy weight"
    }
    else if(25.0 < bmi && bmi < 29) {
        return "overweight";
    }
    else if(bmi > 30.0){
        return "obese";
    }
}