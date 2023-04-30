const request = require("supertest");

const songs = require("../app.js");
const db = require("../db/dbConfig.js");

// describe("One", () => {
//   it("hi", () => {
//     expect(1).toBe(1);
//   });
//   describe("Two", () => {
//     describe("Two.point oh", () => {
//       it("hello", () => {
//         expect(1).toBe(1);
//       });
//     });

//     describe("Three", () => {
//       it("hello", () => {
//         expect(1).toBe(1);
//       });
//     });
//   });
// });

describe("Basic root route", () => {
  describe("/", () => {
    it("is able to make a successful get request to /, that returns a string", async () => {
      const response = await request(songs).get("/");
      expect(response.text).toBe("Welcome to Tuner");
    });
  });
});

describe("Songs", () => {
  beforeEach(async () => {
    await db.none("DELETE FROM songs WHERE true");
    await db.none("ALTER SEQUENCE songs_id_seq RESTART");
    await db.none(`INSERT INTO songs (name, artist, album, time, category, is_favorite) 
    VALUES 
      ('Bella Ciao(feat. Kabza De Small, DJ Maphorisa)', 'Tyler ICU', 'Bella Ciao (feat. Kabza De Small, DJ Maphorisa) - Single', '5:49', 'Amapiano', true),
      ('Vula Vala (feat. Nokwazi, Vigro Deep)', 'DJ Maphorisa', 'Scorpion Kings Live at Sun Arena 11 April', '6:14', 'Amapiano', true),
      ('Ke Star (feat. Vigro Deep)', 'Focalistic', 'Sghubu Ses Excellent', '7:06', 'Amapiano', true),
      ('Sponono (feat. WizKid, Burna Boy, Cassper Nyovest)', 'Kabza De Small', 'I Am the King of Amapiano: Sweet & Dust', '6:20', 'Amapiano', false),
      ('Umsebenzi Wethu (feat. Mr Jazziq, Lady Du, Zuma, Reece Madlisa)', 'Busta 929 & Mpura', 'Umsebenzi Wethu - Single', '6:16', 'Amapiano', true),
      ('Dinaledi (feat. Miano, Semi Tee, Kamu Dee)', 'Major League DJz', 'Pianochella!', '5:10', 'Amapiano', false),
      ('Balloon', 'Uncle Waffles', 'Amapiano Groove', '6:43', 'Amapiano', true);`);
  });

  afterAll(() => {
    db.$pool.end();
  });

  describe("/songs", () => {
    describe("GET", () => {
      it("returns all songs", async () => {
        const expected = [
          {
            id: 1,
            name: "Bella Ciao(feat. Kabza De Small, DJ Maphorisa)",
            artist: "Tyler ICU",
            album: "Bella Ciao (feat. Kabza De Small, DJ Maphorisa) - Single",
            time: "5:49",
            category: "Amapiano",
            is_favorite: true,
          },
          {
            id: 2,
            name: "Vula Vala (feat. Nokwazi, Vigro Deep)",
            artist: "DJ Maphorisa",
            album: "Scorpion Kings Live at Sun Arena 11 April",
            time: "6:14",
            category: "Amapiano",
            is_favorite: true,
          },
          {
            id: 3,
            name: "Ke Star (feat. Vigro Deep)",
            artist: "Focalistic",
            album: "Sghubu Ses Excellent",
            time: "7:06",
            category: "Amapiano",
            is_favorite: true,
          },
          {
            id: 4,
            name: "Sponono (feat. WizKid, Burna Boy, Cassper Nyovest)",
            artist: "Kabza De Small",
            album: "I Am the King of Amapiano: Sweet & Dust",
            time: "6:20",
            category: "Amapiano",
            is_favorite: false,
          },
          {
            id: 5,
            name: "Umsebenzi Wethu (feat. Mr Jazziq, Lady Du, Zuma, Reece Madlisa)",
            artist: "Busta 929 & Mpura",
            album: "Umsebenzi Wethu - Single",
            time: "6:16",
            category: "Amapiano",
            is_favorite: true,
          },
          {
            id: 6,
            name: "Dinaledi (feat. Miano, Semi Tee, Kamu Dee)",
            artist: "Major League DJz",
            album: "Pianochella!",
            time: "5:10",
            category: "Amapiano",
            is_favorite: false,
          },
          {
            id: 7,
            name: "Balloon",
            artist: "Uncle Waffles",
            album: "Amapiano Groove",
            time: "6:43",
            category: "Amapiano",
            is_favorite: true,
          },
        ];

        const response = await request(songs).get("/songs").expect(200);
        const parsedRes = JSON.parse(response.text);
        expect(parsedRes).toEqual(expect.arrayContaining(expected));
      });
    });

    describe("POST", () => {
      describe("handling a proper create request", () => {
        it("can create a song with all the fields", async () => {
          const response = await request(songs).post("/songs").send({
            name: "Star Roving",
            artist: "Slowdive",
            is_favorite: "false",
            time: "5:37",
          });

          const parsedRes = JSON.parse(response.text);
          expect(response.statusCode).toBe(200);
          expect(!!parsedRes.id).toBe(true);
          expect(parsedRes.artist).toEqual("Slowdive");
          expect(parsedRes.name).toEqual("Star Roving");
          expect(parsedRes.is_favorite).toEqual(false);
          expect(parsedRes.time).toEqual("5:37");
        });
      });
      describe("handling an improper create request", () => {
        it("will return an error if the name is missing", async () => {
          const response = await request(songs).post("/songs").send({
            artist: "Slowdive",
            is_favorite: "false",
            time: "5:37",
          });

          const parsedRes = JSON.parse(response.text);
          expect(response.statusCode).toBe(400);
          expect(!!parsedRes.id).toBe(false);
        });
        it("will return an error if artist is missing", async () => {
          const response = await request(songs).post("/songs").send({
            name: "Star Roving",
            is_favorite: "false",
            time: "5:37",
          });

          const parsedRes = JSON.parse(response.text);
          expect(response.statusCode).toBe(400);
          expect(!!parsedRes.id).toBe(false);
        });

        it("will return an error if is_favorite is not a boolean", async () => {
          const response = await request(songs).post("/songs").send({
            artist: "Slowdive",
            is_favorite: "maybe",
            time: "5:37",
          });

          const parsedRes = JSON.parse(response.text);
          expect(response.statusCode).toBe(400);
          expect(!!parsedRes.id).toBe(false);
        });
      });
    });
  });

  describe("/songs/:id", () => {
    describe("GET", () => {
      it("with correct id - fetches the correct song with the correct key/properties", async () => {
        const response = await request(songs).get("/songs/1");
        const parsedRes = JSON.parse(response.text);
        expect(parsedRes.name).toEqual("Bella Ciao(feat. Kabza De Small, DJ Maphorisa)");
        expect(parsedRes.artist).toEqual("Tyler ICU");
        expect(parsedRes.album).toEqual("Bella Ciao (feat. Kabza De Small, DJ Maphorisa) - Single");
        expect(parsedRes.time).toEqual("5:49");
        expect(parsedRes.category).toEqual("Amapiano");
        expect(parsedRes.is_favorite).toEqual(true);
      });

      it("with incorrect id - sets status to 404 and returns error key", async () => {
        const response = await request(songs).get("/songs/98989898");
        expect(response.statusCode).toEqual(404);
      });
    });

    describe("PUT", () => {
      describe("handling a proper update request", () => {
        it("can update a song with all the fields", async () => {
          const response = await request(songs).put("/songs/1").send({
            name: "Bluebird of Happiness",
            artist: "Mojave 3",
            is_favorite: "true",
            time: "9:13",
          });

          const parsedRes = JSON.parse(response.text);
          expect(response.statusCode).toBe(200);
          expect(!!parsedRes.id).toBe(true);
          expect(parsedRes.artist).toEqual("Mojave 3");
          expect(parsedRes.name).toEqual("Bluebird of Happiness");
          expect(parsedRes.is_favorite).toEqual(true);
          expect(parsedRes.time).toEqual("9:13");
        });
      });
      describe("handling an improper update request", () => {
        it("will return an error if the name is missing", async () => {
          const response = await request(songs).post("/songs").send({
            artist: "Mojave 3",
            is_favorite: "true",
            time: "9:13",
          });

          const parsedRes = JSON.parse(response.text);
          expect(response.statusCode).toBe(400);
          expect(!!parsedRes.id).toBe(false);
        });
        it("will return an error if artist is missing", async () => {
          const response = await request(songs).post("/songs").send({
            name: "Bluebird of Happiness",
            is_favorite: "true",
            time: "9:13",
          });

          const parsedRes = JSON.parse(response.text);
          expect(response.statusCode).toBe(400);
          expect(!!parsedRes.id).toBe(false);
        });

        it("will return an error if is_favorite is not a boolean", async () => {
          const response = await request(songs).post("/songs").send({
            artist: "Mojave 3",
            is_favorite: "maybe",
            time: "9:13",
          });

          const parsedRes = JSON.parse(response.text);
          expect(response.statusCode).toBe(400);
          expect(!!parsedRes.id).toBe(false);
        });
      });
    });

    describe("DELETE", () => {
      it("with valid id - deletes the correct song", async () => {
        const response = await request(songs).delete("/songs/1").send();
        const parsedRes = JSON.parse(response.text);
        expect(parsedRes.name).toEqual("Bella Ciao(feat. Kabza De Small, DJ Maphorisa)");
      });
      it("with invalid id - does not delete anything", async () => {
        const response = await request(songs).delete("/songs/99999").send();
        const parsedRes = JSON.parse(response.text);
        expect(!!parsedRes.id).toBe(false);
        expect(response.statusCode).toEqual(404);
      });
    });
  });
});
