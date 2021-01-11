const calcMathList = document.querySelector('.calc__math-list');
const calcMathMoveList = document.querySelector('.calc__math-move-list');
const calcRes = document.querySelector('.calc-res');

const mathList = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', ','];
const mathMoveList = ['÷', '×', '-', '+', 'c', '='];

function renderMath() {
    mathList.map(item => {
        const mathHtml = `
            <li class="calc-math-symbol" data-math="${item}">
                ${item}
            </li>
        `;

        calcMathList.innerHTML += mathHtml;
    })

    mathMoveList.map(item => {
        const mathHtml = `
            <li class="calc-res-symbol" data-math="${item}">
                ${item}
            </li>
        `;

        calcMathMoveList.innerHTML += mathHtml;
    })
}

renderMath();

const calcMathSymbol = document.querySelectorAll('.calc-math-symbol');
const calcResSymbol = document.querySelectorAll('.calc-res-symbol');

calcMathSymbol.forEach(item => {
    item.addEventListener('click', () => {
        const itemData = item.dataset.math;

        calcRes.value += itemData;
    })
})

calcResSymbol.forEach(item => {
    item.addEventListener('click', () => {
        const itemData = item.dataset.math;

        if (itemData !== '=') {
            if (calcRes.value) {
                calcRes.value += itemData;
            }
        }

        switch (itemData) {
            case '=':
                if (calcRes.value) {
                    const result = calcRes
                        .value
                        .replace(/\÷/g, '/')
                        .replace(/\×/g, '*')
                        .replace(/\,/g, '.');

                    calcRes.value = eval(result);
                }
                break;
            case 'c':
                calcRes.value = '';
                break;
            default: 
                return itemData;
        }
    })
})