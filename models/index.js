const User = require('./User')
const Posts = require('./Posts')
const Comment = require('./Comment')

User.hasMany(Posts, {
    foreignKey: 'user_id'
})

Posts.belongsTo(User, {
    foreignKey: 'user_id'
})

User.hasMany(Comment, {
    foreignKey: 'user_id'
})

Posts.hasMany(Comment, {
    foreignKey: 'post_id'
})

module.exports = {User, Posts, Comment}