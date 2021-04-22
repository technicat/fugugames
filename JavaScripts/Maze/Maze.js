/* Copyright (c) 2007-20011 Technicat, LLC */

#pragma strict
#pragma downcast
#pragma implicit

// a square plane used for walls, floor, and ceiling
var tile:GameObject;
var tileSize:int = 10; // width and height of each tile

// object to activate once the maze is constructed
var next:GameObject;

// maze dimensions
var height:int = 1;
var width:int = 1;

var instructions:String = "The maze is ready...";

var text:GameObject;

// used for a maze-construction progress indicator
private var tileCounter = 0;

private var facingDown:Quaternion = Quaternion.Euler(180,0,0);

class Room {
	var east:GameObject;
	var west:GameObject;
	var north:GameObject;
	var south:GameObject;
	var floor:GameObject;
	var ceiling:GameObject;
}

private var maze:Room[];

private var mats:Object[];

function Start() {
	mats = Resources.LoadAll("Materials",Material);
	Debug.Log("Loaded "+mats.length+" wall materials");
	maze = new Room[width*height];
	yield StartCoroutine("InstantiateWalls");
	ShowText(instructions);
	FadeText();
	if (next != null) {
		next.active = true;
	}
}

function SetMaterial() {
	var mat:Material = mats[Random.Range(0,mats.length)];
//	tile.GetComponent(MeshRenderer).sharedMaterial=mat;
	for (var i:int=0; i< maze.length; ++i) {
		var room:Room = maze[i];
		room.floor.GetComponent(MeshRenderer).material=mat;
		room.ceiling.GetComponent(MeshRenderer).material=mat;
		room.east.GetComponent(MeshRenderer).material=mat;
		room.west.GetComponent(MeshRenderer).material=mat;
		room.north.GetComponent(MeshRenderer).material=mat;
		room.south.GetComponent(MeshRenderer).material=mat;
	}
}

function ShowText(msg:String) {
	if (text != null) {
		text.guiText.text = msg;
	}
}

function FadeText() {
	if (text != null) {
		var fade:Behaviour = text.GetComponent(GUITextFade);
		fade.enabled = true;
	}
}

function InstantiateWalls() {
	var mid = tileSize/2;
	var pos = new Vector3(0,mid,0);
	for (var x:int =0; x< width; ++x) {
		var xpos:int = x*tileSize;
		for (var y:int =0; y< height; ++y) {
			pos.y=mid;
			var ypos:int = y*tileSize;
			var room = new Room();
				pos.x = xpos;
				pos.z = ypos-mid;
				room.south = InstantiateTile(pos,Quaternion.identity);
				room.south.transform.Rotate(90,0,0);
				pos.x = xpos-mid;
				pos.z = ypos;
				room.west = InstantiateTile(pos,Quaternion.identity);
				room.west.transform.Rotate(0,0,270);
				room.west.transform.Rotate(0,90,0);
			pos.x = xpos;
			pos.z = ypos+mid;
			room.north = InstantiateTile(pos,Quaternion.identity);
			room.north.transform.Rotate(270,0,0);
			room.north.transform.Rotate(0,180,0);
			pos.x = xpos+mid;
			pos.z = ypos;
			room.east =InstantiateTile(pos,Quaternion.identity);
			room.east.transform.Rotate(0,0,90);
			room.east.transform.Rotate(0,270,0);
			// ceiling
			pos.x = xpos;
			pos.z = ypos;
			pos.y = 0;
			room.floor = InstantiateTile(pos,Quaternion.identity);
			// floor
			pos.y = tileSize;
			room.ceiling = InstantiateTile(pos,facingDown);
			maze[MazeIndex(x,y)]=room;
			ShowProgress();
			yield;
		}
	}
}

function ShowProgress() {
	var walls:float = 6.0; // doubleside ? 4.0 : 6.0;
	var total:float = height*width*walls;
	var progress:float = tileCounter/total;
	ShowText(progress.ToString("maze generated: #0%"));	
}

function InstantiateTile(pos:Vector3,rot:Quaternion):GameObject {
	++tileCounter;
	return Instantiate(tile,pos,rot);
}

function MakeMaze() {
	ClearMaze();
	SetMaterial();
	SetOuterWalls();
	SubDivideMaze(0,width-1,0,height-1);
}

function ClearMaze() {
	for (var i:int=0; i< maze.length; ++i) {
		var room:Room = maze[i];
			SetWall(room.west, false);
			SetWall(room.east, false);
			SetWall(room.north, false);
			SetWall(room.south, false);
	}
}

function SubDivideMaze(left:int,right:int,bottom:int,top:int) {
	if (left!=right && bottom != top) {
		var x:int = Random.Range(left,right);
		var leftdoor:int = Random.Range(left,x+1);
		var rightdoor:int = Random.Range(x+1,right+1);
		var y:int = Random.Range(bottom,top);
		var bottomdoor:int = Random.Range(bottom,y+1);
		var topdoor:int = Random.Range(y+1,top+1);
		AddNorthWall(left,right,y);
		AddEastWall(bottom,top,x);
		var doors = Random.value;
		if (doors < 0.25) {
			SetNorthWall(MazeIndex(leftdoor,y),false);
			SetNorthWall(MazeIndex(rightdoor,y),false);
			SetEastWall(MazeIndex(x,bottomdoor),false);
		} else {
			if (doors < 0.5) {
				SetNorthWall(MazeIndex(leftdoor,y),false);
				SetNorthWall(MazeIndex(rightdoor,y),false);
				SetEastWall(MazeIndex(x,topdoor),false);
			} else {
					if (doors < 0.75) {
						SetNorthWall(MazeIndex(rightdoor,y),false);
						SetEastWall(MazeIndex(x,bottomdoor),false);
						SetEastWall(MazeIndex(x,topdoor),false);
					} else {
							SetNorthWall(MazeIndex(leftdoor,y),false);
							SetEastWall(MazeIndex(x,bottomdoor),false);
							SetEastWall(MazeIndex(x,topdoor),false);
					}
			}
		}
		SubDivideMaze(left,x,y+1,top);
		SubDivideMaze(x+1,right,y+1,top);
		SubDivideMaze(left,x,bottom,y);
		SubDivideMaze(x+1,right,bottom,y);
	}
}

function SetOuterWalls() {
	AddNorthWall(0,width-1,height-1);
	AddSouthWall(0,width-1,0);
	AddEastWall(0,height-1,width-1);
	AddWestWall(0,height-1,0);
	SetNorthWall(MazeIndex(Random.Range(0,width-1),height-1),false);
}

function MazeIndex(x:int,y:int):int {
	return y*width+x;
}

function SetWall(wall:GameObject,visible:boolean) {
	if (wall.active !=visible) // Unity can choke after lots of activations
		wall.active = visible;
}

function SetNorthWall(room:int,visible:boolean) {
	SetWall(maze[room].north,visible);
	var neighbor:int = RoomNorth(room);
	if (neighbor !=-1) {
		SetWall(maze[neighbor].south,visible);
	}
}

function SetSouthWall(room:int,visible:boolean) {
	SetWall(maze[room].south,visible);
	var neighbor:int = RoomSouth(room);
	if (neighbor !=-1) {
		SetWall(maze[neighbor].north,visible);
	}
}

function SetEastWall(room:int,visible:boolean) {
	SetWall(maze[room].east,visible);
	var neighbor:int = RoomEast(room);
	if (neighbor !=-1) {
		SetWall(maze[neighbor].west,visible);
	}
}

function SetWestWall(room:int,visible:boolean) {
	SetWall(maze[room].west,visible);
		var neighbor:int = RoomWest(room);
		if (neighbor !=-1) {
			SetWall(maze[neighbor].east,visible);
		}
}

function AddNorthWall(left:int,right:int,y:int) {
	for (var hwall:int = left; hwall<=right; ++hwall) {
			SetNorthWall(MazeIndex(hwall,y),true);
		}
}

function AddEastWall(bottom:int,top:int,x:int) {
	for (var vwall:int = bottom; vwall<=top; ++vwall) {
		SetEastWall(MazeIndex(x,vwall),true);
	}
}

function AddSouthWall(left:int,right:int,y:int) {
	for (var hwall:int = left; hwall<=right; ++hwall) {
		SetSouthWall(MazeIndex(hwall,y),true);
	}
}

function AddWestWall(bottom:int,top:int,x:int) {
	for (var vwall:int = bottom; vwall<=top; ++vwall) {
		SetWestWall(MazeIndex(x,vwall),true);
	}
}

function RoomEast(index:int) {
	var y:int = index/width;
	var x:int = index-y*width;
	if (x==width-1) {
		return -1;
	} else {
		return MazeIndex(x+1,y);
	}
}

function RoomWest(index:int) {
	var y:int = index/width;
	var x:int = index-y*width;
	return RoomWest(x,y);
}

function RoomWest(x:int, y:int) {
	if (x==0) {
		return -1;
	} else {
		return MazeIndex(x-1,y);
	}
}

function RoomNorth(index:int) {
	var y:int = index/width;
	var x:int = index-y*width;
	if (y==height-1) {
		return -1;
	} else {
		return MazeIndex(x,y+1);
	}
}

function RoomSouth(index:int) {
	var y:int = index/width;
	var x:int = index-y*width;
	return RoomSouth(x,y);
}

function RoomSouth(x:int, y:int) {
	if (y==0) {
		return -1;
	} else {
		return MazeIndex(x,y-1);
	}
}

function GetRoom(x:int,y:int) {
	return maze[MazeIndex(x,y)];
}



