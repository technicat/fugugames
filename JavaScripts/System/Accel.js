#pragma strict

function Update() {
	GetComponent.<GUIText>().text = "Accel x: "+Input.acceleration.x+" y: "+Input.acceleration.y+" z: "+Input.acceleration.z;
}