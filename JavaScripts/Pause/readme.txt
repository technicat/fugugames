This code is made available under the MIT License (see the LICENSE file in this distribution).

This pause menu is a variant of one I put on the Unify community wiki a few years ago. Features dependent on Unity Pro have been commented out (the image effect and movie). I added #pragma strict to make it a little easier to port to mobile if you want to. It's implemented with UnityGUI and pauses by setting Time.timeScale to zero, which will effectively pause any physics, animation, any calls to FixedUpdate and any Update code dependent on Time.timeScale (although that seems unreliable if you start the game paused). It also sets AudioListener.pause to pause any sounds.

To use, just attach the FuguPause.js script to an object in the scene. I normally drag it to the Main Camera because the image filter code (that is commented out) assumed that.

In the inspector, the "startPaused" option determines whether the menu starts up in the beginning, the "allowPaused" option determines whether the game can be paused by hitting the ESC key (sounds weird, but maybe you want to just have the menu in the beginning. You can change various text like the stated goal and credit information.

To customize how the pause menu is invoked, e.g. replace the ESC key with another or a button (see the Unity Manual UnityGUI walkthrough on how to create a button), change the OnGUI function. To add other pause behavior you can customize the PauseGame and UnPauseGame functions. The script also has a static IsGamePaused script so you can call that from anywhere to check if the game is paused and you should avoid running some code (see the FuguRotatePause.js script in the demo scene).

The "mat" property in the script is the material used for rendering the FPS graph that you can toggle on in the Stats option. As in the demo scene, I just assign a vertex-lit material to it.

A project with the menu in a sample scene is on the Unity Asset Store. The waterfall sound in the sample scene is taken from the Unity Technologies Sewer Demo.

Please direct any questions to the Fugu Games Facebook page,
http://facebook.com/fugugames or either the Fugu Games thread in the Unity
forums Asset Store topic or the Pause Menu thread in the UnityGUI topic. (See the Asset Store description for links)
