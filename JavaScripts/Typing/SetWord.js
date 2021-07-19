/* Copyright (c) 2007-2008 Technicat, LLC */

import System.Collections.Generic;

private var fall:MonoBehaviour;
private var textmesh:TextMesh;

// private var voices:List.<U3DXT.iOS.Native.AVFoundation.AVSpeechSynthesisVoice>;

function Awake() {
	fall = GetComponent(Fall);
	textmesh = GetComponent(TextMesh);
/*	U3DXT.iOS.Speech.SpeechXT.settings.voice = U3DXT.iOS.Native.AVFoundation.AVSpeechSynthesisVoice.Voice("en-US");
	U3DXT.iOS.Speech.SpeechXT.settings.pitchMultiplier = 1.0f;
	U3DXT.iOS.Speech.SpeechXT.settings.rate = 0.25f;
	U3DXT.iOS.Speech.SpeechXT.settings.volume = 1.0f; */
	
	//var currentLang = U3DXT.iOS.Speech.SpeechXT.currentLocaleVoice.language;
	/*var allvoices = U3DXT.iOS.Speech.SpeechXT.availableVoices;
	voices = new List.<U3DXT.iOS.Native.AVFoundation.AVSpeechSynthesisVoice>();
	for (var i=0; i<allvoices.Length; i++) {
				if (allvoices[i].language.StartsWith("en-"))
					voices.Add(allvoices[i]);
			} */
		} 

function Update() {
 // if (String.Compare(Type.keyboard.text,textmesh.text,true)==0) {
if (Type.keyboard.text.ToLower()==textmesh.text) {
//  	GetComponent(Scroll).enabled = false;
//U3DXT.iOS.Speech.SpeechXT.settings.voice = voices[Random.Range(0,voices.Count)];
//	U3DXT.iOS.Speech.SpeechXT.Speak(textmesh.text);
  	fall.enabled = true;
	transform.GetChild(0).gameObject.SetActive(true);
	Type.keyboard.text = "";
	Fugu.GameCenter.Achievement("com.technicat.fugutype.letters"+textmesh.text.length,100);
  }
}


