using UnityEngine;
using System.Collections;
using UnityEditor;

namespace Fugu.Editor {

public class Build : EditorWindow {

       [MenuItem (FuguGamesMenu.Menu+"Builds")]
       static void Init() {
       	EditorWindow.GetWindow(typeof(Build));
	}

		public void OnGUI() {
		 LayoutTarget(BuildTarget.iOS);
			 LayoutTarget(BuildTarget.Android);
			LayoutTarget(BuildTarget.StandaloneWindows);
			LayoutTarget(BuildTarget.StandaloneWindows64);
			LayoutTarget(BuildTarget.StandaloneOSX);
			LayoutTarget(BuildTarget.StandaloneLinux);
			LayoutTarget(BuildTarget.StandaloneLinux64);
			LayoutTarget(BuildTarget.StandaloneLinuxUniversal);
			LayoutTarget(BuildTarget.tvOS);
		}
		
		private void LayoutTarget(BuildTarget target) {
			string path = EditorUserBuildSettings.GetBuildLocation(target);
			if (!System.String.IsNullOrEmpty(path)) {
				EditorGUILayout.BeginHorizontal();
				string name = target.ToString();
				if (EditorUserBuildSettings.activeBuildTarget == target) {
					name = name + " (current)";
				};
				EditorGUILayout.LabelField(name);
	     	  	if (System.IO.File.Exists(path) || System.IO.Directory.Exists(path)) {
					if (GUILayout.Button("Delete Build")) {
	       		  		FileUtil.DeleteFileOrDirectory(path);
					}
	      	 	}
				EditorGUILayout.EndHorizontal();
				EditorGUILayout.LabelField(path);  	
			}
	}
}
}