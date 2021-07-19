/* Copyright (c) 2007 Technicat, LLC */

var target : Transform;

var initialInterval = 3.0;
var interval = 5.0;

var randomOffset =5.0;

function Start () {
	InvokeRepeating("DropBall",initialInterval,interval);
}

function DropBall() {
	var offset = new Vector3(Random.Range(-randomOffset,randomOffset),0,
		Random.Range(-randomOffset,randomOffset));
	Instantiate(target,transform.position+offset, transform.rotation);
//	BallCounter.balls++;
}