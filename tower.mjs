class Tower{
    TOWER = {
        RENGLY: {
            TOWERNAME: Rengly,
            RANGE: 4,
            COST: 300,
            LIMIT: 3,
            BUFF: RANGE,
        },
        DAMLY: {
            TOWERNAME: Damly,
            RANGE: 3,
            COST: 450,
            LIMIT: 2, 
            BUFF: DAMAGE,
        },
        SPEEDY: {
            TOWERNAME: Speedy,
            RANGE: 4,
            COST: 300,
            LIMIT: 3,
            BUFF: FIRE_RATE,
        },
        MULTIER: {
            TOWERNAME: Multier,
            RANGE: 2,
            COST: 600,
            LIMIT: 1,
            BUFF: MULTISHOT, 
        },
        SPLASHER: {
            TOWERNAME: Splasher,
            RANGE: 2,
            COST: 600,
            LIMIT: 1, 
            BUFF: SPLASH,
        },
        FARMER: {
            TOWERNAME: Farmer,
            COST: 800,
            LIMIT: 1,
            PROFIT: 200, 
        },
    }
    constructor(towerName, attackSpeed, range, damage, status, multishot, splash, asset, cost, profit, towerLimit){
        this.TOWERNAME = towerName
        this.ATTACKSPEED = attackSpeed
        this.RANGE = range
        this.DAMAGE = damage
        this.STATUS = status
        this.MULTISHOT = multishot
        this.SPLASH = splash
        this.ASSET = asset
        this.COST = cost
        this.PROFIT_PER_WAVE = profit
        this.LIMIT = towerLimit
    }
}