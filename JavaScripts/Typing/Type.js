/* Copyright (c) 2007 Technicat, LLC */
/* Type GUIText */

//static var word:String="";

//function OnGUI () {//	word = GUI.TextField (Rect (25, 25, 100, 30), word);//}
/*
function Update () {
  for (var c : char in Input.inputString) {
    if (c == "\b" && guiText.text.Length != 0) {
      guiText.text = guiText.text.Substring(0, guiText.text.Length - 1);
    } else if (c == "\n") {
    	word = guiText.text;
    	guiText.text = "";
    } else {
      guiText.text += c;
    }
  }  
} */

static var keyboard:TouchScreenKeyboard;

function Start() {
keyboard = TouchScreenKeyboard.Open("", TouchScreenKeyboardType.ASCIICapable,false,false,false,true,"");
}

function Update() {
	if (!keyboard.active) {
		keyboard.text="";
		keyboard.active=true;
	}
}