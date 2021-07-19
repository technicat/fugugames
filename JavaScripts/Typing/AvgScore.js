static var success = 0.0;
static var failure = 0.0;

function Update () {
	GetComponent.<GUIText>().text = GetScore().ToString("##0%");
}

function GetScore() {
	if (success==0 && failure == 0) {
		return 0;
	} else {
		return success/(success+failure);
	}
}