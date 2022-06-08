const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {

  return this.journeys.map( (journey) => {
    return journey.startLocation;
  })

};

Traveller.prototype.getJourneyEndLocations = function () {

  return this.journeys.map( (journey)=> {
    return journey.endLocation;
  });

};

Traveller.prototype.getJourneysByTransport = function (transport) {

  return this.journeys.filter((journey)=> {
    return journey.transport === transport;
  });


};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

  return this.journeys.filter((journey) => {
    return journey.distance >= minDistance;
  })
};

Traveller.prototype.calculateTotalDistanceTravelled = function (totalDistance) {
   return this.distance.reduce ((distance)=> {
     return journey.distance === totalDistance

   }) 
   
  

};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;
