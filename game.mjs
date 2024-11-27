export default class Game {
    _DIFFICULTY_PRESETS = [
        { // легкая
            WAVE_DURATION: 10,
            SPAWN_INTERVAL: 1,
            SPAWN_CHANCE: 0.6,
            DOUBLE_SPAWN_CHANCE: 0.05,
            ENEMIES: {
                // LIGHT: 
            }
        }, { // нормальная
            WAVE_DURATION: 25,
            SPAWN_INTERVAL: 0.9,
            SPAWN_CHANCE: 0.75,
            DOUBLE_SPAWN_CHANCE: 0.2,
            ENEMIES: {
                // LIGHT: 
            }
        }, {  // сложная
            WAVE_DURATION: 40,
            SPAWN_INTERVAL: 0.7,
            SPAWN_CHANCE: 0.8,
            DOUBLE_SPAWN_CHANCE: 0.35,
            ENEMIES: {
                // LIGHT: 
            }
        }, { // кошмар
            WAVE_DURATION: 60,
            SPAWN_INTERVAL: 0.5,
            SPAWN_CHANCE: 0.95,
            DOUBLE_SPAWN_CHANCE: 0.5,
            ENEMIES: {
                // LIGHT: 
            }
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
        for (let y = 0; y < this._HEIGHT; y++) {
            const ROW = document.createElement('tr');
            ROW.dataset.addr = y;

            for (let x = 0; x < this._WIDTH; x++) {
                const CELL = document.createElement('td');
                CELL.dataset.addr = x;
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