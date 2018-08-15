const setObjectProps = (object, value) => {
    let clone = {...object};

    Object.keys(clone).map(x => {
        if((typeof clone[x] === "object") && !(clone[x] instanceof Array)){
            clone[x] = setObjectProps(clone[x], value);
        } else {
            clone[x] = value;
        }
    });

    return clone;
};

module.exports = setObjectProps;