const router = require('express').Router();
const { Comment } = require('../../models');
const { User } = require('../../models');
const { Posts } = require('../../models');

//create new comment
router.post('/comment', async (req, res) => {
    console.log('In comment api')
    try {
        const dbCommentData = await Comment.create({
            comment: req.body.comment,
            user_id: req.body.userId,
            post_id: req.body.postId
        });
        console.log(dbCommentData)
        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(dbCommentData);
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router
