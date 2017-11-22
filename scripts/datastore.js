(function (window) {
  'use strict';
  var App = window.App || {};

  function DataStore() {
    this.data = {};
  }
  //adds new data to the database
  DataStore.prototype.add = function (key, val) {
    this.data[key] = val;
  };

  //Accesses the database
  //This one is one item at a time by key
  DataStore.prototype.get = function(key) {
    return this.data[key];
  };
  //This one does it all at once
  DataStore.prototype.getAll = function() {
    return this.data;
  };

  //To remove data
  DataStore.prototype.remove = function (key) {
    delete this.data[key];
  };

  App.DataStore = DataStore;
  window.App = App;
})(window);
