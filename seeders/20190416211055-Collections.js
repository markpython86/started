'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert(
      'collections',
      [
        {
          title: "Last Action Hero",
          year: 1993,
          genre: "action",
          id: "tt0107362",
          image: "https://m.media-amazon.com/images/M/MV5BNjdhOGY1OTktYWJkZC00OGY5LWJhY2QtZmQzZDA2MzY5MmNmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Looney Tunes: Back in Action",
          year: "2003",
          genre: "action",
          id: "tt0318155",
          image: "https://m.media-amazon.com/images/M/MV5BMTkxNDk5MDQ2MF5BMl5BanBnXkFtZTYwMTA0Nzc2._V1_SX300.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "A Civil Action",
          year: "1998",
          genre: "action",
          id: "tt0120633",
          image: "https://m.media-amazon.com/images/M/MV5BZmEzNjhiZWEtNTM5OS00ZmQyLThhYjEtNjY4ZDZhOGFkMzI4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Missing in Action",
          year: "1984",
          genre: "action",
          id: "tt0087727",
          image: "https://m.media-amazon.com/images/M/MV5BZGRkY2M1YWMtYmZiMy00NDMzLTg0OTctYWNmNzllMGNlYmMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Action Jackson",
          year: "1988",
          genre: "action",
          id: "tt0094612",
          image: "https://m.media-amazon.com/images/M/MV5BZWFhNmI3OWQtOTU5Zi00ODA3LWExNjctMTllZWE2ZGE3ZTA1XkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Missing in Action 2: The Beginning",
          year: "1985",
          genre: "action",
          id: "tt0089604",
          image: "https://m.media-amazon.com/images/M/MV5BMTUzODkyODg4Ml5BMl5BanBnXkFtZTcwOTQ2NjE2NA@@._V1_SX300.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Class Action",
          year: "1991",
          genre: "action",
          id: "tt0101590",
          image: "https://m.media-amazon.com/images/M/MV5BNWY5Mjk4ZmItMTAzYS00NWE3LWEzYzYtNDgzY2MwMzA3MDIzXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Action Point",
          year: "2018",
          genre: "action",
          id: "tt6495770",
          image: "https://m.media-amazon.com/images/M/MV5BMjEyMTU5MTk1N15BMl5BanBnXkFtZTgwMzIzMzczNTM@._V1_SX300.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Braddock: Missing in Action III",
          year: "1988",
          genre: "action",
          id: "tt0094792",
          image: "https://m.media-amazon.com/images/M/MV5BZTRjODU0MTUtMjBmMi00ZTBmLTk2MDYtOWQzYjg1M2FiZDJiXkEyXkFqcGdeQXVyMjY3MjUzNDk@._V1_SX300.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Action Replay",
          year: "2010",
          genre: "action",
          id: "tt1396208",
          image: "https://m.media-amazon.com/images/M/MV5BMTMyMDc1MDIwMl5BMl5BanBnXkFtZTcwNDUyMDgwNA@@._V1_SX300.jpg",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete(
      'collections',
      null,
      {}
    );
  }
};
