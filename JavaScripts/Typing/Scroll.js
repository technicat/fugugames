/* Copyright (c) 2007 Technicat, LLC */

var minspeed = 1.0;
var maxspeed = 10.0;
var range = 10.0;

var color = Color.yellow;

private var trans:Vector3;

function Start() {
	GetComponent.<Renderer>().material.color = color;
	var script:AvgScore = gameObject.Find("Score").GetComponent(AvgScore);
	var difficulty = script.GetScore();
	var z:float = Random.Range(minspeed,maxspeed*difficulty+minspeed);
	trans = new Vector3(0,0,-z);
}

function Update() {
	if (transform.localPosition.z < range) {
		AvgScore.failure+=1;
		Destroy(gameObject);
	} else {
  	transform.Translate(trans*Time.deltaTime, Space.World);
	}
}
