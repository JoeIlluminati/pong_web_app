Pong.Preload = function(game){};
Pong.Preload.prototype = 
{
    preload: function()
    {
        this.load.image('paddle_1', Pong.asset_path + '/images/paddle.png')
        this.load.image('paddle_2', Pong.asset_path + '/images/glasspaddle2.png')
        this.load.image('ball', Pong.asset_path + '/images/ball.png');
    },
    
    create: function()
    {
        this.state.start('Menu');
    },
    
    update: function()
    {
        
    }
};