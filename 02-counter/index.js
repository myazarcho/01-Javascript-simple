var initial = 0;
var number = document.querySelector("#number");
var btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener('click' , function(e){
        const styles = e.currentTarget.classList;

        if(styles.contains("decrease")){
            initial--;
        }
        else if(styles.contains("increase")){
            initial++;
        }
        else{
            initial = 0;
        }

        if(initial > 0) {
            number.style.color  = "blue";
        }
        else if (initial < 0) {
            number.style.color = "red";
        }
        else{
            number.style.color = "#666";
        }

        number.textContent = initial;


        
    })
})
