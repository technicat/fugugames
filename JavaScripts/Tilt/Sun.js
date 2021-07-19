/* Copyright (c) 2007-2008 Technicat, LLC */

var timeScale:float = 1;
var nightColor:Color = Color.black;
var dayColor:Color = Color.white;
var origin:Vector3 = Vector3.zero;
var intensity:float = 1;
//var daynight:boolean = true;

// noon to midnight - 1.0 - -1.0
static var time = 1.0;

//static var daytime = true;

function Update () {
	var angle = timeScale*Time.deltaTime;
//	var cross = Vector3.Cross(transform.position,Vector3.up);
	transform.RotateAround(Vector3.zero,Vector3.left,angle);
	transform.LookAt(origin);
	time = Vector3.Dot(transform.position.normalized,Vector3.up);
	if (time>0) {
		GetComponent.<Light>().intensity = time*intensity;
	//	daytime = true;
		RenderSettings.ambientLight = Color.Lerp(nightColor,dayColor,time);
	//	Camera.main.GetComponent(Skybox).material.SetColor("_Tint",Color.Lerp(nightTint,dayTint,dot));
	//	Camera.main.GetComponent(Skybox).material.SetFloat("_Blend",(dot+1.0)/2.0);
	} else {
		GetComponent.<Light>().intensity = 0;
	//	if (daytime) {
	//		daytime = false;
	//	}
	}
	RenderSettings.skybox.SetFloat("_Blend",(time+1.0)/2.0);
//	if (daynight) {
//		light.enabled= daytime;
//	}
	
//	moon.renderer.material.SetColor("_Color",Color.Lerp(nightTint,dayTint,Mathf.Abs((time-1.0/2.0))));

	//Camera.main.GetComponent(Skybox).material.SetColor("_Tint",Color.Lerp(nightTint,dayTint,Mathf.Abs(dot)));

}
				
