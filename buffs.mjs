class Buff{
    DEBUFFS = {
        FIRE: {
            DAMAGE: 30,
            TIME: 4000,
        },
        ICE: {
            REDUCING_MOVEMENT_SPEED: 0.6,
            TIME: 5000,
        },
        STUN: {
            STUN_CONDITION: 1,
            TIME: 3000,
        },
        POISON: {
            DAMAGE: 3,
            TIME: 40000,
        },
        CURSE: {
            DAMAGE:10,
            REDUCING_MOVEMENT_SPEED: 0.3,
            TIME:15000,
        },
        FEAR: {
            REDUCING_MOVEMENT_SPEED: -1,
            TIME: 2000,
        },
    }   
    BUFFS = {
        FIRE_RATE: 0.3,
        DAMAGE: 0.3,
        RANGE: 1,
        MULTISHOT: 1,
        SPLASH: 1,
    }
}