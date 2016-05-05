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
        var style = {font: "16px Arial", fill: "#84C103", align: "center"}
        this.main_text = this.add.text(200, 200, "Ayyyy lmao", style);
        
    },
    
    update: function()
    {
        
    }
};