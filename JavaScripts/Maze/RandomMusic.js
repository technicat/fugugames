var clips : AudioClip[];
var minInt = 10;
var maxInt = 30;

static var playsuspense:boolean = true;

function Start (){
	PlaySongs ();
}

function PickRandomSong () : AudioClip {
	var index : int= Random.Range(0, clips.length);
	return clips[index];
}

function PlaySongs (){
	while (true){
		yield WaitForSeconds(Random.Range(minInt,maxInt));
		var clip : AudioClip = PickRandomSong ();
		if (playsuspense && clip != null){
			GetComponent.<AudioSource>().clip = clip;
			GetComponent.<AudioSource>().Play();
			yield WaitForSeconds(clip.length);
		}
		yield;
}}

@script RequireComponent(AudioSource)