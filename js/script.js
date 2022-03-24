
window.onload = init;

function init(){
    var button = document.getElementsByClassName("solve-button");
    button[0].onclick = controller.solve;

}

var view = {
    //disable all forms with validation of incoming data
};

var controller = {

    solve : function(){
        //send to view that we need to disable all forms
        model.getModel();
        //start solving in the model object
    }
};

var model = {
   userArray: [["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""],["","","","","","","","",""]],

   getModel: function(){
       var cells = document.getElementsByClassName("cell");
       console.log(cells[0].value)
       console.log( this.userArray[0].length);
       console.log( this.userArray.length);
        for(var i = 0; i < this.userArray.length; i++){
            for(var j = 0; j < this.userArray[i].length; j++){
                var cellNumber = j + this.userArray.length*i;
                this.userArray[i][j] = cells[cellNumber].value;
            }
        }
       
   }
    
};