const widget = new ListWidget();

const mapList = ["Luigi Circuit - Mushroom",
"Moo Moo Meadows - Mushroom",
"Mushroom Gorge - Mushroom",
"Toad's Factory - Mushroom",
"Mario Circuit - Flower",
"Coconut Mall - Flower",
"DK Summit - Flower",
"Wario's Gold Mine - Flower",
"Daisy Circuit - Star",
"Koopa Cape - Star",
"Maple Treeway - Star",
"Grumble Volcano - Star",
"Dry Dry Ruins - Special",
"Moonview Highway - Special",
"Bowser's Castle - Special",
"Rainbow Road - Special",
"N64 Sherbert Land - Banana",
"GBA Shy Guy Beach - Banana",
"DS Delfino Square - Banana",
"GCN Waluigi Stadium - Banana",
"DS Desert Hills - Leaf",
"GBA Bowser's Castle 3 - Leaf",
"N64 DK's Jungle Parkway - Leaf",
"GCN Mario Circuit - Leaf",
"SNES Mario Circuit - Lightning",
"DS Peach Gardens - Lightning",
"GCN DK Mountain - Lightning",
"N64 Bowser's Castle - Lightning"]

const cupDictionary = {
    "Mushroom" : Color.red(),
    "Flower" : Color.orange(),
    "Star" : Color.yellow(),
    "Special" : new Color("#ffc800"),
    "Banana" : new Color("#eaff00"),
    "Leaf" : Color.brown(),
    "Lightning" : Color.yellow()
}

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
    let text = row.addText(randomMap);
    text.font = Font.boldSystemFont(20);
    text.minimumScaleFactor = 0.5
    text.textColor = cupDictionary[randomMap.split('- ').pop()];
    text.shadowColor = Color.white()
    text.shadowRadius = 0.2
}

Script.setWidget(widget);
Script.complete();

// for preview
widget.presentLarge();