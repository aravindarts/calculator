var elements = document.getElementsByClassName("button");
let text = document.getElementById('input');
let screenValue = '';
Array.from(elements).forEach(function (element) {
    element.addEventListener('click', (e) => {
    buttonText = e.target.innerText;
        if(buttonText=="AC"){
            text.value = 0;
            screenValue='';
        }else if(buttonText ==""){
                icon = e.target.firstElementChild.className;
                if(icon.includes('equals')){
                    text.value = eval(screenValue);
                    return;
                }else if(icon.includes('plus')){
                    screenValue +="+";
                }else if(icon.includes('minus')){
                    screenValue +="-";
                }else if(icon.includes('xmark')){
                    screenValue +="*";
                }
                text.value =screenValue;
        }else{
            screenValue += buttonText;
            text.value = screenValue;
            // text.value = eval(screenValue);
        }
    })
});
