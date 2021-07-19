var start:Vector3;


function Update () {
	if (transform.localPosition.y<0) {
		FindObjectOfType(Maze).MakeMaze();
		transform.localPosition = start;
	}
}
