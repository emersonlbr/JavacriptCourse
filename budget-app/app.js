//BUDGET CONTROLLER
var budgetController = (function (){
    
    
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
   
    };
    
    Expense.prototype.calcPercentage = function(totalIncome) {
      if (totalIncome > 0) {
          this.percentage = Math.round((this.value / totalIncome) * 100);
      } else {
        this.prototype = -1;
      }
      
    };
    
    Expense.prototype.getPercentage = function() {
      return this.percentage;
    };
    
    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    
    var calculateTotal = function(type) {
      var sum = 0;
        
      data.allItems[type].forEach(function(cur) {
          sum += cur.value;
      });
        
      data.totals[type] = sum;
        
    };
    
    
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        
        totals: {
            exp: 0,
            inc: 0
        },
        
        budget: 0,
        percentage: -1
    };
    
    return {
        addItem: function(type, des, val) {
            
            var newItem;
            
//            create new id
            
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1 ].id + 1;
            } else {
                ID = 0;
            }
            
//            create new item based on inc or exp
            if (type === 'exp') {
               newItem = new Expense(ID, des, val); 
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

//            push it into data structure 
            data.allItems[type].push(newItem);
            
//            return the new element
            return newItem;
            
        },
        
        deleteItem: function(type, id) {
          var ids, index;
          
          // map returns a brand new array
          ids = data.allItems[type].map(function(current) {
            return current.id;
          });
          
          index = ids.indexOf(id);
          
          if (index !== -1) {
            // 
            data.allItems[type].splice(index, 1);
          }
          
        },
        
        calculateBudget: function() {
          
            //calculate total income and expenses 
            calculateTotal('exp');
            calculateTotal('inc');
            
            // calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp;
            
            // you cant divide shit by 0
            if (data.totals.inc > 0) {
                // calculate the percentage of income that we spent
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }

            
        },
        
        calculatePercentages: function() {
          
          data.allItems.exp.forEach(function(cur) {
            cur.calcPercentage(data.totals.inc);
          });
          
        },
        
        getPercentages: function() {
          var allPerc = data.allItems.exp.map(function(cur) {
            return cur.getPercentage();
          });
          return allPerc;
        },
        
        getBudget: function() {
          
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
            
        },
        
        testing: function() {
            console.log(data);
        }
    };
    
    
})();





//UI CONTROLLER
var UIController = (function (){
    
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage',
        dataLabel: '.budget__title--month'
    };
    
    
      var formatNumber = function(num, type) {
        var numSplit, int, dec, type;
        // removes the signal
        num = Math.abs(num);
        // will put 2 numbers after the '.' 200 => 200.00
        num = num.toFixed(2);
        
        numSplit = num.split('.');
        
        int = numSplit[0];
        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + ',' + int.substr( int.length - 3 , 3);
        }
      
      dec = numSplit[1];
      
      return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;
      
    };
    
    var nodeListForEach = function(list, callback) {
      for (var i = 0; i < list.length; i++) {
        callback(list[i], i);
      }
    };
    
    return {
        
        getInput: function() {
           return {
               
                type: document.querySelector(DOMstrings.inputType).value, // will either be inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                //convert the srting to a number
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
           };
        },
        
        addListenItem: function(obj, type) {
            var html, newHtml, element;
            //create HTML string with placeholder text
            
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            
            //replace the placeholder text with some actual data
            
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));
            
            //insert the HTML into the DOM
            
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
            
            
        },
        
        deleteListItem: function(selectorID) {
          
          var el = document.getElementById(selectorID);
          // you can only delete childs in JS
          el.parentNode.removeChild(el);
          
          
        },
        
        clearFields: function() {
        
            var fields, fieldsArr;
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
        
            fieldsArr = Array.prototype.slice.call(fields);
        
            fieldsArr.forEach(function(current, index, array) {
                current.value = "";
            });
            
            fieldsArr[0].focus();
        
        },
        
        displayBudget: function(obj) {
            var type;
            obj.budget > 0 ? type = 'inc' : type = 'exp';
            
            document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(obj.budget, type);
            document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(obj.totalInc, 'inc');
            document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(obj.totalExp, 'exp');
            
            
            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + '%';
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = '---';
            }
            
        },
        
        displayPercentages: function(percentages) {
          
          var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);
          
          nodeListForEach(fields, function(current, index) {
            if (percentages[index] > 0) {
              current.textContent = percentages[index] + '%';
            } else {
              current.textContent = '---';
            }
          });
          
          
        },
        
        displayDate: function() {
          var now, months, month, year;
          
          // if you leave it blank it will store the current date
          now = new Date();
          
          months = [
            'January',
            'Febuary',
            'March',
            'April',
            'May',
            'June',
            'July', 
            'August',
            'Setember',
            'Octocber',
            'November', 
            'December' 
          ];
          
          month = now.getMonth();
          
          year = now.getFullYear();
          document.querySelector(DOMstrings.dataLabel).textContent = months[month] + ' ' + year;
          
        },
        
        changedType: function() {
          var fields;
          
          fields = document.querySelectorAll(
            DOMstrings.inputType + ',' +
            DOMstrings.inputValue + ',' +
            DOMstrings.inputDescription);
            
            nodeListForEach(fields, function(cur) {
              cur.classList.toggle('red-focus');
            });
            
            document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
          
          
        },

        getDOMstrings: function() {
            return DOMstrings;
        }
        
    };
    
})();





//CONTROLLER
var controller = (function(budgetCtrl, UICtrl){
    
    
    var setupEventListeners = function() {
        
        var DOM = UICtrl.getDOMstrings();
        
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event){    
            if(event.keyCode === 13 || event.which === 13 ) {
            ctrlAddItem();
            }
        });
        
        document.querySelector(DOM.container).addEventListener('click', crtlDeleteItem);
        
        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);
    };
    
    var updatePercentages = function() {
      
      // calculate updatePercentages
      budgetCtrl.calculatePercentages();
      // read percentages from the budget
      var percentages = budgetCtrl.getPercentages();
      // update the UI with the new percentages
      UICtrl.displayPercentages(percentages);
      
    };
    
    
    var updateBudget = function() {
                
        // Calculate the budget
        budgetCtrl.calculateBudget();
        
        //return the budget
        var budget = budgetCtrl.getBudget();
        
        // Display the budget on the UI
        console.log(budget);
        
        UICtrl.displayBudget(budget);
        
    };
    
    var ctrlAddItem = function(){
        var input, newItem;
        
        // Get the filed input data
        input = UICtrl.getInput();
        console.log(input);
        
        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            
             // Add the item to the budged controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            // Add the item to the UI

            UICtrl.addListenItem(newItem, input.type);

            //Clear fields 
            UICtrl.clearFields();

            //Calculate and update budget 
            updateBudget();
            
            // calculate the percentages
            updatePercentages();
            
            }
        
    };
    
    var crtlDeleteItem = function(event) {
      var itemID, splitID, type, ID;
      
      itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
      
      if (itemID) {
        
        splitID = itemID.split('-');
        type = splitID[0];
        // transforming the string into an int
        ID = parseInt(splitID[1]);
        
        //delete the item from the data structure
        budgetCtrl.deleteItem(type, ID);
        
        // delete the item from the UI
        UICtrl.deleteListItem(itemID);
        
        // update and show the new budget
        updateBudget();
        
        // calculate percentages
        updatePercentages();
        
      }
      
    };
    
    return {
        init: function() {
            console.log("Application has started");
            UICtrl.displayDate();
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
                
            });
            setupEventListeners();
        }
    };
    
    
})(budgetController, UIController);


//starting the app
controller.init();

