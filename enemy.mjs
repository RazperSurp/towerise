class Enemy{
    _STATUS_RESISTANCE = {
        FIRE_RESIST: {
            RESITS_BASE: 0.1,
            RESITS_INCREMENT_PER_WAVE:0.01,
            RESITS_MAX: 0.8,
        },
        STUN_RESIST: {
            RESITS_BASE: 0.1,
            RESITS_INCREMENT_PER_WAVE:0.01,
            RESITS_MAX: 0.8,
        },
        POISON_RESIST: {
            RESITS_BASE: 0.1,
            RESITS_INCREMENT_PER_WAVE:0.01,
            RESITS_MAX: 0.8,
        },
        SLOWDOWN_RESIST: {
            RESITS_BASE: 0.1,
            RESITS_INCREMENT_PER_WAVE:0.01,
            RESITS_MAX: 0.8,
        }
    }

    _ENEMIES_DICTIONARY = {
        HH: {
            DURABILITY: 200,
            MOVE_SPEED: 2,
            REWARDS: 400,
            MIN_WAVE: 16,
            SPAWN_CHANCE_BASE: 0.05,
            SPAWN_CHANCE_INCREMENT_PER_WAVE: 0.02,
            SPAWN_CHANCE_MAX: 0.3,
            CHANCE_STATUS_RESISTANCE: 0.5
        }, HM: {
            DURABILITY: 200,
            MOVE_SPEED: 1.25,
            REWARDS: 350,
            MIN_WAVE: 12,
            SPAWN_CHANCE_BASE: 0.07,
            SPAWN_CHANCE_INCREMENT_PER_WAVE: 0.03,
            SPAWN_CHANCE_MAX: 0.5,
            CHANCE_STATUS_RESISTANCE: 0.5
        }, HL: {
            DURABILITY: 200,
            MOVE_SPEED: 0.5,
            REWARDS: 250,
            MIN_WAVE: 8,
            SPAWN_CHANCE_BASE: 0.1,
            SPAWN_CHANCE_INCREMENT_PER_WAVE: 0.05,
            SPAWN_CHANCE_MAX: 0.6,
            CHANCE_STATUS_RESISTANCE: 0.5
        }, MH: {
            DURABILITY: 125,
            MOVE_SPEED: 2,
            REWARDS: 350,
            MIN_WAVE: 12,
            SPAWN_CHANCE_BASE: 0.07,
            SPAWN_CHANCE_INCREMENT_PER_WAVE: 0.03,
            SPAWN_CHANCE_MAX: 0.5,
            CHANCE_STATUS_RESISTANCE: 0.5
        }, MM: {
            DURABILITY: 125,
            MOVE_SPEED: 1.25,
            REWARDS: 200,
            MIN_WAVE: 8,
            SPAWN_CHANCE_BASE: 0.4,
            SPAWN_CHANCE_INCREMENT_PER_WAVE: 0.05,
            SPAWN_CHANCE_MAX: 0.8,
            CHANCE_STATUS_RESISTANCE: 0.5
        }, ML: {
            DURABILITY: 125,
            MOVE_SPEED: 0.5,
            REWARDS: 150,
            MIN_WAVE: 4,
            SPAWN_CHANCE_BASE: 0.6,
            SPAWN_CHANCE_INCREMENT_PER_WAVE: 0.01,
            SPAWN_CHANCE_MAX: 0.7,
            CHANCE_STATUS_RESISTANCE: 0.5
        }, LH: {
            DURABILITY: 50,
            MOVE_SPEED: 2,
            REWARDS: 100,
            MIN_WAVE: 8,
            SPAWN_CHANCE_BASE: 0.1,
            SPAWN_CHANCE_INCREMENT_PER_WAVE: 0.05,
            SPAWN_CHANCE_MAX: 0.6,
            CHANCE_STATUS_RESISTANCE: 0.5
        }, LM: {
            DURABILITY: 50,
            MOVE_SPEED: 1.25,
            REWARDS: 50,
            MIN_WAVE: 4,
            SPAWN_CHANCE_BASE: 0.6,
            SPAWN_CHANCE_INCREMENT_PER_WAVE: 0.01,
            SPAWN_CHANCE_MAX: 0.7,
            CHANCE_STATUS_RESISTANCE: 0.5
        }, LL: {
            DURABILITY: 50,
            MOVE_SPEED: 0.5,
            REWARDS: 25,
            MIN_WAVE: 0,
            SPAWN_CHANCE_BASE: 0.99,
            SPAWN_CHANCE_INCREMENT_PER_WAVE: 0,
            SPAWN_CHANCE_MAX: 0.99,
            CHANCE_STATUS_RESISTANCE: 0.5,
        },
    }

    constructor(durability, moveSpeed, currentDurability, unitName, statusResistance, asset, reward){
        this.DURABILITY = durability
        this.MOVE_SPEED = moveSpeed
        this.CURRENT_DURABILITY = currentDurability
        this.UNITS_NAME = unitName
        this.STATUS_RESISTANCE = statusResistance
        this.ASSET = asset
        this.REWARDS = reward
    }
}