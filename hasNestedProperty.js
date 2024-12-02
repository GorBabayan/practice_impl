function hasNestedProperty(obj, propertyPath) {
    const keys = propertyPath.split('.');

    for (let key of keys) {
        if (!(key in obj)) {
            return false;
        }

        obj = obj[key];

        if (typeof obj !== 'object' || obj === null) {
            if (key !== keys[keys.length - 1]) {
                return false;
            }
        }
    }

    return true;
}

const user = { 
    name: "Alice", 
    address: { 
        city: "Wonderland", 
        zip: "12345" 
    }
};

console.log(hasNestedProperty(user, "name")); // true
console.log(hasNestedProperty(user, "address.city")); // true
console.log(hasNestedProperty(user, "address.state")); // false
console.log(hasNestedProperty(user, "address.zip")); // true
console.log(hasNestedProperty(user, "address.zip.code")); // false