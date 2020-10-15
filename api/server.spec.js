const supertest = require("supertest");
const server = require("./server");

describe("server.js", () => {
  describe("GET /", () => {
    it("Should return 200 ok", () => {
      return supertest(server)
        .get("/")
        .then((res) => {
          expect(res.status).toBe(200);
        });
    });
    it('should return api & up',()=>{
        return supertest(server).get('/').then(res=>{
            expect(res.body.api).toBe("up")
        })
    })
    it('should return JSON',()=>{
        return supertest(server).get('/').then(res=>{
            expect(res.type).toMatch(/json/i)
        })
    })
  });
});
