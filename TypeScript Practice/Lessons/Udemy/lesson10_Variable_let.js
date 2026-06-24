"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function variable_let1() {
    let x = '20';
    if (x === '20') {
        let y = 20;
        console.log("condition execute: " + x);
        x = '20';
    }
    console.log("outside condition: " + x);
    //console.log(y)
}
variable_let1();
//# sourceMappingURL=lesson10_Variable_let.js.map