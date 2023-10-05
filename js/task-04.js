let counterValue = 0;
const valueRef = document.getElementById("value");
const decreaseValue = document.querySelector('[data-action="decrement"]');
const increaseValue = document.querySelector('[data-action="increment"]');
const onClickIncreaseValue = (event) => {
  counterValue += 1;
  valueRef.textContent = counterValue;
};
const onClickDecreaseValue = (event) => {
  counterValue -= 1;
  valueRef.textContent = counterValue;
};
decreaseValue.addEventListener("click", onClickDecreaseValue);
increaseValue.addEventListener("click", onClickIncreaseValue);
