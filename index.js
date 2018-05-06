function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  let increase = parseInt(n);
  const list = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < list.length; i++){
    list[i].innerHTML = increase + parseInt(list[i].innerHTML);
  }
}

function deepestChild(){
  const divArray = Array.from(document.querySelectorAll('#grand-node'))
  return divArray
}
