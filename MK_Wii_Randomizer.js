const widget = new ListWidget();

let text = widget.addText("Test");
text.font = Font.systemFont(36);
text.textColor = color.white();

Script.setWidget(widget);
Script.complete();

// for preview
widget.presentMedium();