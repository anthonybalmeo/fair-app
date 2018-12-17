import { checkVehicleIsFavorite } from '../index'

const tests = [
  {
    testType: 'It test vehicle within favorite vehicle list',
    vehicle: {
      id: '123',
    },
    favoriteVehicles: [{vin: '123'}],
    exptectation: true,
  },
  {
    testType: 'It test vehicle not within favorite vehicle list',
    vehicle: {
      id: '123',
    },
    favoriteVehicles: [{vin: '234'}],
    exptectation: false,
  },
  {
    testType: 'It test if favorite vehicle is empty',
    vehicle: {
      id: '123',
    },
    favoriteVehicles: [],
    exptectation: false,
  },
];

describe('Test checkVehicleIsFavorite', () => {
  tests.forEach((test) => {
    it(`${test.testType}`, () => {
      const result = checkVehicleIsFavorite(test.vehicle, test.favoriteVehicles);
      expect(result).toEqual(test.exptectation);
    });
  });
});
