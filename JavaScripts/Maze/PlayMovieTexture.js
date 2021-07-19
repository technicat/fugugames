
function Start () {
	if (!renderer.sharedMaterial.mainTexture.isPlaying) {
		renderer.sharedMaterial.mainTexture.loop = true;
		renderer.sharedMaterial.mainTexture.Play();
		audio.Play();
	}
}