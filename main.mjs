import Game from './game.mjs';

const SETTINGS_FORM = document.getElementById('game-settings');
const DIFFICULTY_BUTTONS = SETTINGS_FORM.querySelectorAll('.button-group button[data-value]');
const DIFFICULTY_INPUTS = SETTINGS_FORM.querySelectorAll('.button-group .hidden-radio input[type="radio"]');
const LIMITS = {
    MIN: {
        WIDTH: 10,
        HEIGHT: 10,
        DIFFICULTY: 0
    },
    MAX: {
        WIDTH: 50,
        HEIGHT: 50,
        DIFFICULTY: 3
    }
}

DIFFICULTY_BUTTONS.forEach(button => {
    button.onclick = e => {
        DIFFICULTY_INPUTS.forEach(inp => { 
            if (inp.hasAttribute('checked')) inp.removeAttribute('checked');
            if (inp.value = e.currentTarget.dataset.value) inp.setAttribute('checked', true); 
        });

        DIFFICULTY_BUTTONS.forEach(btn => { 
            if (btn.classList.contains('active')) btn.classList.remove('active');
            if (btn.dataset.value == e.currentTarget.dataset.value) btn.classList.add('active');
        });
    }
})

SETTINGS_FORM.onsubmit = e => {
    e.preventDefault();
    e.stopImmediatePropagation();

    const FD = new FormData(e.currentTarget);

    window._game = new Game(FD.get('width'), FD.get('height'), FD.get('difficulty'));

    return false;
}

SETTINGS_FORM.onreset = e => {
    e.preventDefault();
    e.stopImmediatePropagation();

    for (const [value, name] of Object.entries(generateSettings())) {
        switch (name) {
            case 'difficulty':
                DIFFICULTY_BUTTONS.find(btn => btn.dataset.value == value).click();
                break;
            default:
                const INPUT = SETTINGS_FORM.querySelector(`input[type="${name}"]`);
                INPUT.value = value;
                break;
        }
    }

    SETTINGS_FORM.submit();

    return false;
}

function generateSettings() {
    const SETTINGS = {
        width: Math.round(Math.random() * (LIMITS.MAX.WIDTH - LIMITS.MIN.WIDTH) + LIMITS.MIN.WIDTH),
        height: Math.round(Math.random() * (LIMITS.MAX.HEIGHT - LIMITS.MIN.HEIGHT) + LIMITS.MIN.HEIGHT),
        difficulty: Math.round(Math.random() * (LIMITS.MAX.DIFFICULTY - LIMITS.MIN.DIFFICULTY) + LIMITS.MIN.DIFFICULTY)
    }

    return SETTINGS;
}