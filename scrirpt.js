
var tel = function(){
  var elementTel = document.querySelector('div[data-elem-id="1586409771144"]');
  var contentTel = elementTel.querySelector('div');
  contentTel.innerHTML = "<tel>" + contentTel.innerHTML + "</tel>";
}
tel();