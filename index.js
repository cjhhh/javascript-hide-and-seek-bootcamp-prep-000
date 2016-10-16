function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');

}

function deepestChild(){
  const alpha = document.getElementById('grand-node').querySelector('div')
    return alpha
}





function increaseRankBy(n){
  const variant = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (var i = 0, l = variant.length; i < l; i++){
    variant[i].innerHTML = parseInt(variant[i].innerHTML) + n
  }
}
