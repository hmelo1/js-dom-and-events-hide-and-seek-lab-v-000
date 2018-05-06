function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  let increase = parseInt(n);
  const list = document.querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < list.length; i++){
    list[i].innerHTML = increase + parseInt(list[i].innerHTML);
  }
}

function deepestChild(){
  const nodelist = document.getElementById('grand-node').querySelectorAll('div');
  const divyArray = Array.from(nodelist)
  return divyArray[1];
}
