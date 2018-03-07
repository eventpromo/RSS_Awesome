// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (name) => {    
    return name;    
};
const createNotEnumerableProperty = () => {    
    return Symbol();
    //return Object.defineProperty({}, name, {enumerable: false});    
};
const createProtoMagicObject = () => { 
    function Test(){};   
    Test.__proto__ = Test.prototype;
    return Test;
};

const createIncrementer = () => {
    var counter = 0;
    function Incrementor(){
        this.count = ++counter;
        return Incrementor;
    }
    Incrementor.valueOf = function(){
        return this.count;
    }
    return Incrementor;
};
const incrementor = createIncrementer();
const asyncIncrementor = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;