import{tempreaturecalculator} from './utilities/project.js';

document.querySelector('button').onclick = function (){
    let temp = document.getElementById('temperatureInput').value;   
    
    var message = '' ;
    var classContent = '';

    if(temp == ''){
        message = 'Invalid Temperature';
        classContent = 'alert alert-danger';
    }
    else{
        var ansTemp = tempreaturecalculator(temp);

        message = ` Temperature in Fahrenheit: ${ansTemp}F`;
        classContent = 'alert alert-success'
    }
    document.getElementById('errMsg').innerHTML = message;
    document.getElementById('errMsg').className = classContent;
}