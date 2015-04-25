#pragma strict

var ps : ParticleSystem;
var particles : ParticleSystem.Particle[];

function Start () {
	ps = GetComponent.<ParticleSystem>();
	
	ps.startSpeed = 0;
	ps.emissionRate = 0;
	
	var i = 0;
	var starPositions = new Vector3[10000];
	var starColors = new Color32[starPositions.length];
	var starSizes = new float[starPositions.length];
	for(i=0; i<starPositions.length; i++) {
		var theta = 6.283185308*Random.value;
		var phi = 6.283185308*Random.value;
		var r = 500*Random.value+100;
		starPositions[i] = Vector3(r*Mathf.Sin(theta)*Mathf.Cos(phi), r*Mathf.Sin(theta)*Mathf.Sin(phi), r*Mathf.Cos(theta));
		starColors[i] = Color32(255, 255, 255, 255);
		starSizes[i] = 10*Random.value;
	}
	
	for(i=0; i<starPositions.length; i++) {
		ps.Emit(starPositions[i], Vector3(0, 0, 0), starSizes[i], Mathf.Infinity, starColors[i]);
	}
	
	
	particles = new ParticleSystem.Particle[ps.maxParticles];
}

function Update () {

}

