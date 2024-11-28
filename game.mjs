export default class Game {
    _DIFFICULTY_PRESETS = [
        { // легкая
            WAVE_DURATION_BASE: 10,
            WAVE_DURATION_INCREMENT_PER_WAVE: 0.5,
            SPAWN_INTERVAL: 1,
            SPAWN_CHANCE: 0.6,
            DOUBLE_SPAWN_CHANCE: 0.05
        }, { // нормальная
            WAVE_DURATION_BASE: 15,
            WAVE_DURATION_INCREMENT_PER_WAVE: 1,
            SPAWN_INTERVAL: 0.9,
            SPAWN_CHANCE: 0.75,
            DOUBLE_SPAWN_CHANCE: 0.2
        }, {  // сложная
            WAVE_DURATION_BASE: 20,
            WAVE_DURATION_INCREMENT_PER_WAVE: 1.5,
            SPAWN_INTERVAL: 0.7,
            SPAWN_CHANCE: 0.8,
            DOUBLE_SPAWN_CHANCE: 0.35
        }, { // кошмар
            WAVE_DURATION_BASE: 25,
            WAVE_DURATION_INCREMENT_PER_WAVE: 2,
            SPAWN_INTERVAL: 0.5,
            SPAWN_CHANCE: 0.95,
            DOUBLE_SPAWN_CHANCE: 0.5
        }
    ]

    _LIMITS = {
        SIZE: {
            MIN: {
                WIDTH: 10,
                HEIGHT: 10,
                DIFFICULTY: 0
            }, MAX: {
                WIDTH: 50,
                HEIGHT: 50,
                DIFFICULTY: 3,
            }
        }
    }

    _WIDTH;
    _HEIGHT;
    _SQUARE;
    _DIFFICULTY;

    _CELLS = [];
    _PORTAL_POS = {};

    _CONTAINERS = {
        FIELD: document.getElementById('game-field')
    }

    constructor(width, height, difficulty) {
        this._WIDTH = width < this._LIMITS.SIZE.MIN.WIDTH ? this._LIMITS.SIZE.MIN.WIDTH : width > this._LIMITS.SIZE.MAX.WIDTH ? this._LIMITS.SIZE.MAX.WIDTH : width;
        this._HEIGHT = height < this._LIMITS.SIZE.MIN.HEIGHT ? this._LIMITS.SIZE.MIN.HEIGHT : height > this._LIMITS.SIZE.MAX.HEIGHT ? this._LIMITS.SIZE.MAX.HEIGHT : height;
        this._DIFFICULTY = difficulty < this._LIMITS.SIZE.MIN.DIFFICULTY ? this._LIMITS.SIZE.MIN.DIFFICULTY : difficulty > this._LIMITS.SIZE.MAX.DIFFICULTY ? this._LIMITS.SIZE.MAX.DIFFICULTY : difficulty;
        
        this._SQUARE = this._HEIGHT * this._WIDTH;

        this._renderField();
    }

    _findCell(x, y) {
        return this._CELLS.find(cell => cell.x == x && cell.y == y).el;
    }

    _renderField() {
        this._CONTAINERS.FIELD.innerHTML = '';

        for (let y = 0; y < this._HEIGHT; y++) {
            const ROW = document.createElement('tr');
            ROW.dataset.addr = y;

            for (let x = 0; x < this._WIDTH; x++) {
                const CELL = document.createElement('td');
                CELL.dataset.addr = x;

                const ASSET_INDEX = Math.ceil(Math.random() * 41);
                let asset = '';

                switch (ASSET_INDEX) {
                    case 1:
                    case 10:
                    case 15:
                    case 23:
                    case 28:
                    case 33:
                    case 38:
                        asset = `url(./assets/grass-1.svg)`;
                        break;
                    case 2:
                    case 11:
                    case 16:
                    case 24:
                    case 29:
                    case 34:
                    case 39:
                        asset = `url(./assets/grass-2.svg)`;
                        break;
                    case 3:
                    case 12:
                    case 17:
                    case 25:
                    case 30:
                    case 35:
                    case 40:
                        asset = `url(./assets/grass-3.svg)`;
                        break;
                    case 4:
                    case 13:
                    case 18:
                    case 26:
                    case 31:
                    case 36:
                        asset = `url(./assets/grass-4.svg)`;
                        break;
                    case 5:
                    case 14:
                    case 19:
                    case 27:
                    case 32:
                    case 37:
                        asset = `url(./assets/grass-5.svg)`;
                        break;
                    case 20:
                        asset = `url(./assets/grass-10.svg)`;
                        break;
                    case 21:
                        asset = `url(./assets/grass-11.svg)`;
                        break;
                    case 22:
                        asset = `url(./assets/grass-12.svg)`;
                        break;
                    case 41:
                        asset = `url(./assets/grass-13.svg)`;
                        break;
                    default:
                        asset = `url(./assets/grass-${ASSET_INDEX}.svg)`;
                        break;
                    
                }

                CELL.style.backgroundImage = asset;

                ROW.appendChild(CELL);

                this._CELLS.push({
                    x: x,
                    y: y,
                    el: CELL
                });
            }

            this._CONTAINERS.FIELD.appendChild(ROW);
        }
    }
}