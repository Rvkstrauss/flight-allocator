
// {
//   "$id": "https://example.com/person.schema.json",
//   "$schema": "http://json-schema.org/draft-07/schema#",
//   "title": "Flight",
//   "type": "object",
//   "properties": {
//     "id": {
//       "type": "string",
//       "description": "flight unique id"
//     },
//     "origin": {
//       "type": "string",
//       "description": "flight start origin"
//     },
//     "destination": {
//       "type": "string",
//       "description": "flight end destination",
//     },
//     "capacity": {
//       "description": "number of available seats on the flight",
//       "type": "integer",
//       "minimum": 0
//     }
//   }
// }

// {
//   "$id": "https://example.com/person.schema.json",
//   "$schema": "http://json-schema.org/draft-07/schema#",
//   "title": "PNR",
//   "type": "object",
//   "properties": {
//     "id": {
//       "type": "string",
//       "description": "PNR - unique id"
//     },
//     "origin": {
//       "type": "string",
//       "description": "reservation start origin"
//     },
//     "destination": {
//       "type": "string",
//       "description": "flight end destination",
//     },
//     "passengers": {
//       "description": "number of passengers in the reservation",
//       "type": "integer",
//       "minimum": 1
//     }
//   }
// }
const pnrKeys = [
  'id',
  'origin',
  'destination',
  'passengers'
];

const flightKeys = [
    'id',
    'origin',
    'destination',
    'capacity'
];


const populateRawObject = (data) => {
    const { flights, pnr } = data;
    const response = {};
    response[flight] = flightKeys.map((key, index) => {
        flights[key] = flights[index];
    })
    response[pnr] = pnrKeys.map((key, index) => {
        pnr[key] = flights[index];
    })
};

module.exports = {
  populateRawObject,
};
