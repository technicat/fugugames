using UnityEngine;
using System.Collections;
using UnityEditor;

namespace Fugu {

public class Stats : EditorWindow {

       [MenuItem ("FuguGames/Stats")]
       static void MeshInfo() {
      	 EditorWindow.GetWindow(typeof(Stats));
	}

	public void OnGUI() {	  
		MeshFilter mf = Selection.activeGameObject.GetComponent<MeshFilter>();
		if (mf == null) {
			EditorGUILayout.LabelField(Selection.activeGameObject.name+" No mesh");
		} else {
			Mesh sm = mf.sharedMesh;
			EditorGUILayout.LabelField("shader: "+Selection.activeGameObject.renderer.sharedMaterial.shader.name);
			EditorGUILayout.LabelField("normals: "+sm.normals.Length);
			EditorGUILayout.LabelField("tangents: "+sm.tangents.Length);
			EditorGUILayout.LabelField("colors: "+sm.colors.Length);
			EditorGUILayout.LabelField("uv: "+sm.uv.Length);
			EditorGUILayout.LabelField("uv2: "+sm.uv2.Length);
		}
	}
}
}