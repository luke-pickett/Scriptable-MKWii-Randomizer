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
"N64 Bowser's Castle - Lightning",
// modded maps start here
"Muhu Mountain - Blooper",
"Muhu Island - Blooper",
"DS Figure 8 Circuit - Blooper",
"N64 Yoshi Valley - Blooper",
"N64 Royal Raceway - Mega Mushroom",
"N64 Wario Stadium - Mega Mushroom",
"N64 Choco Mountain - Mega Mushroom",
"N64 Rainbow Road -  Mega Mushroom",
"N64 Kalimari Desert - Thunder Cloud",
"Honeybee Hideout - Thunder Cloud",
"GCN Sherbet Land - Thunder Cloud",
"3DS Shy Guy's Market - Thunder Cloud",
"DS Cheep Cheep Beach- POW Block",
"DS DK Pass - POW Block",
"DS Waluigi Pinball - POW Block",
"GCN Dry Dry Desert - POW Block",
"DS Airship Fortress - Bobomb",
"DS Bowser Castle - Bobomb",
"3DS Rosalina's Snow World - Bobomb",
"GCN Luigi's Circuit - Bobomb",
"3DS Toad Raceway - Fake Item",
"GCN Wario Colosseum - Fake Item",
"GCN Mushroom Bridge - Fake Item",
"GCN Rainbow Road - Fake Item"
]

const cupDictionary = {
    "Mushroom" : Color.red(),
    "Flower" : Color.orange(),
    "Star" : Color.yellow(),
    "Special" : new Color("#ffc800"),
    "Banana" : new Color("#eaff00"),
    "Leaf" : Color.brown(),
    "Lightning" : Color.yellow(),
    // modded cups start here
    "Blooper" : new Color("#ffffff"),
    "Mega Mushroom" : new Color("#ff9900"),
    "Thunder Cloud" : new Color("#4646e3"),
    "POW Block" : new Color("#090b4f"),
    "Bobomb" : new Color("#303036"),
    "Fake Item" : new Color("#ad1126")
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