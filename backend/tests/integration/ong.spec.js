const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG',() => {
  beforeEach(async () =>{
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () =>{
    await connection.destroy();
  })

  it('shoult be able to create a new ong',async () => {
    const response = await request(app)
      .post('/ongs')
      // .set('Authorization','idvalido')
      .send({
        name: "casa dos anjps",
        email: "asdsadsa@gafa.com",
        whatsapp: "3222222222",
        city: "ri novs",
        uf: "mg"
      });
      console.log(response.body)

    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toHaveLength(8);
  });
});