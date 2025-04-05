document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleButton");
    
    toggleButton.addEventListener("click", function() {
        const message = document.getElementById("message");
        
        // Показываем сообщение и скрываем кнопку
        message.classList.remove("hidden");
        toggleButton.classList.add("hidden"); // Скрываем кнопку
        
        // Меняем цвет фона на градиент с углом -30 градусов
        document.body.style.background = "linear-gradient(-30deg, #2E9AFF, #F498AD)";
        console.log("Сообщение показано и цвет фона изменен"); // Отладочное сообщение

           });
});