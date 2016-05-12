Pong.Game = function(game)
{
    this.ball;
    this.player1;
    this.player2;
    this.player1_score;
    this.player2_score;
};
Pong.Game.prototype = 
{
    preload: function()
    {
        
    },
    
    create: function()
    {
        /**
         * Create all the entities and set thier components
         */
        // Pong ball
        this.ball = new CES.Entity();
        this.ball.addComponent(new Pong.Components.Position(200, 300));
        this.ball.addComponent(new Pong.Components.Velocity(0, 0));
        this.ball.addComponent(new Pong.Components.Graphic(
            this.add.image(200, 300, 'ball')));
        
        // Player 1
        this.player1 = new CES.Entity();
        this.player1.addComponent(new Pong.Components.Position(100, 100));
        this.player1.addComponent(new Pong.Components.Velocity(0, 0));
        this.player1.addComponent(new Pong.Components.Graphic(
            this.add.image(100, 100, 'paddle_1')));
        
        // Player 2
        this.player2 = new CES.Entity();
        this.player2.addComponent(new Pong.Components.Position(700, 100));
        this.player2.addComponent(new Pong.Components.Velocity(0, 0));
        this.player2.addComponent(new Pong.Components.Graphic(
            this.add.image(700, 100, 'paddle_2')));
        console.log('Let the games begin!');
    },
    
    update: function()
    {
        
    }
};