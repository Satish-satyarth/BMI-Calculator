const form = document.querySelector("form");

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(height) || height <= 0) {
    results.textContent = 'Please enter a valid height.';
    return;
  }

  if (isNaN(weight) || weight <= 0) {
    results.textContent = 'Please enter a valid weight.';
    return;
  }

  const bmi = (weight / ((height * height) / 10000)).toFixed(2);

  let message;
  if (bmi > 24.9) {
    message = `You are overweight. BMI: ${bmi}`;
  } else if (bmi < 18.6) {
    message = `You are underweight. BMI: ${bmi}`;
  } else {
    message = `You are in the normal range. BMI: ${bmi}`;
  }

  results.innerHTML = `<span>${message}</span>`;
});
