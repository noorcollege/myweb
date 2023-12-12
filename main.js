function on(){
 
           // text1.style.backgroundColor = "red";
        

        
    
        // var abc = document.getElementById('text1').value;
         // var def = document.getElementById('text2').value;
         // var xyz = parseInt(def);
    
    var text1 = document.getElementById('text1');
    var text2 = document.getElementById('text2');

 var error = document.getElementsByClassName('error');
 var success = document.getElementsByClassName('success');

   

    if(text1.value != "" || text2.value.length > 5){
        
        text1.style.borderColor = "green";
        text2.style.borderColor = "green";

        success[0].innerHTML = "correct";
        success[1].innerHTML = "correct";
       
        error[0].innerHTML = "";
        error[1].innerHTML = "";
        
        
}


else{
    text1.style.borderColor = "red";
    text2.style.borderColor = "red";

    error[0].innerHTML = "Please enter correct data";
    error[1].innerHTML = "Please enter correct data";


}
}

var container = document.getElementById('container');

var div = document.getElementById('second');

function showdiv(){
   

   div.classList.add('new');

   container.style.filter = "blur(3px)";

}



function closediv(){

    div.classList.remove('new');

 container.style.filter = "blur(0px)";

}