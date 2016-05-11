Pong.Menu = function(game)
{
    this.main_text;
    this.play_button;
};

Pong.Menu.prototype = 
{
    preload: function()
    {
        
    },
    
    create: function()
    {
        var style = {font: "32px Arial", fill: "#84C103", align: "center"}
        this.main_text = this.add.text(this.world.centerX - 150, this.world.centerY - 200,
                            "Pong: Multiplayer Edition", style);
        this.play_button = this.add.button(0, 0, 'play_button', this.onPlayPress, this);
        this.play_button.position.x = this.world.centerX - this.play_button.width/2;
        this.play_button.position.y = this.world.centerY - this.play_button.height/2;
    },
    
    update: function()
    {
        
    },
    
    onPlayPress: function()
    {
        this.state.start('Game');
    }
};