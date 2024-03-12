// tests/test-setup.js
import chai from 'chai';
import supertest from 'supertest';
import app from '../app'; // Import your Express app

global.expect = chai.expect;
global.request = supertest(app);
