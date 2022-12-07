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
        // req.session.save(() => {
        //     req.session.loggedIn = true; 
        // });
        res.status(200).json(dbCommentData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/addPost', async (req, res) => {
    console.log('In add post api')
    console.log(req.session.userId)
    try {
        const dbPostData = await Posts.create({
            name: req.body.title,
            description: req.body.content,
            user_id: req.session.userId
        })
        console.log(dbPostData)
        // req.session.save(() => {
        //     req.session.loggedIn = true;
        // });
        res.status(200).json(dbPostData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.put('/updatePost', async (req, res) => {
    console.log('In update post api')
    try {
        const dbPostData = await Posts.update(
            {
                name: req.body.title,
                description: req.body.content,
            },
            {
                where: {
                    id: req.body.postId
                }
            }
        )
        console.log(dbPostData)
        res.status(200).json(dbPostData)
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
    
})

router.delete('/deletePost', async (req, res) => {
    console.log('In delete post api')
    try {
        const dbPostData = await Posts.destroy(
            {
                where: {
                    id: req.body.postId
                }
            }
        )
        console.log(dbPostData)
        res.status(200).json(dbPostData)
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
    
})
module.exports = router
