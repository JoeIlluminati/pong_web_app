Pong.Menu = function(game)
{
    this.main_text;
};

Pong.Menu.prototype = 
{
    preload: function()
    {
        
    },
    
    create: function()
    {
        var style = {font: "32px Arial", fill: "#84C103", align: "center"}
        this.main_text = this.add.text(310, 200, "Pong: Multiplayer Edition", style);
        
    },
    
    update: function()
    {
        
    }
};