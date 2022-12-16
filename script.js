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

    console.log(text);

    txtStyle.text = text;
}

function reset(){
    var mainElement = document.getElementById("container-1");
    var item1 = document.getElementById("item-1");
    var item2 = document.getElementById("item-2");
    var item3 = document.getElementById("item-3");

    mainElement.style.flexDirection = "row";
    mainElement.style.justifyContent = "start";
    mainElement.style.alignItems = "flex-start";
    mainElement.style.gap = "5px";

    item1.style.alignSelf = "flex-start";
    item2.style.alignSelf = "flex-start";
    item3.style.alignSelf = "flex-start";

    item1.style.flexGrow = 0;
    item2.style.flexGrow = 0;
    item3.style.flexGrow = 0;

    changeTxtStyle();
}