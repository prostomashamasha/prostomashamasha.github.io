var list = document.querySelector('ul');
var todos;
function toLocal () {
  todos = list.innerHTML;
  localStorage.setItem ('todos', todos) 

}
list.addEventListener('click', function (ev) {
    if(ev.target.tagName === "LI") {
       ev.target.classList.toggle('checked');
       toLocal ();
    } else if(ev.target.tagName === "SPAN") {
       var div = ev.target.parentNode;
       div.remove();
       toLocal ();
    }
}, false);

function newElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('toDoEl').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue == "") {
       alert("Введите то, что Вы запланировали!");
    } else {
       document.getElementById('list').appendChild(li);
    }
    document.getElementById('toDoEl').value = "";
    var span = document.createElement('SPAN');
    var txt = document.createTextNode("Удалить");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
    toLocal ();
}

if (localStorage.getItem ('todos')) {
   list.innerHTML = localStorage.getItem ('todos');
}
