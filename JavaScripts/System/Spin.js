/* Copyright (c) 2007 Technicat, LLC */

var rotate:Vector3;

function Update() {
  transform.Rotate(rotate*Time.deltaTime);
}
