//Ваш код будет здесь
var state = {
  items:[]
};
var d = localStorage.getItem('tasks');

if (d){
  state = JSON.parse(d);
}

window.addEventListener('load', function wLoader() {
  'use strict';
  var button = document.querySelector('button');
  var input = document.querySelector('input');
  var list = document.querySelector('ul');
  var i;
  var liList = document.querySelectorAll('li');

  function update() {
  list.innerHTML = '';
    state.items.sort();
  for (i = 0; i < state.items.length; i++){
    var newLi = document.createElement('li');
    newLi.innerHTML = state.items[i];
    list.appendChild(newLi);
  }
  }
  update();
  button.addEventListener('click', btnClick);
  document.addEventListener('keydown', btnClick);
  function btnClick (event) {
    if (event.keyCode === 13  || event.target === button) {
      if (!input.value) {
        return;
      }

      state.items.push(input.value);
      localStorage.setItem('tasks', JSON.stringify(state));
      input.value = '';
      update();
    }
  }
});
