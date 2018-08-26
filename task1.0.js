var starting_api = 'https:api.myjson.com/bins/1fkroa';
var node_state_start="Node IsRoot ExpandClosed";
//https://randomuser.me/api/?gender=male
// если ввести"Node IsRoot ExpandClosed" все узлы будут скрыты
// если "Node IsRoot ExpandOpen" все будут открыты;

var roof = document.createElement("div");
document.body.appendChild(roof);
roof.className = "toolbar";

var text_field=document.createElement("input");
roof.appendChild(text_field);
text_field.type="text";
text_field.id="text_field";
text_field.placeholder="введите адрес json";

var button_conform=document.createElement("button");
roof.appendChild(button_conform);
 button_conform.innerHTML="GET";
 button_conform.id="conform";




function builder(data) {

    var container = document.createElement("div");
    var head_with_json=document.createElement("div");
    var popup = document.createElement('div');
    var pic2 = document.createElement("IMG");
    var kostil=document.createElement("div");

    document.body.appendChild(container);

    pic2.src = "img/brackets.jpg";

    container.appendChild(head_with_json);
    head_with_json.appendChild(kostil);
    kostil.appendChild(pic2);
    kostil.innerHTML+="Json";
    kostil.appendChild(popup);

    kostil.className="json";
    container.id="root";
    container.className = "Container";
    head_with_json.className="head_with_json";
    popup.className="popup";
    popup.id="tabs";



    event_list(container);//вешаем обработчик


    function cheaker(data,container) {
        for (var key in  data ){
            if (data.hasOwnProperty(key)){
                if (typeof data[key] === "object"){
                    if (Array.isArray(data[key])) {

                        if (data.error!=undefined){
                            errors_in_alert=data.error.length;
                            errors_in_DIV=data.error;
                            delete data.error;
                        }
                        if (data.warning!=undefined){
                            warnings_in_DIV=data.warning;
                            warnings_in_alert=data.warning.length;
                            delete data.warning;
                        }

                        var container1 = document.createElement("ul");
                        container.appendChild(container1);
                        container1.className = "Container";



                        var root = document.createElement("li");
                        container1.appendChild(root);
                        root.className = node_state_start;

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

                        if (data.error!=undefined){
                            errors_in_alert=data.error.length;
                            errors_in_DIV=data.error;
                            delete data.error;
                        }
                        if (data.warning!=undefined){
                            warnings_in_DIV=data.warning;
                            warnings_in_alert=data.warning.length;
                            delete data.warning;
                        }


                        var container1 = document.createElement("ul");
                        container.appendChild(container1);
                        container1.className = "Container";

                        var root = document.createElement("li");
                        container1.appendChild(root);
                        root.className =node_state_start;

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

                if (data.error!=undefined){
                    errors_in_alert=data.error.length;
                    errors_in_DIV=data.error;
                    delete data.error;
                }
                if (data.warning!=undefined){
                    warnings_in_DIV=data.warning;
                    warnings_in_alert=data.warning.length;
                    delete data.warning;
                }

                var container1 = document.createElement("ul");
                container.appendChild(container1);
                container1.className = "Container";

                var root = document.createElement("li");
                container1.appendChild(root);
                root.className =node_state_start;

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

                if (data.error!=undefined){
                    errors_in_alert=data.error.length;
                    errors_in_DIV=data.error;
                    delete data.error;
                }
                if (data.warning!=undefined){
                    warnings_in_DIV=data.warning;
                    warnings_in_alert=data.warning.length;
                    delete data.warning;
                }

                var container1 = document.createElement("ul");
                container.appendChild(container1);
                container1.className = "Container";

                var root = document.createElement("li");
                container1.appendChild(root);
                root.className = node_state_start;

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


// создание табов в popup
    var tab_with_errors =document.createElement("div");
    var tab_with_warnings=document.createElement("div");

    popup.appendChild(tab_with_errors);
    popup.appendChild(tab_with_warnings);

    tab_with_errors.className='tab whiteborder';
    tab_with_warnings.className='tab';
    tab_with_errors.innerHTML="errors";
    tab_with_warnings.innerHTML="warnings";

    tab=document.getElementsByClassName('tab');

//контент табов
    var tab_content_with_errors =document.createElement("div");
    var tab_content_with_warnings=document.createElement("div");

    popup.appendChild(tab_content_with_errors);
    popup.appendChild(tab_content_with_warnings);

    tab_content_with_errors.className='tabContent';
    tab_content_with_warnings.className='tabContent hide';

    tabContent=document.getElementsByClassName("tabContent");

    if (errors_in_DIV!='no errors'){
        recursion(errors_in_DIV,tab_content_with_errors);
    }else{
        tab_content_with_errors.innerHTML="No errors";
    }

    if (errors_in_DIV!='no errors'){
        recursion(warnings_in_DIV,tab_content_with_warnings);
    }else{
        tab_content_with_warnings.innerHTML="No warnings";
    }





};
function hideTabsContent(a) {
    for (var i=a; i<tabContent.length; i++) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add("hide");
        tab[i].classList.remove('whiteborder');
    }
}

function showTabsContent(b){
    if (tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}

function lengthInUtf8Bytes(str) {//расчет веса json в байтах
    var m = encodeURIComponent(str).match(/%[89ABab]/g);
    return str.length + (m ? m.length : 0);
}


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
        alert("Oшика xhr запроса!"+xhr.status + ': ' + xhr.statusText + "error"); // пример вывода: 404: Not Found
    } else {
        // вывести результат
        try {
            var data = JSON.parse(xhr.responseText);
            int=JSON.stringify(xhr.responseText);


        }catch (e) {
            alert("Error of Json"+e.name+e.message);
        }finally {
            builder(data);
            alert("Correct data"+"\n"+"Size of data "+ lengthInUtf8Bytes(int)+"byts"+"\n"+
                "Warnings in JSON - "+warnings_in_alert+"\n"+"Errors in JSON - "+errors_in_alert);
            errors_in_alert=0;
            warnings_in_alert=0;
            errors_in_DIV="no errors";
            warnings_in_DIV="no warnings";
        }



    }
}
function event_list(tree) {
    //drag n drop
    tree.onmousedown = function (e) {
        if (e.target.className==="Expand"||e.target.className==="json"||e.target.className==="tab whiteborder"
            ||e.target.className==="tab"){
            return false;
        }else {


            var coords = getCoords(tree);
            var shiftX = e.pageX - coords.left;
            var shiftY = e.pageY - coords.top;


            tree.style.position = 'absolute';
            document.body.appendChild(tree);
            moveAt(e);
            tree.style.zIndex = 1000;




            function moveAt(e) {
                tree.style.left = e.pageX - shiftX / 2 + 'px';
                tree.style.top = e.pageY - shiftY / 2 + 'px';
            }

            document.onmousemove = function (e) {
                moveAt(e);
            }
            tree.onmouseup = function () {
                document.onmousemove = null;
                tree.onmouseup = null;
            }
            tree.ondragstart = function () {
                return false;
            };

            function getCoords(elem) {   // кроме IE8-
                var box = elem.getBoundingClientRect();
                return {
                    top: box.top + pageYOffset,
                    left: box.left + pageXOffset
                };
        }}}

    window.onclick = function (e) {
        var elem = e ? e.target : window.event.srcElement;
        if (elem.className === "Expand") {
            if (elem.parentNode.className === "Node IsRoot ExpandOpen") {
                elem.parentNode.className = "Node IsRoot ExpandClosed";
            } else {
                elem.parentNode.className = "Node IsRoot ExpandOpen";
            }
        }
        else if (elem.id === "conform") {
            var api = document.getElementById('text_field').value;
            if (api === '') {
                alert("Нет адреса,куда стучать ?!");
            } else {
                document.getElementById("text_field").value = "";
                xhr(api);
            }
        }else if(elem.className==="json"){
            if (elem.lastElementChild.className==="popup"){
                hideTabsContent(1);
                elem.lastElementChild.className="popup_on";

            } else {
                elem.lastElementChild.className="popup";
            }
            console.log(elem.lastElementChild.className);
        }else if(elem.className==="tab"){
                for(var d=0 ;d <tab.length; d++){
                    if(elem==tab[d]){
                        showTabsContent(d);
                        break;
                    }
                }
        }
    }
}

xhr(starting_api);


