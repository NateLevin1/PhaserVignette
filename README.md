# PhaserVignette
A pipeline file which allows for the easy integration of vignette shaders into a Phaser3 game. Based on Jerome Renaux's spotlight shader.

View the live demo: https://natelev.in/games/other/Phaser/shaders/vignette/


Quickstart:

Download pipeline.js and import it into your Phaser project.

The shader is added to the scene (in create()) with:
```
this.Vignette = this.game.renderer.addPipeline('Vignette', new Vignette(this.game));
```
It is recommended you use a function to apply the pipeline, but it isn't required, however the rest of the quickstart will assume you did.
Add the following code under the previous statement:
`this.applyPipeline(); `
Your create should now look like this.
```
create(){
  this.Vignette = this.game.renderer.addPipeline('Vignette', new Vignette(this.game));
  this.applyPipeline(); 
...
}

```

# Apply Pipeline Function
Note that every value of these must be satisfied. The defaults for the shader looks like:
```
applyPipeline() {
  this.Vignette.setFloat2('resolution', this.game.config.width, this.game.config.heigt);
  this.Vignette.setFloat1('r',0.2);
  this.Vignette.setFloat1('b',0.9);
  this.Vignette.setFloat1('tx', 0.8);
  this.Vignette.setFloat1('ty', 0.8);
  this.Vignette.setFloat1('bright', 1.0);
  this.Vignette.setFloat1('red', 1.0);
  this.Vignette.setFloat1('green', 1.0);
  this.Vignette.setFloat1('blue', 1.0);
  this.Vignette.setFloat1('bgred', 1.0);
  this.Vignette.setFloat1('bggreen', 1.0);
  this.Vignette.setFloat1('bgblue', 1.0);
  this.cameras.main.setRenderToTexture(this.Vignette);
}
```

*important*:

You might notice that all of the values are float types. This is because GLSL (the shader's language) does not support int->float type conversion. *Make sure all of your values are floats.*

Here is what that amounts to line by line:

`this.Vignette.setFloat2('resolution', this.game.config.width, this.game.config.heigt);`

Sets the resolution for the shader.

`this.Vignette.setFloat1('r',0.2);`

`r` is the radius of the inside of the vignette.

`this.Vignette.setFloat1('b',0.9);`

`b` is the sharpness of the vignette. The higher the number the less sharp.

```
this.Vignette.setFloat1('tx', 0.8);
this.Vignette.setFloat1('ty', 0.8);
```
These control the x and y of the middle of the vignette. I couldn't find a one size fits all solution to this, so just fudge with the numbers until it looks good.

`this.Vignette.setFloat1('bright', 1.0);`

`bright` is the brightness of the scene. The higher the number the brighter.

```
this.Vignette.setFloat1('red', 1.0);
this.Vignette.setFloat1('green', 1.0);
this.Vignette.setFloat1('blue', 1.0);
```
Controls the RGB values of the vignette. 

```
this.Vignette.setFloat1('bgred', 1.0);
this.Vignette.setFloat1('bggreen', 1.0);
this.Vignette.setFloat1('bgblue', 1.0);
```
Controls the RGB values of every pixel, including those not in the vignette. 

I find it looks best when both of the above are used together. Note that changing the above two values to anything other than 1.0 can create some jenky looking results.

`this.cameras.main.setRenderToTexture(this.Vignette);`
This is what applies the shader to the scene.
