(function () {
  'use strict';
angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

//To Buy controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyList = this;
  buyList.items = ShoppingListCheckOffService.getItems("ToBuyList");

  buyList.removeItem = function(itemIndex){
    ShoppingListCheckOffService.removeItem(itemIndex);
  };
}

//Bought controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;
  boughtList.items = ShoppingListCheckOffService.getItems("BoughtList");
}

// Service for adding and removing items in the List
function ShoppingListCheckOffService(){
  var service = this;

  // Items already bought
  var bought = [];

  //Items to Buy
  var buyList = [{item_name:"oranges", item_quantity:10},
                 {item_name:"apples", item_quantity:400},
                 {item_name:"mangoes", item_quantity:20},
                 {item_name:"kiwi", item_quantity:50},
                 {item_name:"grapes", item_quantity:100},
                 {item_name:"jackfruit", item_quantity:400}];

  service.removeItem = function (itemIndex) {
    var item = buyList[itemIndex];
    bought.push(item);
    buyList.splice(itemIndex, 1);
  };

  service.getItems = function(TypeOfList){
    if (TypeOfList =="ToBuyList") {
      return buyList;
    }else if (TypeOfList =="BoughtList") {
      return bought;
    }
  }
}
})();
