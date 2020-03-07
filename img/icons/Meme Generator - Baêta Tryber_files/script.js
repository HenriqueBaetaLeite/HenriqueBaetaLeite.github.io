window.onload = function(){

let textInput = document.getElementById('text-input');
let imagemInput = document.getElementById('meme-insert');
let memeText = document.getElementById('meme-text');

function inserttext(){
  memeText.innerHTML = textInput.value;
}

textInput.addEventListener('keyup', inserttext);

function insertimage(){
  let memeImagem = document.getElementById('meme-image');
  memeImagem.src = URL.createObjectURL(imagemInput.files[0]);  
}

imagemInput.addEventListener('change', insertimage);
}
