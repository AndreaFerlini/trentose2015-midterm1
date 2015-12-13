/* your code should go in this file */

/*
 * The data is available in the array *data*
 * Each element of the array has the following structure:
 *  {
 *    phrase_en : "I'm a man",        // sentence in english
 *    phrase_de : "Ich bin ein Mann"  // sentence in german
 *  }
 */
var tmpl = ' <li id="ID">' +
           '  <h3>SENTENCE</h3>' +
           ' </li> ';

$(document).ready(function(){
    $(".practice").show();
    $(".sentences").empty();
    $(".final").hide();
    controller.init();
});

var model = {
  collection : data,
  fails : 0
};

var controller = {
  init : function (){
    view.load();
  },
  GetFails : function(){
    return model.fails;
  },
  AddFails : function(){
    model.fails++;
    return model.fails;
  },
  GetDataLen : function(){
    return model.collection.length;
  },
  GetDataPhrase_en : function(index){
    return model.collection[index].phrase_en;
  },
  GetDataPhrase_de : function(index){
    return model.collection[index].phrase_de;
  }
};

var view = {
  current : 0,

  load : function (){
    var exercise;
    for (var i =0; i < controller.GetDataLen(); i++){
        exercise = tmpl.replace("ID", i)
                       .replace("SENTENCE", controller.GetDataPhrase_en(i));
        $(".sentences").append(exercise);
    }
    $(".sentences li").removeClass("current");
    view.display_phrase();
    $(".opt-continue").click(function(){
      //controllo sull'inserimento dell'utente
      if ($(".form-control").val() != controller.GetDataPhrase_de(view.current)){
        controller.AddFails();
      }
      view.next();
    })
  },

  display_phrase : function(){
    if (this.current == controller.GetDataLen()){
      $("#tot-good").html(controller.GetDataLen() - controller.GetFails());
      $("#tot").html(controller.GetDataLen());
      $(".practice").hide();
      $(".final").show();

    }else{
      $("#"+this.current).addClass("current");
    }
  },

  next : function (){
    $(".form-control").val("");
    this.current ++;
    $(".sentences li").removeClass("current");
    view.display_phrase();
  }
};
