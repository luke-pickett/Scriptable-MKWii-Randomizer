const widget = new ListWidget();

let textField = new Alert();
textField.title = "How many races?";
textField.setNumberPadKeyboard()
textField.addAction("OK");
textField.addTextField("","");

await textField.present();
let input = textField.textFieldValue(0);

let text = widget.addText("Test");
text.font = Font.systemFont(36);
text.textColor = Color.white();

Script.setWidget(widget);
Script.complete();

// for preview
widget.presentMedium();