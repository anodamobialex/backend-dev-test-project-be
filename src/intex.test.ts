import {app} from "./index";
import request from "supertest"

describe('Users', () => {
    it('should create user', async () => {
        const res = await request(app)
            .post('/users')
            .send({
                firstName: "John",
                lastName: 'Doe',
                age: 42
            });

        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty("data")
    });

    it('should get user list', async () => {
        const res = await request(app)
            .get('/users')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty("data")
    });

    it('should get user by id', async () => {
        const res = await request(app)
            .get('/users?id=1')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty("data")
    });

    it('should update user', async () => {
        const res = await request(app)
            .patch('/users?id=1')
            .send({
                age: 24
            });

        expect(res.statusCode).toEqual(200)
    });

    it('should delete user', async () => {
        const res = await request(app)
            .delete('/users?id=1')

        expect(res.statusCode).toEqual(200)
    });
});