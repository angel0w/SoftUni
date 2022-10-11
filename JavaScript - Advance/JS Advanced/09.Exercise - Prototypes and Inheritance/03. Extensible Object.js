function extensibleObject() {
    const obj = {};

    obj.extend = function (otherObj) {
        for (const [key, value] of Object.entries(otherObj)) {
            if (typeof value === 'function') {
                Object.getPrototypeOf(obj)[key] = value;
            } else {
                obj[key] = value;
            }
        }
    };

    return obj;
}
