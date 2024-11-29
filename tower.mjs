class Tower{
    TOWER = {
        VIPER: {
            TOWERNAME:Viper,
            RANGE: 1,
            FIRE_RATE: 1000,
            STATUS: POISON,
            DAMAGE: 15,
            COST:125,
            LIMIT:6,
            TYPE:ATTACK,
        },
        STUNLY: {
            TOWERNAME:Stunly,
            RANGE: 3,
            FIRE_RATE: 12000,
            STATUS: STUN,
            COST:200,
            LIMIT: 5,
            TYPE: SUPPORT,
        },
        RENGLY: {
            TOWERNAME: Rengly,
            RANGE: 4,
            COST: 300,
            LIMIT: 3,
            BUFF: RANGE,
            TYPE: SUPPORT,
        },
        DAMLY: {
            TOWERNAME: Damly,
            RANGE: 3,
            COST: 450,
            LIMIT: 2, 
            BUFF: DAMAGE,
            TYPE: SUPPORT,
        },
        SPEEDY: {
            TOWERNAME: Speedy,
            RANGE: 4,
            COST: 300,
            LIMIT: 3,
            BUFF: FIRE_RATE,
            TYPE: SUPPORT,
        },
        MULTIER: {
            TOWERNAME: Multier,
            RANGE: 2,
            COST: 600,
            LIMIT: 1,
            BUFF: MULTISHOT,
            TYPE: SUPPORT, 
        },
        SPLASHER: {
            TOWERNAME: Splasher,
            RANGE: 2,
            COST: 600,
            LIMIT: 1, 
            BUFF: SPLASH,
            TYPE: SUPPORT,
        },
        FARMER: {
            TOWERNAME: Farmer,
            COST: 800,
            LIMIT: 1,
            TYPE: SUPPORT,
            PROFIT: 400, 
        },
    }
    constructor(towerName, fireRate, range, damage, status, multishot, splash, asset, cost, profit, towerLimit, type,){
        this.TOWER_NAME = towerName
        this.FIRE_RATE = fireRate
        this.RANGE = range
        this.DAMAGE = damage
        this.STATUS = status
        this.MULTISHOT = multishot
        this.SPLASH = splash
        this.ASSET = asset
        this.COST = cost
        this.PROFIT_PER_WAVE = profit
        this.LIMIT = towerLimit
        this.TYPE = type
    }
}