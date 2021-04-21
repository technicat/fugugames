using System.Collections;
using System.Collections.Generic;
using UnityEngine;

using UnityEditor;


namespace Fugu.Editor {


	public class Preferences {

		[MenuItem (FuguGamesMenu.Menu+"Preferences/Clear")]
		static void Clear() {
			PlayerPrefs.DeleteAll();
		}
	}
}