const router = require('express').Router()
const User = require('../models/User')
const Posts = require('../models/Posts')
const Comment = require('../models/Comment')

router.get('/', async (req, res) => {
    try {
        const postData = await Posts.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username']
                }
            ]
        })

        const posts = postData.map((post) => post.get({ plain: true }))
        // console.log(posts)
        res.render('homepage', {
            posts,
            loggedIn: req.session.loggedIn,
            
        })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }

})

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

router.get('/dashboard', async (req, res) => {
    if(req.session.loggedIn) {
        try {
            const postData = await Posts.findAll({
                include: [
                    {
                        model: User,
                        where: {
                            username: req.session.username
                        }
                    }
                ]
            })
    
            const posts = postData.map((post) => post.get({ plain: true }))
            console.log(posts)
            console.log(req.session.username)
            res.render('dashboard', {
                posts,
                username: req.session.username,
                loggedIn: req.session.loggedIn,
                
            })
        } catch (err) {
            console.log(err)
            res.status(500).json(err)
        }
    } else {
        res.redirect('/login')
    }
   
});

router.get('/dashboard/addPost', (req, res) => {
    if(req.session.loggedIn) {
        res.render('add-post')
    } else {
        res.redirect('/login')
    }
    
})

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get('/posts/:id', async (req, res) => {
    try {
        
        const dbPostData = await Posts.findByPk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['id', 'username'],
                },
                {
                    model: Comment,
                    attributes: ['comment', 'post_id']
                }
            ],
        })

        const post = dbPostData.get({ plain: true})

        console.log(post)
        res.render('view-post', {post, loggedIn: req.session.loggedIn})
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.get('/dashboard/post/:id', async (req, res) => {
    try {
        
        const dbPostData = await Posts.findByPk(req.params.id)

        const post = dbPostData.get({ plain: true})

        console.log(post)
        res.render('update-post', {post, loggedIn: req.session.loggedIn})
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})


module.exports = router