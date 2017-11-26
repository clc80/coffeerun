(function (window) {
  'use strict';
  var App = window.App || {};

  function Truck(truckId, db) {
    this.truckId = truckId;
    this.db = db;
  }

  //Store a coffee order
  Truck.prototype.createOrder = function (order) {
    console.log("Adding order for " + order.emailAddress);
    this.db.add(order.emailAddress, order);
  };

  //Remove orders
  Truck.prototype.deliverOrder = function (customerId) {
    console.log("Delivering order for " + customerId);
    this.db.remove(customerId);
  };

  //console.log the orders
  Truck.prototype.printOrders = function() {
    var customerIdArray = Object.keys(this.db.getAll());

    console.log("Truck #" + this.truckId + " has pending orders: ");
    customerIdArray.forEach(function (id) {
      console.log(this.db.get(id));
    });
  };
    App.Truck = Truck;
    window.App = App;

})(window);
