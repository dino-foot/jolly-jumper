phaser-screen-shake
===================

The plugin for Phaser HTML5 game framework to add screen shake fx

Demo
===================
You can see it in action [here](http://dmaslov.github.io/super-coin-box "Super Coin Box"). Just let the player die or jumping up on an enemy.

Usage
===================
In your create method, add the plugin to the game:

```
game.plugins.screenShake = game.plugins.add(Phaser.Plugin.ScreenShake);
```

in function where need to call shake FX:

if need to replace default plugin settings
```
game.plugins.screenShake.setup({
 shakeX: true,
 shakeY: false
});
```

And pass shake count value:

```
game.plugins.screenShake.shake(10);
```

Available settings
===================
- shakesCount: [number] - count of short camera movements
- shakeX: [bool] - shake the screen by x
- shakeY: [bool] true - shake the screen by y
- sensCoef: [number/float] - shake sensitivity coefficient


License
===================
The [MIT](https://github.com/dmaslov/super-coin-box/blob/master/LICENSE "The MIT License") License (MIT)
