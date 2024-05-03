
Notification.requestPermission()

function g(id){
  return document.getElementById(id);

}

function createPopup(){
  document.getElementsByTagName("body")[0].innerHTML=document.getElementsByTagName("body")[0].innerHTML + "<div style='position:fixed;top:10px;right:10px;width:200px;padding:10px;display:none;border: 1px solid gray;border-radius:10px;box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;' id='mypopup'>\
<button style='background:none;border:0px;color:gray;position:fixed;right:15px;top:15px;' onclick='loadPopup()'>x</button>\
  <p>40% Discount</p>\
  <button>Claim</button></div>" ;

}
createPopup()

status = 0;
function loadPopup(){

  if(status==0){
    g("mypopup").style.display = '';
    status=1;
  }else{
    g("mypopup").style.display = 'none';
    status=0
  }
  setInterval(loadPopup,50000)

}
setTimeout(loadPopup(),5000)
