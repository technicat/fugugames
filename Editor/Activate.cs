using UnityEngine;
using System.Collections;
using UnityEditor;

namespace Fugu.Editor {


public class Activate {

[MenuItem (FuguGamesMenu.Menu+"Active/ActivateRecursively")]
static void ActivateRecursively() {
	if (Selection.activeGameObject !=null) {
		SetActiveRecursively(Selection.activeGameObject,true);
	}
}

[MenuItem (FuguGamesMenu.Menu+"Active/DeactivateRecursively")]
static void DectivateRecursively() {
	if (Selection.activeGameObject !=null) {
		SetActiveRecursively(Selection.activeGameObject,false);
	}
}

static void SetActiveRecursively(GameObject obj,bool val) {
		obj.SetActive(val);
		for (int i=0; i<obj.transform.childCount; ++i) {
				SetActiveRecursively(obj.transform.GetChild(i).gameObject,val);
		}
			
}

[MenuItem (FuguGamesMenu.Menu+"ActivateRecursively", true)]
[MenuItem (FuguGamesMenu.Menu+"DeactivateRecursively", true)]
static bool ValidateGameObject() {
	return (Selection.activeGameObject !=null);
}
}
}