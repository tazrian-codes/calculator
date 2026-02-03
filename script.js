const inputBox = document.getElementById('input');
let isResultShown = true;

const calculate = (number) => {

  if (isResultShown) {
    inputBox.value='';
    isResultShown = false;
  }
  inputBox.value+=number;
}

const allClear = () => {
  inputBox.value = '';
}

const del = () => {
  inputBox.value = inputBox.value.slice(0,-1);
}

const result = () => {
  inputBox.value = eval(inputBox.value);
  isResultShown = true;
}
