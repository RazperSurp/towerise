export default class Game {
    _DIFFICULTY_PRESETS = [
        { // легкая
            WAVE_DURATION_BASE: 10,
            WAVE_DURATION_INCREMENT_PER_WAVE: 0.5,
            SPAWN_INTERVAL: 1,
            SPAWN_CHANCE: 0.6,
            DOUBLE_SPAWN_CHANCE: 0.05,
            ENEMIES: {
                HH: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 5,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 1,
                    SPAWN_CHANCE_MAX: 30,
                }, HM: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 5,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 1,
                    SPAWN_CHANCE_MAX: 30,
                }, HL: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 5,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 1,
                    SPAWN_CHANCE_MAX: 30,
                }, MH: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 5,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 1,
                    SPAWN_CHANCE_MAX: 30,
                }, MM: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 5,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 1,
                    SPAWN_CHANCE_MAX: 30,
                }, ML: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 5,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 1,
                    SPAWN_CHANCE_MAX: 30,
                }, LH: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 5,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 1,
                    SPAWN_CHANCE_MAX: 30,
                }, LM: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 5,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 1,
                    SPAWN_CHANCE_MAX: 30,
                }, LL: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 5,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 1,
                    SPAWN_CHANCE_MAX: 30,
                }
            }
        }, { // нормальная
            WAVE_DURATION_BASE: 15,
            WAVE_DURATION_INCREMENT_PER_WAVE: 1,
            SPAWN_INTERVAL: 0.9,
            SPAWN_CHANCE: 0.75,
            DOUBLE_SPAWN_CHANCE: 0.2,
            ENEMIES: {
                HH: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 7,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 3,
                    SPAWN_CHANCE_MAX: 40,
                }, HM: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 5,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 1,
                    SPAWN_CHANCE_MAX: 30,
                }, HL: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 5,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 1,
                    SPAWN_CHANCE_MAX: 30,
                }, MH: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 5,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 1,
                    SPAWN_CHANCE_MAX: 30,
                }, MM: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 5,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 1,
                    SPAWN_CHANCE_MAX: 30,
                }, ML: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 5,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 1,
                    SPAWN_CHANCE_MAX: 30,
                }, LH: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 5,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 1,
                    SPAWN_CHANCE_MAX: 30,
                }, LM: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 5,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 1,
                    SPAWN_CHANCE_MAX: 30,
                }, LL: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 5,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 1,
                    SPAWN_CHANCE_MAX: 30,
                },
            }
        }, {  // сложная
            WAVE_DURATION_BASE: 20,
            WAVE_DURATION_INCREMENT_PER_WAVE: 1.5,
            SPAWN_INTERVAL: 0.7,
            SPAWN_CHANCE: 0.8,
            DOUBLE_SPAWN_CHANCE: 0.35,
            ENEMIES: {
                HH: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 9,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 5,
                    SPAWN_CHANCE_MAX: 50,
                }, HM: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 5,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 1,
                    SPAWN_CHANCE_MAX: 30,
                }, HL: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 5,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 1,
                    SPAWN_CHANCE_MAX: 30,
                }, MH: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 5,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 1,
                    SPAWN_CHANCE_MAX: 30,
                }, MM: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 5,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 1,
                    SPAWN_CHANCE_MAX: 30,
                }, ML: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 5,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 1,
                    SPAWN_CHANCE_MAX: 30,
                }, LH: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 5,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 1,
                    SPAWN_CHANCE_MAX: 30,
                }, LM: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 5,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 1,
                    SPAWN_CHANCE_MAX: 30,
                }, LL: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 5,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 1,
                    SPAWN_CHANCE_MAX: 30,
                },
            }
        }, { // кошмар
            WAVE_DURATION_BASE: 25,
            WAVE_DURATION_INCREMENT_PER_WAVE: 2,
            SPAWN_INTERVAL: 0.5,
            SPAWN_CHANCE: 0.95,
            DOUBLE_SPAWN_CHANCE: 0.5,
            ENEMIES: {
                HH: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 11,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 7,
                    SPAWN_CHANCE_MAX: 60,
                }, 
                HM: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 5,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 1,
                    SPAWN_CHANCE_MAX: 30,
                }, HL: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 5,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 1,
                    SPAWN_CHANCE_MAX: 30,
                }, MH: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 5,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 1,
                    SPAWN_CHANCE_MAX: 30,
                }, MM: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 5,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 1,
                    SPAWN_CHANCE_MAX: 30,
                }, ML: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 5,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 1,
                    SPAWN_CHANCE_MAX: 30,
                }, LH: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 5,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 1,
                    SPAWN_CHANCE_MAX: 30,
                }, LM: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 5,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 1,
                    SPAWN_CHANCE_MAX: 30,
                }, LL: {
                    MIN_WAVE: 0,
                    SPAWN_CHANCE_BASE: 5,
                    SPAWN_CHANCE_INCREMENT_PER_WAVE: 1,
                    SPAWN_CHANCE_MAX: 30,
                },
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

                const ASSET_INDEX = Math.ceil(Math.random() * 5);
                CELL.classList.add(`grass-${ASSET_INDEX}`);

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