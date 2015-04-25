#pragma strict

function Start () {
	var sphere : GameObject = GameObject.CreatePrimitive(PrimitiveType.Sphere);
	sphere.transform.position = Vector3(0, 0, 0);
	var color = 5;
	Debug.Log("I am alive!");
	if (color == 0) {
    	sphere.GetComponent.<Renderer>().material.color = Color(155/255, 176/255, 255/255);
	} else if (color == 1) {
    	sphere.GetComponent.<Renderer>().material.color = Color(170/255, 191/255, 255/255);
	} else if (color == 2) {
    	sphere.GetComponent.<Renderer>().material.color = Color(202/255, 215/255, 255/255);
	} else if (color == 3) {
    	sphere.GetComponent.<Renderer>().material.color = Color(248/255, 247/255, 255/255);
	} else if (color == 4) {
    	sphere.GetComponent.<Renderer>().material.color = Color(255/255, 244/255, 234/255);
	} else if (color == 5) {
    	sphere.GetComponent.<Renderer>().material.color = Color(255/255, 210/255, 161/255);
	} else {
    	sphere.GetComponent.<Renderer>().material.color = Color(255/255, 204/255, 111/255);
	} 
	
}
function Update () {

}