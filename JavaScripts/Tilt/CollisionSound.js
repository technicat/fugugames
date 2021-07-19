/* Copyright (c) 2008 Technicat, LLC */

private var audioThreshold = 0.0;

private var audioScale = 1000.0;

function OnCollisionEnter(collision : Collision) {
	var myvolume = collision.relativeVelocity.sqrMagnitude;
	if (myvolume > audioThreshold) {
		GetComponent.<AudioSource>().Play();
	}
}