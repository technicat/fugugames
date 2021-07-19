/* Copyright (c) 2007 Technicat, LLC */

var destroyDepth:float;

var splashDepth:float;

var splash:AudioClip;

static var balls = 0;

function OnEnable() {
	balls++;
	if (balls == 5 || balls == 10) {
	#if UNITY_IOS
		Fugu.GameCenter.Achievement("com.technicat.fugutilt.ball"+balls,100);
		#endif
	}
}

function Update() {
	if (transform.position.y < splashDepth && splash != null) {
		GetComponent.<AudioSource>().PlayOneShot(splash);
		splash = null;
	}
	if (transform.position.y < destroyDepth) {
		Destroy(gameObject);
		balls--;
	}
}

