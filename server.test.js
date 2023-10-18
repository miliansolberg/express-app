const request = require('supertest');
const app = require('./server'); // Make sure to export the app in server.js

describe('Get Endpoints', () => {
    it('should get a message from the root', async () => {
        const res = await request(app)
            .get('/')
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('Hello, World!');
    });
});