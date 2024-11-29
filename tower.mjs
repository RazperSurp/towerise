class Tower{
    TOWER = {
        VIPER: {
            TOWERNAME:'Viper',
            RANGE: 1,
            FIRE_RATE: 1000,
            STATUS: 'Poison',
            DAMAGE: 15,
            COST:125,
            LIMIT:6,
            TYPE:'Attack',
            LVLUP:0.2,
        },
        STUNLY: {
            TOWERNAME:'Stunly',
            RANGE: 3,
            FIRE_RATE: 12000,
            STATUS: 'Stun',
            COST:200,
            LIMIT: 5,
            TYPE: 'Support',
            LVLUP:0.2,
        },
        RENGLY: {
            TOWERNAME: 'Rengly',
            RANGE: 4,
            COST: 300,
            LIMIT: 3,
            BUFF: 'Range',
            TYPE: 'Support',
            LVLUP:0.2,
        },
        DAMLY: {
            TOWERNAME: 'Damly',
            RANGE: 3,
            COST: 450,
            LIMIT: 2, 
            BUFF: 'Damage',
            TYPE: 'Support',
            LVLUP:0.2,
        },
        SPEEDY: {
            TOWERNAME: 'Speedy',
            RANGE: 4,
            COST: 300,
            LIMIT: 3,
            BUFF: 'Fire Rate',
            TYPE: 'Support',
            LVLUP:0.2,
        },
        MULTIER: {
            TOWERNAME: 'Multier',
            RANGE: 2,
            COST: 600,
            LIMIT: 1,
            BUFF: 'Multishot',
            TYPE: 'Support', 
            LVLUP:0.2,
        },
        SPLASHER: {
            TOWERNAME: 'Splasher',
            RANGE: 2,
            COST: 600,
            LIMIT: 1, 
            BUFF: 'Splash',
            TYPE: 'Support',
            LVLUP:0.2,
        },
        FARMER: {
            TOWERNAME: 'Farmer',
            COST: 800,
            LIMIT: 1,
            TYPE: 'Support',
            PROFIT: 400, 
            LVLUP:0.2,
        },
    }
    constructor(towerName, fireRate, range, damage, status, multishot, splash, asset, cost, profit, towerLimit, type,lvlUp){
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
        this.LVLUP = lvlUp
    }
}