document.addEventListener('DOMContentLoaded', function() {//по завершению загрузки


    function builder(data) {//построение дерева

        var container = document.createElement("ul");
        document.body.appendChild(container);
        container.className = "Container";

        var pic2 = document.createElement("IMG");
        pic2.src = "img/brackets.jpg";
        container.appendChild(pic2);
        container.innerHTML = '<img src="img/brackets.jpg">json';

        delete data.error;
        delete data.warning;

        function cheaker(data, content) {

            for (var key in data) {

                if (data.hasOwnProperty(key)) {
                    if (typeof data[key] === "object") {

                        if (Array.isArray(data[key])) {

                            var container = document.createElement("ul");
                            content.appendChild(container);
                            container.className = "Container";

                            var root = document.createElement("li");
                            container.appendChild(root);
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
                            cheaker(data[key], content);
                        } else {
                            var container = document.createElement("ul");
                            content.appendChild(container);
                            container.className = "Container";

                            var root = document.createElement("li");
                            container.appendChild(root);
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
                            cheaker(data[key],content);
                        }
                    }
                    else {

                        content.innerHTML += "<li>" + key + ':' + '"' + data[key] + '"' + '</li>';
                    }
                }
            }
        }

        cheaker(data,container);
    }

// 1. Создаём новый объект XMLHttpRequest
    var xhr = new XMLHttpRequest();

// 2. Конфигурируем его: GET-запрос (конфигурируется с левого сайта )
    xhr.open('GET', 'https://api.myjson.com/bins/1fkroa', false);

// 3. Отсылаем запрос
    xhr.send();
// 4. Если код ответа сервера не 200, то это ошибка
    if (xhr.status != 200) {
        // обработать ошибку
        alert(xhr.status + ': ' + xhr.statusText + "mivinvdfi"); // пример вывода: 404: Not Found
    } else {
        // вывести результат
        var data = JSON.parse(xhr.responseText);
        builder(data);
    }


});

