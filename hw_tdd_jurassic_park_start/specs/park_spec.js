const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let dinosaur1;
  let dinosaur2;
  let dinosaur3;
  let dinosaur4;
  let dinosaurs;
  let park;

  beforeEach(function () {
    dinosaur1 = new Dinosaur("Triceratops", "herbivorous", 45);
    dinosaur2 = new Dinosaur("Brachiosaurus", "herbivorous", 50);
    dinosaur3 = new Dinosaur("Diplodocus", "herbivorous", 30);
    dinosaur4 = new Dinosaur("Condorraptor", "carnivore", 55);
    // dinosaurs = [dinosaur1, dinosaur2, dinosaur3, dinosaur4];
    park = new Park("Jurassic Park", 1000);
  });

  it('should have a name', function(){
    const expected = "Jurassic Park";
    assert.strictEqual(park.name, expected);
  });

  it('should have a ticket price', function(){
    const expected = 1000;
    assert.strictEqual(park.ticketPrice, expected);
  });

  it('should have a collection of dinosaurs', function(){
    const expected = [];
    assert.deepStrictEqual(park.collectionOfDinosaurs, expected);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    const expected = [dinosaur1, dinosaur2];
    assert.deepStrictEqual(park.collectionOfDinosaurs, expected);
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.removeDinosaur(dinosaur4);
    const expected = [dinosaur1, dinosaur2, dinosaur3];
    assert.deepStrictEqual(park.collectionOfDinosaurs, expected);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.mostPopularDinosaur();
    const expected = 55;
    assert.deepStrictEqual(actual, expected);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.dinosaursBySpecies("Diplodocus");
    const expected = 1;
    assert.deepStrictEqual(actual.length, expected);
  });

  it('should be able to remove all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.removeDinosaursBySpecies("Diplodocus");
    const expected = 0;
    assert.deepStrictEqual(actual.length, expected)
  });

  it("should calculate the total number of visitors per day", function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.totalNumberOfVisitorsPerDay();
    const expected = 180;
    assert.deepStrictEqual(actual, expected);
  })

  it("should calculate the total number of visitors per year", function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.totalNumberOfVisitorsPerYear();
    const expected = 65700;
    assert.deepStrictEqual(actual, expected);
  });

  it("should calculate the total renue form ticket sales for one year", function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.totalRevenuePerYear();
    const expected = 65700000;
    assert.deepStrictEqual(actual, expected);
  });

  it("should be able to remove all dinosaurs of a particular species", function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    park.removeAllBySpecies("Diplodocus");
    const actual = park.collectionOfDinosaurs;
    const expected = [dinosaur1, dinosaur2, dinosaur4];
    assert.deepStrictEqual(actual, expected);
  });

  it("should be able to calculate number of dinosaurs for each diet type", function(){
    park.addDinosaur(dinosaur1);
    park.addDinosaur(dinosaur2);
    park.addDinosaur(dinosaur3);
    park.addDinosaur(dinosaur4);
    const actual = park.numberOfDinosaursByDiet();
    const expected = { carnivore: 1, herbivorous: 3}
    assert.deepStrictEqual(actual, expected);
  });

});
