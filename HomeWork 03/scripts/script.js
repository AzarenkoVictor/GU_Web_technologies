
function getValue() {
    var inputValue = document.getElementById("myInput").value;
    if (inputValue == "") {
        alert("Вы не ввели текст");
    }
    else {
        alert("Ваши данные отправлены");
    }
}