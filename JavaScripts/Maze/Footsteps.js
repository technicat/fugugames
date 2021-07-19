var audioStepLength:float = 0.3;
var walkSounds:AudioClip[];
var minvel:float = 0.1;

static var playfootsteps:boolean = true;

function Start ()
{
	var controller : CharacterController = GetComponent(CharacterController);

	while (true)
	{
		if (playfootsteps && !GetComponent.<AudioSource>().isPlaying && 
		controller.isGrounded && 
		controller.velocity.magnitude > minvel)
		{
			GetComponent.<AudioSource>().clip = walkSounds[Random.Range(0, walkSounds.length)];
			GetComponent.<AudioSource>().Play();
			yield WaitForSeconds(audioStepLength);
		}
		else
		{
			yield;
		}
	}
}

