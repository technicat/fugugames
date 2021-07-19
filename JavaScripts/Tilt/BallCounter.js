/* Copyright (c) 2007 Technicat, LLC */


function Update() {
	if (Ball.balls == 1) {
		GetComponent.<GUIText>().text = "1 ball in the air";
	} else {
		GetComponent.<GUIText>().text = Ball.balls+" balls in the air";
	}
}
