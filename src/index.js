// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (name) => {    
    return name;    
};
const createNotEnumerableProperty = (prop) => {    
    Object.defineProperty(Object.prototype, prop, {
        enumerable: false,
        value: 'value'
    });
    return prop;  
};
const createProtoMagicObject = () => { 
    function Test(){};   
    Test.__proto__ = Test.prototype;
    return Test;
};

const incrementor = () => {
    incrementor.count = incrementor.count ? ++incrementor.count : 1;
    incrementor.valueOf = function() {
        return incrementor.count;
    }
    return incrementor;
};

const asyncIncrementor = () => {
    asyncIncrementor.count = asyncIncrementor.count ? asyncIncrementor.count : 0;
    return new Promise((resolve, regect) => {        
        return resolve(++asyncIncrementor.count);
    })
};
const createIncrementer = () => {
    return {
        [Symbol.iterator]() {
          return this;
        },
      
        next() {
          if (this.current === undefined) {            
            this.current = 0;
          }
      
          if (this.current <= 10) {
            return {
              done: false,
              value: ++this.current
            };
          } else {            
            delete this.current;
            return {
              done: true
            };
          }
        }
      
      };
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};

const getDeepPropertiesCount = (obj) => {
    let count = 0;    
    for(let key in obj) {
        if(typeof(obj[key]) === 'object'){
            count += getDeepPropertiesCount(obj[key]);            
        }
        count++;
    }   
    return count;
};

const createSerializedObject = () => null;

const sortByProto = (arr) => {    
    arr.sort(function(a, b){
        if(a.__proto__ === b){
            return -1;
        }
        return 1;
    });
    return (arr);
};

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