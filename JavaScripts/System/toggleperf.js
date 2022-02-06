var objects:GameObject[];

private var index = 0;
private var inc = 1;

function Update() {
	if (Input.GetMouseButtonDown(0)) {
	    if (index == objects.length) {
		inc=-1;
		index = objects.length-1;
	    }
		if (index == -1) {
			inc = 1;
			index = 0;
		}
		objects[index].SetActiveRecursively(inc==1);
		index = index+inc;
	 }
}