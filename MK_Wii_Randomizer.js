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
"SNES Choco Island 2 - Thunder Cloud",
"DS Figure-8 Circuit - POW Block",
"GCN Daisy Cruiser - POW Block",
"Luncheon Tour - Bobomb",
"DS Wario Stadium - Bobomb",
"DS Cheep Cheep Beach - Fake Item",
"GCN Yoshi's Circuit - Golden Mushroom",
"N64 Royal Raceway - Golden Mushroom",
"3DS Toad Circuit - Bullet Bill",
"GCN Luigi Circuit - Chain Chomp",
"Honeybee Hideout - Mii Outfit C",
"3DS Rosalina's Snow World - Mii Outfit C",
"SNES Donut Plains 3 - Poison Mushroom",
"GCN Wario Colosseum - Poison Mushroom",
"3DS Mario Castle Raceway - Ice Flower",
"GCN Sherbet Land - Ice Flower",
"3DS Neo Koopa City - Propeller Mushroom",
"DS Luigi's Mansion - Wiggler",
"GCN Dino Dino Jungle - 1 Up Mushroom",
"N64 Kalimari Desert - 1 Up Mushroom",
"3DS DK Ruins - Stone Tanooki",
"3DS Piranha Plant Pipeline - Metal Mushroom",
"3DS Wuhu Mountain - Luigi Fireball",
"3DS Rock Rock Ridge - Spin Drill",
"N64 Rainbow Road - Lava Bubble",
"3DS Shy Guy's Market - Cloud Flower",
"N64 Yoshi Valley - Green Star",
"3DS Wugu Island - Shy Guy",
"3DS Rainbow Road: Solar Edition - Piranha Plant"]

const cupDictionary = {
    "Mushroom" : Color.red(),
    "Flower" : Color.orange(),
    "Star" : Color.yellow(),
    "Special" : new Color("#ffc800"),
    "Banana" : new Color("#eaff00"),
    "Leaf" : Color.brown(),
    "Lightning" : Color.yellow(),
    // modded cups start here
    "Thunder Cloud" : new Color("#4646e3"),
    "POW Block" : new Color("#090b4f"),
    "Bobomb" : new Color("#303036"),
    "Fake Item" : new Color("#ad1126"),
    "Golden Mushroom" : new Color("#ebdf00"),
    "Bullet Bill" : new Color("#42423c"),
    "Chain Chomp" : new Color("#292924"),
    "Mii Outfit C" : new Color("#00db00"),
    "Poison Mushroom" : new Color("#5c00a3"),
    "Ice Flower" : new Color("#00bfff"),
    "Propeller Mushroom" : new Color("#ff6a00"),
    "Wiggler" : new Color("#ffea00"),
    "1 Up Mushroom" : new Color("#2f9c00"),
    "Stone Tanooki" : new Color("#6c706b"),
    "Metal Mushroom" : new Color("#a4aba1"),
    "Luigi Fireball" : new Color("#56a633"),
    "Spin Drill" : new Color("#a62828"),
    "Lava Bubble" : new Color("#ff1414"),
    "Cloud Flower" : new Color("#ffffff"),
    "Green Star" : new Color("#0b8c0b"),
    "Shy Guy" : new Color("#ad1111"),
    "Piranha Plant" : new Color("#cf0404")
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