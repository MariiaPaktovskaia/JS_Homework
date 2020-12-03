/*Задание 1*/
function Animal(name) {
    this.name = name;
    this._foodAmount = 50;
}
  
Animal.prototype._formatFoodAmount = function() {
    return this._foodAmount + ' гр.';
}
  
Animal.prototype.dailyNorm = function(amount) {
    if (!arguments.length) return this._formatFoodAmount();
  
    if (amount < 50 || amount > 500) {
        return 'Недопустимое количество корма.';
    }
  
    this._foodAmount = amount;
};
      
Animal.prototype.feed = function() {
    console.log('Насыпаем в миску ' + this.dailyNorm() + ' корма.');
};
      
function Cat(name) {
    Animal.apply(this, arguments);
    }
      
Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
      
Cat.prototype.feed = function() {
    Animal.prototype.feed.apply(this);
    console.log('Кот доволен ^_^');
    return this;
}

Cat.prototype.stroke = function(){
    console.log('Гладим кота.');
    return this;
};
      
var kotik = new Cat('Котик');
kotik.stroke().feed()

/*Задание 2*/
var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function() {
        alert('Hello');
    }
};
      
function cloningObject(object){
    var clonedObj = {};
    var a = getType(object)
    clonedObj = copyValues (object);

        if (a == 'array') {
            clonedObj = copyValues (clonedObj)
        }
        if (a == 'function') {
            clonedObj = copyValues (clonedObj)
        }
        if (a == 'object' && a != null) {
            clonedObj =  copyValues (clonedObj)
        }
    return clonedObj	
  }
  
function getType (object){
    if ( Array.isArray(object) ) return 'array'
    return typeof object
}
    
function copyValues (object) {
    var clonedObj = {};
    
        for (var key in object) {
            var clonedKey = key;
            clonedObj[clonedKey] = object[key];
        }
    return clonedObj
}

console.log(cloningObject(initialObj))



var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{2:2}, {}]
        },
        object3: [2,3,4,5]
    },
    method: function() {
        alert('Hello');
    }
};
      
function cloningObject(object){
    var temp = {};
    temp.prototype = object;
   
    var clonedObj = {};

        for (var key in temp){
            clonedObj = temp[key]  
        }

return clonedObj	
}
      
console.log(cloningObject(initialObj))


/*Задание 3*/
function compareValues (obj1, obj2) {
    if ( getType(obj1) != getType (obj2) ) {
      return false
    }
    var a = getType(obj1)
    switch (a) {
    case 'array':  if (!compareArr (obj1, obj2)) return false;
        break;
    case 'function':if (!compareFunctions (obj1, obj2)) return false;
        break;
    case 'object':if (!compareObjects (obj1, obj2)) return false;
        break;
    default:if (!compareSimple (obj1, obj2)) return false;
        break;
    }  
    return true
    }

   function compareArr (obj1, obj2){
    if (obj1.length != obj2.length) {
      return false;
    }
    for (var i = 0; i < obj2.length; i++) {
      if ( !compareValues (obj1[i], obj2[i]) ) {
        return false;
      } 
    }
    return true
  }
  
  function compareSimple (obj1, obj2){
    var result = (obj1 === obj2)? true:false
    return result
  }
  
  function compareFunctions (obj1, obj2){
    if (obj1.toString() == obj2.toString()) {
      return true}
      return false  
  }
  
  function compareObjects (obj1, obj2){
    if (obj1 == null && obj2 == null) return true
    if (! ( compareArr ( Object.keys(obj1), Object.keys(obj2) ) ) ) {
      return false
      }
    for (var key1 in obj1){
      var result = false
        for (var key2 in obj2) {
          if (key1 == key2){
            result = true }
          }
      if (!result) {
        return false
      }
    }
    for (var key1 in obj1) {
      if ( !(compareValues (obj1[key1], obj2[key1]) ) ) {
        return false
      }
    }
    return true  
  }
  
  function getType (obj1){
    if ( Array.isArray(obj1) ) {
      return 'array'
      }
    return typeof obj1
    }
   
  var initialObj = {
          string: 'Vasya',
      number: 30,
      boolean: true,
      undefined: undefined,
      null: null,
      array: [1, [2,4,6], 7],
      object: {
          string2: 'Petrov',
          object2: {
              array2: [{}, {}]
          },
          object3: {},
          },
      method: function() {
          alert('Hello');
      },
  };
  var clonedObj = {
          string: 'Vasya',
      number: 30,
      boolean: true,
      undefined: undefined,
      null: null,
      array: [1, [2,4,6], 7],
      object: {
          string2: 'Petrov',
          object2: {
              array2: [{}, {}]
          },
          object3: {},
          },
      method: function() {
          alert('Hello');
      },
  };
  compareValues(initialObj,clonedObj)