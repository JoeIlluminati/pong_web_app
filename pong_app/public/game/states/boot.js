var Pong = 
{
    git_gud : 42,
    naw_son : 27
};

Pong.Boot = function(game){};
Pong.Boot.prototype = 
{
    preload: function()
    {
        //TODO: load any assets that the preload state may need here
    },
    
    create: function()
    {
        //TODO: do some app config jawn here.
        this.state.start('Preload');
    },
    
    update: function()
    {
        //TODO: delete maybe, really don't need this here.
    }
};