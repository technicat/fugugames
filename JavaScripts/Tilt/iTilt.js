/* Copyright (c) 2008 Technicat, LLC */

#if !UNITY_EDITOR && (UNITY_IOS || UNITY_ANDROID)

private var xSpeed = -2.0;
private var ySpeed = -2.0;


function FixedUpdate() {
	for (var i:int = 0; i < Input.touchCount; ++i) {
		var touch:Touch = Input.GetTouch(i);
			if (touch.phase == TouchPhase.Moved) {
			// Get movement of the finger in last frame
			var touchPositionDelta:Vector2 = Input.GetTouch(i).deltaPosition;
			var x = transform.eulerAngles.x+ySpeed*(touchPositionDelta.y/Screen.height)/Time.deltaTime; // vertical rotates around x axis
			var y = transform.eulerAngles.y+xSpeed*(touchPositionDelta.x/Screen.width)/Time.deltaTime; // horizontal rotates around y axis
			gameObject.GetComponent.<Rigidbody>().rotation = Quaternion.Euler(x,y, 0);
		}
	}
}
#endif

#if UNITY_EDITOR || (!UNITY_IOS && !UNITY_ANDROID)
private var yMinLimit = -20;
private var yMaxLimit = 80;

private var x = 0.0;
private var y = 0.0;

private var xSpeed = 250.0;
private var ySpeed = 120.0;

function Start () {
    var angles = transform.eulerAngles;
    x = angles.y;
    y = angles.x;
}

function FixedUpdate () {
        x += Input.GetAxis("Mouse X") * xSpeed * 0.02;
        y -= Input.GetAxis("Mouse Y") * ySpeed * 0.02;
		
 		y = ClampAngle(y, yMinLimit, yMaxLimit);
 		       
        var rotation = Quaternion.Euler(y, x, 0);
        
        transform.rotation = rotation;
}

function ClampAngle (angle : float, min : float, max : float) {
	if (angle < -360)
		angle += 360;
	if (angle > 360)
		angle -= 360;
	return Mathf.Clamp (angle, min, max);
}

#endif