function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  let increase = parseInt(n);
  const list = document.getElementById('app').querySelectorAll('ul.unranked-list li')

  for (let i = 0; i < list.length; i++){
    list[i].innerHTML = (i + n).toString();
  }
}
