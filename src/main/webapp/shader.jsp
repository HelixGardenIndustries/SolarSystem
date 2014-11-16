<script id="vertexShader" type="x-shader/x-vertex">
varying vec2 vUv;
void main()
{
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}
</script>

<!-- fragment shader a.k.a. pixel shader -->
<script id="fragmentShader" type="x-shader/x-vertex">
uniform sampler2D baseTexture;
uniform float baseSpeed;
uniform sampler2D noiseTexture;
uniform float noiseScale;
uniform float alpha;
uniform float time;

varying vec2 vUv;
void main()
{
	vec2 uvTimeShift = vUv + vec2( -0.7, 1.5 ) * time * baseSpeed;
	vec4 noiseGeneratorTimeShift = texture2D( noiseTexture, uvTimeShift );
	vec2 uvNoiseTimeShift = vUv + noiseScale * vec2( noiseGeneratorTimeShift.r, noiseGeneratorTimeShift.b );
	vec4 baseColor = texture2D( baseTexture, uvNoiseTimeShift );

	baseColor.a = alpha;
	gl_FragColor = baseColor;
}
</script>
