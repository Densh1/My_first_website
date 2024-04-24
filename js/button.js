var count = 0;
document.getElementById("myButton").onclick = function() {
    count++;
    if (count % 2 == 0) {
        document.getElementById("demo").innerHTML = "";
    } else {
       // Создаем новый элемент img
       var img = document.createElement("img");
       // Устанавливаем источник изображения
       img.src = "https://img.freepik.com/premium-photo/cartoon-fox-sits-table-works-laptop_593294-5248.jpg";
       // Добавляем изображение в параграф
       document.getElementById("demo").appendChild(img); 
    }
}