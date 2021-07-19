
function Update () {
	if (!Options.IsGamePaused() && Input.GetButtonDown("Fire1")) {
		light.enabled = !light.enabled;
	}
}