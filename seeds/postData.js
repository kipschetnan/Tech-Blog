const Posts = require('../models/Posts');

const postdata = [
  {
    name: 'Test1',
    description: 'This is test 1',
    user_id: 1,
  },
  {
    name: 'Test2',
    description: 'This is test 2',
    user_id: 1,
  },
  {
    name: 'Test3',
    description: 'This is test 3',
    user_id: 2,
  },
  {
    name: 'Test4',
    description: 'This is test 4',
    user_id: 3,
  },
  {
    name: 'Test5',
    description: 'This is test 5',
    user_id: 3,
  },
  {
    name: 'Test6',
    description: 'This is test 6',
    user_id: 2,
  },
];

const seedPosts = () => Posts.bulkCreate(postdata);

module.exports = seedPosts;