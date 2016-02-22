window.onload = function(){

  var buttonList = ["one","two","buckle","my shoe", "three","four"];

  for (var i = 0; i < buttonList.length; i++) {
  buildButton(buttonList[i], document.querySelector('#group'));
  }

  document.getElementById('group').addEventListener('click', buttonClick, false);

  function buildButton(label, node){
    var newButton = document.createElement('div');
    newButton.className = 'button';
    newButton.innerHTML = "<center>"+label+"</center>";
    newButton.id=label;
    node.appendChild(newButton);
  }

  function buttonClick(event){
    if (event.target.className === 'button'){
      console.log("my target is " + event.target.id);
    }
  }
};
