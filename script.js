function clickStyle(classe, property, value){
    if(property == "flex-direction")
        document.getElementById(classe).style.flexDirection = value;

    if(property == "justify-content")
        document.getElementById(classe).style.justifyContent = value;

    if(property == "align-items")
        document.getElementById(classe).style.alignItems = value;

    if(property == "align-self")
        document.getElementById(classe).style.alignSelf = value;

    changeTxtStyle();
}

function rangeStyle(classe, range, rangeValue, property){
    var element = document.getElementById(classe);
    var range = document.getElementById(range);
    var rangeValue = document.getElementById(rangeValue);   

    if(property == "gap"){
        var value = range.value + "px";
        element.style.gap = value;
        rangeValue.text = value;
    }

    if(property == "flex-grow"){
        element.style.flexGrow = range.value;
        rangeValue.text = range.value;
    }

    changeTxtStyle();
}

function changeTxtStyle(){
    var txtStyle = document.getElementById("style-text");
    var mainElement = document.getElementById("container-1");

    let style = window.getComputedStyle(mainElement);

    var flexDirection = style.getPropertyValue("flex-direction");
    var justifyContent = style.getPropertyValue("justify-content");
    var alignItems = style.getPropertyValue("align-items");
    var gap = style.getPropertyValue("gap");
    var text = "flex-direction: " + flexDirection + "; " +
               "justify-content: " + justifyContent + "; " +
               "align-items: " + alignItems + "; " +
               "gap: " + gap + ";"

    txtStyle.value = text;
}

function reset(){
    var mainElement = document.getElementById("container-1");
    var item1 = document.getElementById("item-1");
    var item2 = document.getElementById("item-2");
    var item3 = document.getElementById("item-3");

    //Reset attributes
    mainElement.attributeStyleMap.clear();
    item1.attributeStyleMap.clear();
    item2.attributeStyleMap.clear();
    item3.attributeStyleMap.clear();

    //Set the "default" gap
    mainElement.style.gap = "5px";

    //Fix inputs
    document.getElementById("gap").value = 5;
    document.getElementById("grow-1").value = 0;
    document.getElementById("grow-2").value = 0;
    document.getElementById("grow-3").value = 0;

        
    document.getElementById("gapValue").text = "5px";
    document.getElementById("grow-1-value").text = 0;    
    document.getElementById("grow-2-value").text = 0;    
    document.getElementById("grow-3-value").text = 0;

    changeTxtStyle();
}

function copy(){
    var campo = document.getElementById("style-text");

    campo.select();
    campo.setSelectionRange(0, 99999); // Mobile

    var formatedText = campo.value;
    formatedText = formatedText.replaceAll("; ", ";\n"); 
    console.log(formatedText);

    navigator.clipboard.writeText(formatedText);
}
