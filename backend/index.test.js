import request from 'supertest';
import app from './index.js'; // Replace with the correct path to your app file

let server;

// Set up server and mongoose connection before running the tests
beforeAll(async () => {
    server = app.listen(5555);
});

// Close server and mongoose connection after running the tests
afterAll(async () => {
    await server.close();
});

describe('GET /', () => {
    it('responds with status 200', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
    });
});

describe('Express App', () => {
    it('has the /books route', async () => {
        const response = await request(app).get('/books');
        expect(response.status).toBe(200);
    });
});
