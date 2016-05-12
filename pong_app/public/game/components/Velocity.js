Pong.Components = Pong.Components || {};

Pong.Components.Velocity = CES.Component.extend(
{
    name: 'velocity',
    
    init: function(x, y)
    {
        this.x = x;
        this.y = y;
    }
});