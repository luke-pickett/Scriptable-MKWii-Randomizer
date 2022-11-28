const widget = new ListWidget();
const mapList = [1,2,3,4,5,6,7,8,9,10]
let usedMaps = new Array()


function getRandomInt(max){
    let randomizedInt = Math.floor(Math.random() * max)
    return randomizedInt
}


// Sets a int input from the user //
let textField = new Alert();
textField.title = "How many races?";
textField.addAction("OK");
let numField = textField.addTextField("8");
numField.setNumberPadKeyboard()
await textField.present();
let input = textField.textFieldValue(0);
///////////////////////////////////

for (i=0; i<parseInt(input, 10); i++) {
    let row = widget.addStack();
    row.layoutHorizontally();

    while(true){
        randomMap = mapList[getRandomInt(mapList.length)]
        if(usedMaps.includes(randomMap) == false){
            usedMaps.push(randomMap)
            break
        }
    }
    let text = row.addText(randomMap.toString());
    text.font = Font.boldSystemFont(20);
    text.minimumScaleFactor = 0.5
    text.textColor = Color.white();
}

Script.setWidget(widget);
Script.complete();

// for preview
widget.presentLarge();