function evaluateLogical(a, b, op) {
    switch(op) {
        case '&&':  
            if (!a) {
                return a;
            } 
            return b;
        case '||':
            if (a) {
                return a;
            }
            return b;
        case '??':
            if (a != null && a != undefined) {
                return a;
            }

            return b;
        default:
            throw new Error("Not supported");
    }
}

console.log(evaluateLogical(5, 10, '&&')); // 10
console.log(evaluateLogical(null, 'default', '??')); // "default"
console.log(evaluateLogical(false, 42, '||')); // 42