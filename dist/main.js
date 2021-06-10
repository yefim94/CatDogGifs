const cat_result = document.querySelector('#cat_result');
const dog_result = document.querySelector('#dog_result');
const cat_btn = document.querySelector('#cat_btn');
const dog_btn = document.querySelector('#dog_btn');
cat_btn.addEventListener('click', (e) => {
   fetch('https://aws.random.cat/meow')
  .then(res => res.json())
  .then(data => {
    cat_result.innerHTML = `<img src ="${data.file}"/>`