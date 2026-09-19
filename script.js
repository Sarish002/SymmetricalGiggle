let ques1 = 0, ques2 = 100, answer, display;
let operations = ["+", "–", "×", "÷"];
let label = document.querySelector(".question");
let input = document.querySelector(".answr_box");

function add_change() {
    ques1 = Math.floor(Math.random() * 10000);
    ques2 = Math.floor(Math.random() * 10000);
    answer = ques1 + ques2;
    display = `<math><mn>${ques1}</mn><mo>+</mo><mn>${ques2}</mn></math>`;
}

function add_submit() {
    if (Number(input.value) == answer) {
        input.style.backgroundColor = "#6fc276";
        setTimeout(() => {
            input.style.backgroundColor = "#4f66b9";
            add_change();
            display_func();
        }, 3000);
    } else {
        input.style.backgroundColor = "#D0342C";
        setTimeout(() => {
            input.style.backgroundColor = "#4f66b9";
        }, 3000);
    }
}

function subtract_change() {
    ques1 = Math.floor(Math.random() * 10000);
    ques2 = Math.floor(Math.random() * 10000);
    if (ques1 < ques2) {
        let temp = ques1;
        ques1 = ques2;
        ques2 = temp;
    }
    answer = ques1 - ques2;
    display = `<math><mn>${ques1}</mn><mo>−</mo><mn>${ques2}</mn></math>`;
}

function subtract_submit() {
    if (Number(input.value) == answer) {
        input.style.backgroundColor = "#6fc276";
        setTimeout(() => {
            input.style.backgroundColor = "#4f66b9";
            subtract_change();
            display_func();
        }, 3000);
    } else {
        input.style.backgroundColor = "#D0342C";
        setTimeout(() => {
            input.style.backgroundColor = "#4f66b9";
        }, 3000);
    }
}

function multiply_change() {
    ques1 = Math.floor(Math.random() * (99 - 20 + 1)) + 20;
    ques2 = Math.floor(Math.random() * (99 - 20 + 1)) + 20;
    answer = ques1 * ques2;
    display = `<math><mn>${ques2}</mn><mo>×</mo><mn>${ques1}</mn></math>`;
}

function multiply_submit() {
    if (Number(input.value) == answer) {
        input.style.backgroundColor = "#6fc276";
        setTimeout(() => {
            input.style.backgroundColor = "#4f66b9";
            multiply_change();
            display_func();
        }, 3000);
    } else {
        input.style.backgroundColor = "#D0342C";
        setTimeout(() => {
            input.style.backgroundColor = "#4f66b9";
        }, 3000);
    }
}

function multiply_easy_change() {
    ques1 = Math.floor(Math.random() * 1000);
    ques2 = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
    answer = ques1 * ques2;
    display = `<math><mn>${ques1}</mn><mo>×</mo><mn>${ques2}</mn></math>`;
}

function multiply_easy_submit() {
    if (Number(input.value) == answer) {
        input.style.backgroundColor = "#6fc276";
        setTimeout(() => {
            input.style.backgroundColor = "#4f66b9";
            multiply_easy_change();
            display_func();
        }, 3000);
    } else {
        input.style.backgroundColor = "#D0342C";
        setTimeout(() => {
            input.style.backgroundColor = "#4f66b9";
        }, 3000);
    }
}

function division_change() {
    ques2 = Math.floor(Math.random() * (10 - 2 + 1)) + 2;
    let multiplier = Math.floor(Math.random() * 10000);
    ques1 = multiplier * ques2;
    answer = multiplier;
    display = `<math><mn>${ques1}</mn><mo>÷</mo><mn>${ques2}</mn></math>`;
}

function division_submit() {
    if (Number(input.value) == answer) {
        input.style.backgroundColor = "#6fc276";
        setTimeout(() => {
            input.style.backgroundColor = "#4f66b9";
            division_change();
            display_func();
        }, 3000);
    } else {
        input.style.backgroundColor = "#D0342C";
        setTimeout(() => {
            input.style.backgroundColor = "#4f66b9";
        }, 3000);
    }
}

function algebra_change() {
    let x = Math.floor(Math.random() * 100) + 2;
    let value = x;
    let innerDisplay = "<mi>x</mi>";

    let availableOps = [...operations];

    // Max iterations is limited to available symbols so it never crashes empty arrays
    let iters = Math.floor(Math.random() * 3) + 1;

    for (let i = 0; i < iters; i++) {
        if (availableOps.length === 0) break;

        let oper_ind = Math.floor(Math.random() * availableOps.length);
        let oper = availableOps[oper_ind];

        availableOps.splice(oper_ind, 1);

        let num = Math.floor(Math.random() * 19) + 2;

        if (oper === "+") {
            let subIdx = availableOps.indexOf("–");
            if (subIdx !== -1) availableOps.splice(subIdx, 1);
        } else if (oper === "–") {
            let addIdx = availableOps.indexOf("+");
            if (addIdx !== -1) availableOps.splice(addIdx, 1);
        }

        if (oper === "÷") {
            while (value % num !== 0) {
                num = Math.floor(Math.random() * 9) + 2;
            }
        }

        if (oper === "÷") {
            innerDisplay = `<mfrac><mrow>${innerDisplay}</mrow><mn>${num}</mn></mfrac>`;
        } else if (oper === "×") {
            if (i > 0) {
                innerDisplay = `<mrow><mn>${num}</mn><mo>(</mo>${innerDisplay}<mo>)</mo></mrow>`;
            } else {
                innerDisplay = `<mn>${num}</mn>${innerDisplay}`;
            }
        } else {
            innerDisplay = `${innerDisplay}<mo>${oper}</mo><mn>${num}</mn>`;
        }

        switch (oper) {
            case "+": value = value + num; break;
            case "–": value = value - num; break;
            case "×": value = value * num; break;
            case "÷": value = value / num; break;
        }
    }

    answer = x;
    display = `<math display="block">${innerDisplay}<mo>=</mo><mn>${value}</mn></math>`;
}

function algebra_submit() {
    if (Number(input.value) == answer) {
        input.style.backgroundColor = "#6fc276";
        setTimeout(() => {
            input.style.backgroundColor = "#4f66b9";
            algebra_change();
            display_func();
        }, 3000);
    } else {
        input.style.backgroundColor = "#D0342C";
        setTimeout(() => {
            input.style.backgroundColor = "#4f66b9";
            console.log(answer);
        }, 3000);
    }
}

function sqrt_change() {
    ques1 = (Math.floor(Math.random() * 10000) + 2) ** 2;
    answer = ques1
    display = `<math><msqrt><mn>${ques1}</mn></msqrt></math>`;
}

function sqrt_submit() {
    if (Number(input.value) == answer) {
        input.style.backgroundColor = "#6fc276";
        setTimeout(() => {
            input.style.backgroundColor = "#4f66b9";
            sqrt_change();
            display_func();
        }, 3000);
    } else {
        input.style.backgroundColor = "#D0342C";
        setTimeout(() => {
            input.style.backgroundColor = "#4f66b9";
        }, 3000);
    }
}


function display_func() {
    input.value = "";
    label.innerHTML = display;
}