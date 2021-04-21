using UnityEngine;
using System.Collections;
using UnityEditor;

using System.Linq;

namespace Fugu.Editor {


public class Screenshot {

	[MenuItem (FuguGamesMenu.Menu+"/Screenshot/Take")]
	static void Take() {
		ScreenCapture.CaptureScreenshot("unityscreenshot.png");
	}

		

}
}