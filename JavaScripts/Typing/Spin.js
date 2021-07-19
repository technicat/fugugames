/* Copyright (c) 2007 Technicat, LLC */

var rotateX = 0.0;
var rotateY = 0.0;
var rotateZ = 0.0;

function Update() {
  transform.Rotate(rotateX*Time.deltaTime,rotateY*Time.deltaTime,rotateZ*Time.deltaTime, Space.World);
}
