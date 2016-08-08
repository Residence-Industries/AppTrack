import { expect } from 'chai';
import { supertest } from 'supertest';

import app from '../../server/app';
// var supertest = supertest(app);
// var port = process.env.PORT || 4000;

// describe('API Test', () => {
//   var server;
//   var testItem = {
//     isAnItem: true
//   };
//
//   before((done) => {
//     server = app.listen(port, () => {
//       done();
//     });
//   });
//
//   after((done) => {
//     server.close(done);
//   });
// })
