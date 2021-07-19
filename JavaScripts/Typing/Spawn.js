/* Copyright (c) 2007-2008 Technicat, LLC */

//import UAP;

var target : GameObject;

private var initialInterval = 2.0;
private var interval = 5.0;

public var offset:Vector3;

private var fonts: Object[];

function Start () {
	fonts = Resources.LoadAll("Fonts/Categorized/Classic",Font);
	Debug.Log("loaded "+fonts.length+" fonts");
	//offset = new Vector3(0,0,0);
	Invoke("DropBall",initialInterval);
}

function DropBall() {
var difficulty = 1; // script.GetScore();

	var aspect = Camera.main.aspect; 
	var wordlist:Object[];
//	gameObject.FindWithTag("water").renderer.material.SetFloat("_WaveScale",Mathf.Lerp(0.02,0.15,difficulty));
	wordlist = Fugu.Words.English[Random.Range(0,difficulty*Fugu.Words.English.length-1)];
	var text:String = wordlist[Random.Range(0,wordlist.length-1)];
	var randomOffset = aspect*(15-text.length);

	offset.x = Random.Range(-randomOffset,randomOffset);
	var word:GameObject = Instantiate(target,transform.position+offset, transform.rotation);
	var font:Font = fonts[Random.Range(0,fonts.length-1)];
	var textmesh:TextMesh = word.GetComponent(TextMesh);
	textmesh.font = font;
	word.GetComponent.<Renderer>().materials[0]=font.material;
	word.GetComponent.<Renderer>().sharedMaterial=font.material;
//	var script:Score = gameObject.Find("Score").GetComponent(Score);
//	var difficulty = script.GetScore();
	
	textmesh.text = text;
//	UAP_AccessibilityManager.Say(text,true,true,UAP_AudioQueue.EInterrupt);
//	Options.say(text);
	
//	word.gameObject.SetActiveRecursively(false);
	word.gameObject.SetActive(true);
	Invoke("DropBall",interval);
}

