/*Практическое задание 4:*/
function Animal(name) {
  this.name = name;
  this._foodAmount = 50;

  function formatFoodAmount() {
      return this._foodAmount + ' гр.';
  }

  this.dailyNorm = function(amount) {
      if (!arguments.length) return formatFoodAmount();

      if (amount < 50 || amount > 500) {
          return 'Недопустимое количество корма.';
      }

      this._foodAmount = amount;
  };
  
  var self = this;
  
  self.feed = function() {
    console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
  };
}

function Cat(name) {
  Animal.apply(this, arguments);
  var animalFeed = this.feed;

  this.feed = function() {
    animalFeed();
    console.log('Кот доволен ^_^');
  }

}

var kotik = new Cat('Котик');
console.log(kotik)
console.log(kotik.feed());

/* Практическое задание 5 */
function Animal(name) {
  this.name = name;
  this._foodAmount = 50;

  function formatFoodAmount() {
    return this._foodAmount + ' гр.';
  }

  this.dailyNorm = function(amount) {
    if (!arguments.length) return formatFoodAmount();

    if (amount < 50 || amount > 500) {
      return 'Недопустимое количество корма.';
    }

    this._foodAmount = amount;
  };
  
  var self = this;
  
  self.feed = function() {
    console.log('Насыпаем в миску ' + self.dailyNorm() + ' корма.');
  };
}

function Cat(name) {
  Animal.apply(this, arguments);
  var self = this;
  
  self.stroke = function(){
    console.log('Гладим кота.');
    return self;
  };
    
  var animalFeed = this.feed;

  self.feed = function() {
    animalFeed();
    console.log('Кот доволен ^_^');
    return self;
  }
  
}

var kotik = new Cat('Котик');
console.log(kotik)
console.log(kotik.feed());
kotik.feed().stroke();

