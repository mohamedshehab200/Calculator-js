const Calculatorcontainer = document.getElementById("Calculator-container");

const displayarea = document.getElementById("display-area");


Calculatorcontainer.addEventListener("click" , e => {

    if(e.target.nodeName == "BUTTON"){
      switch (e.target.textContent){
        case "C":
        clear();
        break;
        case "DEL":
        deleteOneValue();
        break;
          case "=":
          evaluate();
          break;
          default:
          addtodisplayarea(e.target.textContent);

      }

    }


})

//  displayarea تفضي كل الموجود داخل 
function clear(){

    displayarea.textContent = "";
}

//لاضافه value 

function  addtodisplayarea(value){

    displayarea.textContent = displayarea.textContent +value;
}

function deleteOneValue(){

    let currentContent = displayarea.textContent;
     displayarea.textContent = currentContent.substring(

        0,
        currentContent.length - 1

     );
}

function evaluate(){

    try{
        let calculation = math.evaluate(displayarea.textContent);
        displayarea.textContent = calculation;
    }catch(error){
         displayarea.textContent = "invalid operation";
         console.log(error);
    }

}