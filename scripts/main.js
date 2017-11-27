(function (window) {
  'use strict';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;

  //create a new instance of truck
  var myTruck = new Truck('ncc-1701', new DataStore());
  //export the variable to a global variable
  window.myTruck = myTruck;
  
})(window);
