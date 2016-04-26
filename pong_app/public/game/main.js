(function()
{
    // Create the Phaser game object
    var game = new Phaser.Game(960, 640, Phaser.AUTO, 'game');
    
    // Load in all the states for the game
    game.state.add('Boot', Pong.Boot);
    game.state.add('Preload', Pong.Preload);
    game.state.add('Menu', Pong.Menu);
    game.state.add('Game', Pong.Game);
    
    // Boot up the game
    game.state.start('Boot');
})();