using UnityEngine;
using System.Collections;
using UnityEditor;

using System.Diagnostics;

namespace Fugu.Editor {

public class Say : EditorWindow {

       [MenuItem (FuguGamesMenu.Menu+"Say")]
       static void Init() {
       	EditorWindow.GetWindow(typeof(Say));
	}
		
	private string something = "";

	public void OnGUI() {

	       something = EditorGUILayout.TextArea(something);  
	       if (GUILayout.Button("Say it")) {
	       	  say(something);
	       }
	}
	
		// todo - put this in another script
	static void say(string text) {
		shell("/usr/bin/say",text);
	}
		
	static Process shell(string filename, string arguments)  {
    var p = new Process();
    p.StartInfo.Arguments = arguments;
    p.StartInfo.CreateNoWindow = true;
    p.StartInfo.UseShellExecute = false;
    p.StartInfo.RedirectStandardOutput = true;
    p.StartInfo.RedirectStandardInput = true;
    p.StartInfo.RedirectStandardError = true;
    p.StartInfo.FileName = filename;
    p.Start();
    return p;
}
}
}