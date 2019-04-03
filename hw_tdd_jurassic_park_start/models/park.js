const Park = function(name, ticketPrice, collectionOfDinosaurs){
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.collectionOfDinosaurs = [];
};
Park.prototype.addDinosaur = function (dinosaur) {
  this.collectionOfDinosaurs.push(dinosaur);
};
Park.prototype.removeDinosaur = function (dinosaur) {
  this.collectionOfDinosaurs.pop(dinosaur);
};

Park.prototype.mostPopularDinosaur = function () {
  let dinosaurPopular = [];
  for (let dinosaur of this.collectionOfDinosaurs) {
    dinosaurPopular = dinosaur.guestsAttractedPerDay;
  }
  return Math.max(dinosaurPopular);
};
// Park.prototype.mostPopularDinosaur = function (dinosaurs) {
//   let dinosaurMostVisited = dinosaurs.guestsAttractedPerDay;
//
//   for (i=0; i<=dinosaurMostVisited; i++){
//       if (this.collectionOfDinosaurs[i] > dinosaurMostVisited) {
//           let dinosaurMostVisited = this.collectionOfDinosaurs[i];
//       };
//   };
//   return dinosaurMostVisited;
// };

Park.prototype.dinosaursBySpecies = function(species){

  let dinosaurBySpecies = [];

  for (let dinosaur of this.collectionOfDinosaurs){
    if(dinosaur.species === species){
      dinosaurBySpecies.push(dinosaur);
    }
  }
  return dinosaurBySpecies;
};

Park.prototype.removeDinosaursBySpecies = function(species){

  let dinosaurBySpecies = [];

  for (let dinosaur of this.collectionOfDinosaurs){
    if(dinosaur.species === species){
      dinosaurBySpecies.pop(dinosaur);
    }
  }
  return dinosaurBySpecies;
};

Park.prototype.totalNumberOfVisitorsPerDay = function () {
  let count = 0;

  for (let dinosaur of this.collectionOfDinosaurs){
    count += dinosaur.guestsAttractedPerDay;
  }
  return count;
};

// Park.prototype.totalNumberOfVisitorsPerYear = function () {
//   return this.totalNumberOfVisitorsPerDay() * 360;
// };

Park.prototype.totalNumberOfVisitorsPerYear = function () {
  let count = 0;
  for (let dinosaur of this.collectionOfDinosaurs){
    count += dinosaur.guestsAttractedPerDay;
  }
  return count * 365;
};

Park.prototype.totalRevenuePerYear = function () {
  let peopleVisitingYearly = this.totalNumberOfVisitorsPerYear();
  return peopleVisitingYearly * this.ticketPrice;
};

Park.prototype.numberOfDinosaursByDiet = function () {
  const numberOfDinosaursByDiet = {};

  for (const dinosaur of this.collectionOfDinosaurs) {
    if (numberOfDinosaursByDiet[dinosaur.diet]) {
      numberOfDinosaursByDiet[dinosaur.diet] += 1;
    } else {
      numberOfDinosaursByDiet[dinosaur.diet] = 1;
    }
  }
  return numberOfDinosaursByDiet;
};
module.exports = Park;
