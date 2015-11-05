/* your code should go in this file */

/* 
 * The data is available in the array *data*
 * Each element of the array has the following structure:
 *  {
 *    phrase_en : "I'm a man",        // sentence in english
 *    phrase_de : "Ich bin ein Mann"  // sentence in german
 *  }
 */ 

/*
              <li id="1" class="current">
                <h3>I'm a man</h3>
              </li> 
              <li id="2">
                <h3>I'm a woman</h3>     
              </li>    
              <li id="3">
                <h3>Hello</h3>     
              </li>
*/

var tmpl = ' <li id="ID">' +
           '  <h3>SENTENCE</h3>' +
           ' </li> ';

var temp1=[];

var fails = 0;

$(document).ready(function(){
    $(".final").hide();
    $(".sentences").hide();
    for (var i =0; i < data.length; i++){
        temp1[i] = tmpl.replace("ID", i+1).replace("SENTENCE", data[i].phrase_en);
        $(".sentences").append(temp1[i]);
    }
    
    
    do{
        var i=0;
        $(".practice").append(temp1[i]);
        $("btn opt-continue").click(function(){
            
        });
        
    }while(i<temp1.length);
      
});







