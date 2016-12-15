var Promise = require('bluebird');
var db = require('./server/db/models/').db;
var Place = require('./server/db/models/').Place;
var Bar = require('./server/db/models/').Bar;
var Users = require('./server/db/models/').Users;

var data = {
  bar: [
    {name: "Stout Barrel House", place: {address: "642 N Clark St", city: "Chicago", state: "IL", phone: "123-456-7890", location: [41.893710, -87.631468]}, rating: 4, imgURL: "http://www.stoutchicago.com/wp-content/themes/theme-stout/images/logo.png"},
    {name: "Kerryman Irish Bar & Restaurant", place: {address: "661 N Clark St", city: "Chicago", state: "IL", phone: "123-456-7890", location: [441.894181, -87.631009]}, rating: 4, imgURL: "https://s-media-cache-ak0.pinimg.com/originals/b2/60/0b/b2600b1fa08b5115221dda47fd7db606.jpg"},
    {name: "Old Town Pour House", place: {address: "1419 N Wells St", city: "Chicago", state: "IL", phone: "312-477-2800", location: [441.894181, -87.631009]}, rating: 4, imgURL: "http://www.oldtownpourhouse.com/filebin/images/pourhouse/splash_logo.png"},
    {name: "The VIG", place: {address: "1527 N Wells St", city: "Chicago", state: "IL", phone: "312-982-2186", location: [441.894181, -87.631009]}, rating: 4, imgURL: "https://pbs.twimg.com/profile_images/555553419818061825/JUuXaHUi.jpeg"}
  ]
};

db.sync({force: true})
.then(function () {
  console.log("Dropped old data, now inserting data");
  return Promise.map(Object.keys(data), function (name) {
    return Promise.map(data[name], function (item) {
      return db.model(name)
      .create(item, {
        include: [Place]
      });
    });
  });
})
.then(function () {
  console.log("Finished inserting data (press ctrl-c to exit)");
})
.catch(function (err) {
  console.error('There was totally a problem', err, err.stack);
});