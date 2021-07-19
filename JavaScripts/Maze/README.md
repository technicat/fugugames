This code is available under the MIT License (see the LICENSE file).

[Fugu Maze](https://technicat.itch.io/fugumaze) started out as an exercise in implementing a maze-generation algorithm I found on the Maze Generation article in Wikipedia but turned out to be moderately popular as a Mac widget and iOS/Android  app (note this project does not include the code specific to the mobile versions). It's also available on several Unity game portals.

The maze generation takes place in Maze.js, which is attached to the Maze game object. (The script is also on the Unify Community wiki) The script constructs a grid of cells, each one a "Room" with four walls, floor and ceiling, and uses a prefab textured plane for each of those, then selectively removes walls until there is a path from any one room to another. The "size" property is set to 5 for a 5x5 (five rooms by five rooms) maze and can be adjusted, but of course larger mazes have greater performance (mostly rendering) requirements.

The script was originally contributed on the Unity wiki, http://wiki.unity3d.com/ and a sample maze project with first-person navigation is on the Asset Store.



