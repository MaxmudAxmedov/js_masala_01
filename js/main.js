

var sum = Number(prompt("pul miqdoorini kiriting"));

var dollar = 750;
var yevro = 120;

var converDollar = dollar * 10840;
var converYevro = yevro * 12307;

var valyuta = converDollar + converYevro;

if(sum >= valyuta){
  console.log(`${sum} sum Oq yo'l Alisher !`);
}else{
  console.log(`${sum} sum Puling kamku Alisher ozgina sabir qil bu safar borasan !`);
}