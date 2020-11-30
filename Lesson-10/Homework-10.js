/*Задание 1*/
function Animal(name) {
    this.name = name;
    this._foodAmount = 50;
}
  
Animal.prototype.formatFoodAmount = function() {
    return this._foodAmount + ' гр.';
}
  
Animal.prototype.dailyNorm = function(amount) {
    if (!arguments.length) return this.formatFoodAmount();
  
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
    this._animalFeed = this.feed;
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

        for (var key in object) {
            var clonedKey = key;
            clonedObj[clonedKey] = object[key]; 
                  
            if (typeof object[key] == 'object') {
                clonedObj[clonedKey] = cloningObject(clonedObj[clonedKey])
            }
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
        object3: {}
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

function compareObjects(obj1, obj2) {
    for (key in obj1){
        for (var newKey in obj2) {
            if (typeof obj1[key] == 'function' && typeof obj2[newKey] == 'function') {
                if( obj1[key].toString()!=obj2[newKey].toString() ) {
                    return false
                }
            }      
            else if (key === newKey) {
                if( (obj1[key] === obj2[newKey]) || (obj1[key]==null && obj2[newKey] == null) ) {
                    delete obj1[key]
                    delete obj2[newKey]
                }
                else if ( Array.isArray(obj1[key]) == Array.isArray(obj2[newKey]) ) {
                    delete obj1[key]
                    delete obj2[newKey]
                }
                else if (typeof obj1[key] == 'object' && typeof obj2[newKey] == 'object' ) {          
                    compareObjects(obj1[key], obj2[newKey])
                }    
            var counter=0
            }        
        }
    console.log(obj1)
    console.log(obj2)
    }
    if (key in obj1) {
        counter++
    }
        if(counter==1){
        return true
    }
    return false
}
 
compareObjects(initialObj,clonedObj)