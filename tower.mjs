class Tower{
    TOWER = {
        DRURG:{
            TOWERNAME:'Дрург Следопыт',
            RANGE: 1,
            FIRE_RATE: 1000,
            DAMAGE: 30,
            COST: 100,
            LIMIT: 10,
            TYPE:'Attack',
            LVLUP: 0.2,
        },
        VIPER: {
            TOWERNAME:'Вайпер',
            RANGE: 1,
            FIRE_RATE: 1000,
            STATUS: 'Poison',
            DAMAGE: 15,
            COST:125,
            LIMIT:6,
            TYPE:'Attack',
            LVLUP:0.2,
        },
        GRIULS: {
            TOWERNAME:'Каменьщик Гриулс',
            RANGE: 1,
            FIRE_RATE: 12000,
            STATUS: 'Stun',
            DAMAGE: 50,
            COST:400,
            LIMIT: 5,
            TYPE: 'Support, Attack',
            LVLUP:0.2,
        },
        OZAVA: {
            TOWERNAME: 'Озава Меткая',
            RANGE: 4,
            COST: 300,
            LIMIT: 3,
            BUFF: 'Range',
            TYPE: 'Support',
            LVLUP:0.2,
        },
        TROZOCH: {
            TOWERNAME: 'Командир Трозоч',
            RANGE: 3,
            COST: 450,
            LIMIT: 2, 
            BUFF: 'Damage',
            TYPE: 'Support',
            LVLUP:0.2,
        },
        STRENOSAM: {
            TOWERNAME: 'Стремительный Стреносам',
            RANGE: 4,
            COST: 300,
            LIMIT: 3,
            BUFF: 'Fire Rate',
            TYPE: 'Support',
            LVLUP:0.2,
        },
         KIZIKET: {
            TOWERNAME: 'Оруженосец Кизикет',
            RANGE: 2,
            COST: 600,
            LIMIT: 1,
            BUFF: 'Multishot',
            TYPE: 'Support', 
            LVLUP:0.2,
        },
        TECHIS: {
            TOWERNAME: 'Подрывник Течис',
            RANGE: 2,
            COST: 600,
            LIMIT: 1, 
            BUFF: 'Splash',
            TYPE: 'Support',
            LVLUP:0.2,
        },
        SPEEDWAGON: {
            TOWERNAME: 'Спидвагон',
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