let Test = {

  init : function() {
    console.log("Hello World   !")
    document.getElementById('test').innerHTML += '<br>Some new content!';
    console.log(document.getElementById('test'))
  },

  
};

document.addEventListener('DOMContentLoaded', Test.init);
