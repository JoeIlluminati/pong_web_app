Pong.Components = Pong.Components || {};

Pong.Components.Position = CES.Component.extend(
{
    name: 'position',
    
    init: function(x, y)
    {
        this.x = x;
        this.y = y;
    }
});