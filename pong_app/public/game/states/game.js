Pong.Game = function(game)
{
    // Game objects
    this.ball;
    this.player1;
    this.player2;
    // Game Score
    this.player1_score;
    this.player2_score;
    // Game World
    this.world;
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
        this.player1.addComponent(new Pong.Components.Velocity(25, 0));
        this.player1.addComponent(new Pong.Components.Graphic(
            this.add.image(100, 100, 'paddle_1')));
        
        // Player 2
        this.player2 = new CES.Entity();
        this.player2.addComponent(new Pong.Components.Position(700, 100));
        this.player2.addComponent(new Pong.Components.Velocity(0, 0));
        this.player2.addComponent(new Pong.Components.Graphic(
            this.add.image(700, 100, 'paddle_2')));
        console.log('Let the games begin!');
        
        /**
         * Define the systems that will be updated on each
         * tick of the game.
         */
        var InputSystem = CES.System.extend({
            update: function(dt)
            {

            }
        });

        var MovementSystem = CES.System.extend({
            update: function (dt)
            {
                var entities, pos, vel;
                entities = this.world.getEntities('position', 'velocity');

                entities.forEach(function (entity) {
                    pos = entity.getComponent('position');
                    vel = entity.getComponent('velocity');
                    pos.x += vel.x * dt;
                    pos.y += vel.y * dt;
                });
            }
        });

        var GraphicSystem = CES.System.extend({
            update: function (dt)
            {
                var entities, pos, graphic;
                entities = this.world.getEntities('position', 'graphic');

                entities.forEach(function (entity) {
                    pos = entity.getComponent('position');
                    graphic = entity.getComponent('graphic');
                    graphic.graphic.x = pos.x;
                    graphic.graphic.y = pos.y;
                });
            }

        });

        var CollisionSystem = CES.System.extend({
            update: function (dt)
            {

            }
        });

        /**
         * Create the game world and add all the Entities
         * and Systems.
         */
        this.world = new CES.World();
        this.world.addEntity(this.player1);
        this.world.addEntity(this.player2);
        this.world.addEntity(this.ball);
        this.world.addSystem(new InputSystem());
        this.world.addSystem(new MovementSystem());
        this.world.addSystem(new CollisionSystem());
        this.world.addSystem(new GraphicSystem());
    },
    
    update: function()
    {
        this.world.update(this.time.elapsed/1000);
    }
};