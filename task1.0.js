 function tree_BUILDER() {//по завершению загрузки

function builder(data) {//построение дерева

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
                container.innerHTML += "<li><img src='img/leaf.jpg'>" + key + ':' + '"' + data[key] + '"' + '</li>';
            }
        }
    }
}



function recursion(data,container){
    for (var key in data){
        if (data.hasOwnProperty(key)){
            if (typeof data[key] === "object"){
        if (Array.isArray(data[key])) {

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
    }else {
                container.innerHTML += "<li><img src='img/leaf.jpg'>" + key + ':' + '"' + data[key] + '"' + '</li>';
            }}}}
recursion(data,container);


};

// 1. Создаём новый объект XMLHttpRequest
    var xhr = new XMLHttpRequest();

// 2. Конфигурируем его: GET-запрос (конфигурируется с левого сайта )
    xhr.open('GET', 'https://api.myjson.com/bins/1fkroa', false);

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

tree_BUILDER();
 window.onclick=function(e){
     var elem = e ? e.target : window.event.srcElement;
     if (elem.className==="Expand"){
        if (elem.parentNode.className==="Node IsRoot ExpandOpen") {
            elem.parentNode.className="Node IsRoot ExpandClosed";
        }else {
            elem.parentNode.className="Node IsRoot ExpandOpen";
        }
     }
     else {
         alert(elem.className);
    }
 }




