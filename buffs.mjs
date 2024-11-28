class Buff{
    DEBUFFS = {
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
    BUFFS = {
        FIRE_RATE: {
            FIRE_RATE: 0.2,
        },
        DAMAGE: {
            DAMAGE: 0.2,
        },
        RANGE: {
            RANGE: 1,
        },
        MULTISHOT: {            
            PROJECTILES: 1,
        },
        SPLASH: {
            SPLASH: 1,
        },
    }
}