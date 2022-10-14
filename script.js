let screen = document.getElementById('screen');
    buttons = document.querySelectorAll('button');
    let screenValue = '';
    let screennewvalue = '';
    function getOutput(){
	return document.getElementById("output-value").innerText;
    }
    for (item of buttons) {
        item.addEventListener('click', (e) => {
            buttonText = e.target.innerText;
            console.log('Button text is ', buttonText);
            if (buttonText == 'x') {
                buttonText = '*';
                screenValue += buttonText;
                screen.value = screenValue;
            }
            else if (buttonText == '÷') {
                buttonText = '/';
                screenValue += buttonText;
                screen.value = screenValue;
            }
            else if (buttonText == 'C') {
                screenValue = "";
                screen.value = screenValue;
            }
            else if(buttonText=="⇦"){
			    screenValue = "";
                screennewvalue = screenValue-1;
                screen.value = screennewvalue;
		    }
            else if (buttonText == '=') {
                screen.value = eval(screenValue);
            }
            else {
                screenValue += buttonText;
                screen.value = screenValue;
            }

        })
    }
