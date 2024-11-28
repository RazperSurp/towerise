class Buff{
    DEBUFF = {
        FIRE: {
            DAMAGE: 999,
            TIME: 2,
        },
        SLOWDOWN: {
            DAMAGE: 0,
            REDUCING_MOVEMENT_SPEED: 0.4,
            TIME: 5,
        },
        STUN: {
            DAMAGE: 0,
            STUN_TIME: 1,
            TIME: 3,
        },
        POISON: {
            DAMAGE: 1,
            TIME: 40,
        },
    }   
    BUFF = {
        FIRE_RATE: {
            FIRE_RATE_BOOST: 0.2,
        },
        DAMAGE: {
            DAMAGE_BOOST: 0.2,
        },
        RANGE: {
            RANGE_BOOST: 1,
        },
        MULTISHOT: {            
            PROJECTILES_BOOST: 1,
        },
        SPLASH: {
            SPLASH_BOOST: 1,
        },
    }
}