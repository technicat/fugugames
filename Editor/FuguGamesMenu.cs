using UnityEngine;
using System.Collections;
using UnityEditor;

using System.Linq;

namespace Fugu.Editor {


public class FuguGamesMenu {

		public const string Menu = "Tools/FuguGames/";

		static public void AddScriptingDefines(BuildTargetGroup targetGroup, string defines) {
			string defs = PlayerSettings.GetScriptingDefineSymbolsForGroup(targetGroup);
			defines += ";"+defs;
			PlayerSettings.SetScriptingDefineSymbolsForGroup(targetGroup,defines);
		}

		static public void ClearScriptingDefines(BuildTargetGroup targetGroup) {
			PlayerSettings.SetScriptingDefineSymbolsForGroup(targetGroup,"");
		}

		static public void ClearAllScriptingDefines() {
			ClearScriptingDefines(BuildTargetGroup.Standalone);
			ClearScriptingDefines(BuildTargetGroup.WebGL);
			ClearScriptingDefines(BuildTargetGroup.Android);
			ClearScriptingDefines(BuildTargetGroup.iOS);
			ClearScriptingDefines(BuildTargetGroup.tvOS);
			ClearScriptingDefines(BuildTargetGroup.WSA);
		}

		static public void SetBuildPath(BuildTarget target, string name) {
			string path = Application.dataPath;
			path = path.Substring(0, path.LastIndexOf("Assets"));
			EditorUserBuildSettings.SetBuildLocation(target,path+"/"+name);
		}

		//  iOS
		// move this to FuguGamesiOS?
		static public void TargetiOS(string file) {
			TargetiOS();
			SetBuildPath(BuildTarget.iOS,file);
		}
		
		
		static public void TargetiOS() {
			PlayerSettings.use32BitDisplayBuffer = true;
			EditorUserBuildSettings.SwitchActiveBuildTarget(BuildTargetGroup.iOS, BuildTarget.iOS);
		}

		static public Texture2D[]iOSicons = new Texture2D[PlayerSettings.GetIconsForTargetGroup(BuildTargetGroup.iOS).Length];

		static public void iOSIcon(string dir, string name, IconKind kind = IconKind.Any) {
			Texture2D icon = AssetDatabase.LoadMainAssetAtPath (dir+"/"+name) as Texture2D;
			int[] sizes = PlayerSettings.GetIconSizesForTargetGroup(BuildTargetGroup.iOS, kind);
			Texture2D[] iOSicons = new Texture2D[sizes.Length];
			for (int i=0; i<iOSicons.Length; ++i) {
				iOSicons[i]=icon;
			}
			PlayerSettings.SetIconsForTargetGroup(BuildTargetGroup.iOS,iOSicons, kind);
		}

		static public void iOSIcon(string dir, string[] names, IconKind kind = IconKind.Any) {
			for (int i=0; i<names.Length; ++i) {
				Texture2D icon = AssetDatabase.LoadMainAssetAtPath (dir+"/"+names[i]) as Texture2D;
				iOSicons[i]=icon;
			}
			PlayerSettings.SetIconsForTargetGroup(BuildTargetGroup.iOS,iOSicons, kind);
		}

		// OSX

		static public void TargetOSX() {
			EditorUserBuildSettings.SwitchActiveBuildTarget(BuildTargetGroup.Standalone, BuildTarget.StandaloneOSX);
		}

		// tvOS

		static public void TargetTV(string file) {
			TargetTV();
			SetBuildPath(BuildTarget.tvOS,file);
		}


		static public void TargetTV() {
			PlayerSettings.use32BitDisplayBuffer = true;
			EditorUserBuildSettings.SwitchActiveBuildTarget(BuildTargetGroup.tvOS, BuildTarget.tvOS);
		}

		// android

		static public void TargetAndroidGeneric(string file) {
			TargetAndroidGeneric();
			SetBuildPath(BuildTarget.Android,file);
		}

		static public void TargetAndroidGeneric() {
			PlayerSettings.use32BitDisplayBuffer = true; // false;
			EditorUserBuildSettings.androidBuildSubtarget = MobileTextureSubtarget.Generic;
			EditorUserBuildSettings.SwitchActiveBuildTarget(BuildTargetGroup.Android,BuildTarget.Android);
		}

		static public void TargetWebGL() {
			EditorUserBuildSettings.SwitchActiveBuildTarget(BuildTargetGroup.WebGL, BuildTarget.WebGL);
		}

		// windows

		static public void TargetWSA() {
			EditorUserBuildSettings.SwitchActiveBuildTarget(BuildTargetGroup.WSA, BuildTarget.WSAPlayer);
		}

		static public void TargetWindows() {
			EditorUserBuildSettings.SwitchActiveBuildTarget(BuildTargetGroup.Standalone, BuildTarget.StandaloneWindows64);
		}

		static public void TargetLinux() {
			EditorUserBuildSettings.SwitchActiveBuildTarget(BuildTargetGroup.Standalone, BuildTarget.StandaloneLinuxUniversal);
		}

}
}