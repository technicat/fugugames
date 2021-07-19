var cameras:Transform[];

private var current:int = 0;

function OnGUI () {
	if (GUI.Button(Rect(Screen.width-130,Screen.height-100,100,30),"Switch Camera")) {
		if (++current >= cameras.length) {
			current = 0;
		}
		transform.localPosition = cameras[current].localPosition;
		transform.localRotation = cameras[current].localRotation;
	}
}