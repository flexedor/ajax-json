var starting_api = 'https:api.myjson.com/bins/1fkroa';

var roof = document.createElement("div");
document.body.appendChild(roof);
roof.className = "toolbar";

var text_field=document.createElement("input");
roof.appendChild(text_field);
text_field.type="text";
text_field.id="text_field";

var button_conform=document.createElement("button");
roof.appendChild(button_conform);
 button_conform.innerHTML="Conform";
 button_conform.id="conform";




function builder(data) {

    var container = document.createElement("div");
    document.body.appendChild(container);
    container.className = "Container";
    container.id="root";

    var pic2 = document.createElement("IMG");
    pic2.src = "img/brackets.jpg";
    container.appendChild(pic2);
    container.innerHTML = '<img src="img/brackets.jpg">json'


function cheaker(data,container) {
    for (var key in  data ){
        if (data.hasOwnProperty(key)){
            if (typeof data[key] === "object"){
                if (Array.isArray(data[key])) {
                    delete data.error;
                    delete data.warning;
                    var container1 = document.createElement("ul");
                    container.appendChild(container1);
                    container1.className = "Container";



                    var root = document.createElement("li");
                    container1.appendChild(root);
                    root.className = ("Node IsRoot ExpandOpen");

                    var expand = document.createElement("div");
                    root.appendChild(expand);
                    expand.className = "Expand";


                    var content = document.createElement("div");
                    root.appendChild(content);
                    content.className = "Content";


                    var pic2 = document.createElement("IMG");
                    pic2.src = "img/brackets.jpg";
                    content.appendChild(pic2);
                    content.innerHTML += key + ":";

                    var list=document.createElement("div");
                    content.appendChild(list);
                    list.className="list";
                    recursion(data[key],list);
                } else {
                    delete data.error;
                    delete data.warning;
                    var container1 = document.createElement("ul");
                    container.appendChild(container1);
                    container1.className = "Container";

                    var root = document.createElement("li");
                    container1.appendChild(root);
                    root.className = ("Node IsRoot ExpandOpen");

                    var expand = document.createElement("div");
                    root.appendChild(expand);
                    expand.className = "Expand";

                    var content = document.createElement("div");
                    root.appendChild(content);
                    content.className = "Content";

                    var pic1 = document.createElement("IMG");
                    pic1.src = "img/brackets2.jpg";
                    content.appendChild(pic1);
                    content.innerHTML += key + ":" ;

                    var list=document.createElement("div");
                    content.appendChild(list);
                    list.className="list";
                    recursion(data[key],list);

                }
            }else {
                i=randomInteger(1,3);
                c="img/"+i+".jpg";
                var li=document.createElement("li");
                container.appendChild(li);
                var pic0 = document.createElement("IMG");
                pic0.src = c;
                li.appendChild(pic0);
                li.innerHTML += key + ':' + '"' + data[key] + '"' ;
            }
        }
    }
}



function recursion(data,container){
    for (var key in data){
        if (data.hasOwnProperty(key)){
            if (typeof data[key] === "object"){
        if (Array.isArray(data[key])) {

            delete data.error;
            delete data.warning;

            var container1 = document.createElement("ul");
            container.appendChild(container1);
            container1.className = "Container";

            var root = document.createElement("li");
            container1.appendChild(root);
            root.className = ("Node IsRoot ExpandOpen");

            var expand = document.createElement("div");
            root.appendChild(expand);
            expand.className = "Expand";

            var content = document.createElement("div");
            root.appendChild(content);
            content.className = "Content";

            var pic2 = document.createElement("IMG");
            pic2.src = "img/brackets.jpg";
            content.appendChild(pic2);
            content.innerHTML += key + ":";

            var list=document.createElement("div");
            content.appendChild(list);
            list.className="list";
            cheaker(data[key],list);
        } else {
            delete data.error;
            delete data.warning;
            var container1 = document.createElement("ul");
            container.appendChild(container1);
            container1.className = "Container";

            var root = document.createElement("li");
            container1.appendChild(root);
            root.className = ("Node IsRoot ExpandOpen");

            var expand = document.createElement("div");
            root.appendChild(expand);
            expand.className = "Expand";

            var content = document.createElement("div");
            root.appendChild(content);
            content.className = "Content";

            var pic1 = document.createElement("IMG");
            pic1.src = "img/brackets2.jpg";
            content.appendChild(pic1);
            content.innerHTML += key + ":" ;

            var list=document.createElement("div");
            content.appendChild(list);
            list.className="list";
            cheaker(data[key],list);
        }
    }  else {
                    i=randomInteger(1,3);
                    c="img/"+i+".jpg";
                    var li=document.createElement("li");
                    container.appendChild(li);
                    var pic0 = document.createElement("IMG");
                    pic0.src = c;
                    li.appendChild(pic0);
                    li.innerHTML += key + ':' + '"' + data[key] + '"' ;
            }}}}
    function randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        return rand;
    }
recursion(data,container);


};


function xhr(starting_api){
    // 1. Создаём новый объект XMLHttpRequest
    var xhr = new XMLHttpRequest();

// 2. Конфигурируем его: GET-запрос (конфигурируется с левого сайта )
// https://randomuser.me/api/?gender=male
//     https:api.myjson.com/bins/1fkroa
    xhr.open('GET', starting_api, false);

// 3. Отсылаем запрос
    xhr.send();
// 4. Если код ответа сервера не 200, то это ошибка
    if (xhr.status != 200) {
        // обработать ошибку
        alert(xhr.status + ': ' + xhr.statusText + "error"); // пример вывода: 404: Not Found
    } else {
        // вывести результат
        var data = JSON.parse(xhr.responseText);
        delete data.error;
        delete data.warning;
        builder(data);

    }
}
xhr(starting_api);


 window.onclick=function(e){
     var elem = e ? e.target : window.event.srcElement;
     if (elem.className==="Expand"){
        if (elem.parentNode.className==="Node IsRoot ExpandOpen") {
            elem.parentNode.className="Node IsRoot ExpandClosed";
        }else {
            elem.parentNode.className="Node IsRoot ExpandOpen";
        }
     }
     else if (elem.id==="conform") {
         var api =document.getElementById('text_field').value;
         if (api === '') {
             alert("Нет адреса,куда стучать ?!");
         } else {
             document.getElementById("text_field").value = "";
             xhr(api);
         }
     } }




