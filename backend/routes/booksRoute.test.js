import request from 'supertest';
import express from 'express';
import { Book } from '../models/bookModel.js';
import booksRoute from './booksRoute'; // Replace with the correct path to your route file

const app = express();
app.use(express.json());
app.use('/books', booksRoute);

// Mocking the Book model methods
jest.mock('../models/bookModel.js');

describe('POST /books', () => {
    it('responds with status 201 and creates a new book', async () => {
        const bookData = {
            title: 'Test Book',
            author: 'Test Author',
            publishYear: 2022,
        };

        Book.create.mockResolvedValue(bookData);

        const response = await request(app)
            .post('/books')
            .send(bookData);

        expect(response.status).toBe(201);
        expect(response.body).toEqual(bookData);
    });

    it('responds with status 404 for invalid request body', async () => {
        const response = await request(app)
            .post('/books')
            .send({});

        expect(response.status).toBe(404);
    });
});

describe('GET /books', () => {
    it('responds with status 200 and returns all books', async () => {
        const books = [
            { title: 'Book 1', author: 'Author 1', publishYear: 2020 },
            { title: 'Book 2', author: 'Author 2', publishYear: 2021 },
        ];

        Book.find.mockResolvedValue(books);

        const response = await request(app).get('/books');

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            count: books.length,
            data: books,
        });
    });
});

// Similar tests can be written for GET /books/:id, PUT /books/:id, and DELETE /books/:id
