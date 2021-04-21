using UnityEngine;
using System.Collections;
using UnityEditor;

namespace Fugu.Editor {

public class SceneStats : EditorWindow {
		
	public int tris = 0;
	public int verts = 0;
	public int gos = 0;

    [MenuItem (FuguGamesMenu.Menu+"Stats/Scene")]
       static void Stats() {
      	 EditorWindow.GetWindow(typeof(SceneStats));
	}

	public void OnGUI() {
		EditorGUILayout.LabelField ("GameObjects: "+gos);
		EditorGUILayout.LabelField ("tris: "+tris);
		EditorGUILayout.LabelField ("verts"+verts);
	}
		
	void GetObjectStats() {
		verts = 0;
		tris = 0;
		Object[] ob = Object.FindObjectsOfType(typeof(GameObject));
		foreach (GameObject obj in ob) {
			if (obj.activeSelf) {
				GetObjectStats(obj);
			}
		}
	}

	void GetObjectStats(GameObject obj) {
		++gos;
		Component[] filters = obj.GetComponentsInChildren(typeof(MeshFilter));
		foreach (MeshFilter f in filters )
		{
    		tris += f.sharedMesh.triangles.Length/3;
  			verts += f.sharedMesh.vertexCount;
		}
	}
}
}