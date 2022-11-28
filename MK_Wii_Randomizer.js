const widget = new ListWidget();

let textField = new Alert();
textField.title = "How many races?";
textField.addAction("OK");
let numField = textField.addTextField(8);
numField.setNumberPadKeyboard()

await textField.present();
let input = textField.textFieldValue(0);

let text = widget.addText("Test");
text.font = Font.systemFont(36);
text.textColor = Color.white();

Script.setWidget(widget);
Script.complete();

// for preview
widget.presentMedium();