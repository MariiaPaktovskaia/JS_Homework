/*Практическое задание 4:*/
function Animal(name) {
  this._name = name;
  this._foodAmount = 50;

  this._formatFoodAmount = function() {
    return this._foodAmount + ' гр.';
  }

  this.dailyNorm = function(amount) {
    this._amount = amount;
        if (!arguments.length) return this._formatFoodAmount();

        if (this._amount < 50 || this._amount > 500) {
            return 'Недопустимое количество корма.';
        }

        this._foodAmount = this._amount;
  };

  this.name = name;

  var self = this;

  self.animalFeed = function() {
    console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
  };
}

function Cat(name) {
  Animal.apply(this, arguments);
  var parentFeed = this.animalFeed;

  this.animalFeed = function() {
    parentFeed();
    console.log('Кот доволен ^_^');
  }
}

var kotik = new Cat('Котик');
console.log(kotik)
console.log(kotik.dailyNorm(190));
console.log(kotik.animalFeed());

/* Практическое задание 5 */
function Animal(name) {
    this._name = name;
    this._foodAmount = 50;
  
    this._formatFoodAmount = function() {
      return this._foodAmount + ' гр.';
    }
  
    this.dailyNorm = function(amount) {
      this._amount = amount;
      if (!arguments.length) return this._formatFoodAmount();
  
      if (this._amount < 50 || this._amount > 500) {
        return 'Недопустимое количество корма.';
      }
  
      this._foodAmount = this._amount;
    };
  
    this.name = name;
  
    var self = this;
  
    self.animalFeed = function() {
      console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
    };
  }
  
function Cat(name) {
    Animal.apply(this, arguments);
      
    var parentFeed = this.animalFeed;
    var self = this;
    
    self.stroke = function(){
      console.log('Гладим кота.');
      return self;
      };
      
    self.animalFeed = function() {
      parentFeed();
      console.log('Кот доволен ^_^');
      return self;
    };
  }
  
var kotik = new Cat('Котик');
kotik.animalFeed().stroke();