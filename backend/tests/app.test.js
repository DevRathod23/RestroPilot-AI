const request = require('supertest');
const app = require('../src/app'); // Yeh file abhi humne nahi banayi hai, isliye test fail hoga (Red Phase)

describe('Basic API Testing', () => {
    it('Should return 200 OK for the root /health endpoint', async () => {
        const response = await request(app).get('/health');
        expect(response.statusCode).toBe(200);
        expect(response.body.status).toBe('success');
    });
});