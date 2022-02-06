function Start() {
	GetComponent.<GUIText>().text = InfoText();
//	Debug.Log(InfoText());
}
/*
function Update() {
	Debug.Log(InfoText());
}
*/
static function InfoText() {
	return "Device ID: "+SystemInfo.deviceUniqueIdentifier+"\n"+
		SystemInfo.deviceModel+"\n"+
		SystemInfo.operatingSystem+" "+SystemInfo.systemMemorySize + "MB\n"+
		SystemInfo.processorCount+" "+SystemInfo.processorType+"\n"+
		SystemInfo.graphicsDeviceName+" "+SystemInfo.graphicsMemorySize+"MB\n"+
		Screen.width+"x"+Screen.height+" pixels\n"+
		"Multitouch "+(Input.multiTouchEnabled ? "yes" : "no")+
		" Gyroscope "+(SystemInfo.supportsGyroscope ? "yes" : "no")+"\n"+
		Application.systemLanguage.ToString();
}