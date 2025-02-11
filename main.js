document.addEventListener("DOMContentLoaded", function () {
  let Gender = "";
  let Height = 0;
  let Weight = 0;
  let isMetric = false;
  let isImperial = true;

  document.querySelector(".Metric").addEventListener("click", function () {
    // Toggle the "clicked" class on the Metric button
    this.classList.toggle("clicked");
    document.querySelector(".HeaderHeight").innerText = `Your height in Cm`;
    document.querySelector(".HeaderWeight").innerText = `Your weight in Kg`;
    isMetric = true;
    isImperial = false;

    // Remove the "clicked" class from the Imperial button
    document.querySelector(".Imperial").classList.remove("clicked");
  });

  document.querySelector(".Imperial").addEventListener("click", function () {
    // Toggle the "clicked" class on the Imperial button
    this.classList.toggle("clicked");
    document.querySelector(".HeaderHeight").innerText = `Your height in inches`;
    document.querySelector(".HeaderWeight").innerText = `Your weight in lbs`;
    isMetric = false;
    isImperial = true;

    // Remove the "clicked" class from the Metric button
    document.querySelector(".Metric").classList.remove("clicked");
  });

  function GetGender() {
    let choice = document.getElementsByName("GenderBtn");

    for (i = 0; i < choice.length; i++) {
      if (choice[i].checked) Gender = choice[i].value;
    }

    if (Gender) {
      return Gender;
    } else {
      alert("Please pick a gender.");
    }
  }
  function GetHeight() {
    let getHeight = document.getElementById("HeightBMI");
    let Height = getHeight.value;
    return Height;
  }

  function GetWeight() {
    let getWeight = document.getElementById("WeightBMI");
    let Weight = getWeight.value;
    return Weight;
  }

  function CalculateBMI() {
    Gender = GetGender();
    Height = GetHeight();
    Weight = GetWeight();

    if (isNaN(Height) || isNaN(Weight) || Height <= 0 || Weight <= 0) {
      alert("Please enter valid height and weight.");
      return;
    }
    let bmi;
    if (isMetric) {
      if (Gender === "Male") {
        bmi = Weight / (Height / 100) ** 2;
      } else if (Gender === "Female") {
        bmi = (0.9 * Weight) / (Height / 100) ** 2;
      }
    } else if (isImperial) {
      if (Gender === "Male") {
        // BMI calculation for males in Imperial system (lbs, inches)
        bmi = (Weight / Height ** 2) * 703;
      } else if (Gender === "Female") {
        // BMI calculation for females in Imperial system (lbs, inches)
        bmi = (Weight / Height ** 2) * 703;
      }
    }
    let CategoryLabel = document.querySelector(".BMIRange");
    let Category;

    if (bmi < 18.5) {
      CategoryLabel.style.color = "#317EB6";
      Category = "Underweight";
      CategoryLabel.value = Category;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      CategoryLabel.style.color = "#3EDC61";
      Category = "Normal";
      CategoryLabel.value = Category;
    } else if (bmi >= 25 && bmi <= 29.99) {
      CategoryLabel.style.color = "#B4993C";
      Category = "Overweight";
      CategoryLabel.value = Category;
    } else if (bmi > 30) {
      CategoryLabel.style.color = "#843636";
      Category = "Obese";
      CategoryLabel.value = Category;
    }
    document.querySelector(".BMIRange").innerText = `${CategoryLabel.value}`;
    document.querySelector(".BMIResult").innerText = `BMI: ${bmi.toFixed(1)}`;
  }

  document
    .querySelector(".BMIResultBtn")
    .addEventListener("click", CalculateBMI);
});
