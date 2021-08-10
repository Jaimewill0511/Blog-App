const Post = require("../database/setup");

require("dotenv").config();
const qoutes = [
    '“The first draft is just you telling yourself the story.” ― Terry Pratchett',
    '“Read a thousand books, and your words will flow like a river.” ― Lisa See',
    '“You don’t start out writing good stuff. You start out writing crap and thinking it’s good stuff, and then gradually you get better at it.That’s why I say one of the most valuable traits is persistence.” ― Octavia E. Butler',
    '“You can always edit a bad page. You can’t edit a blank page.” ― Jodi Picoult',
    '“Every secret of a writer’s soul, every experience of his life, every quality of his mind, is written large in his works.” — Virginia Woolf',
    '“And by the way, everything in life is writable about if you have the outgoing guts to do it, and the imagination to improvise. The worst enemy to creativity is self-doubt.” ― Sylvia Plath',
    '"I think all writing is a disease. You can’t stop it.” — William Carlos Williams',
    '"A professional writer is an amateur who didn’t quit.” — Richard Bach'
  ];
  let q =  Math.floor(Math.random() * 8);
  const p = qoutes[q];

exports.homePage = function(req, res){
  Post.find({}, function (err, result){
    res.render("home", {
    startingContent: process.env.homeStartingContent,
    posts: result
      });
    });
    
    
    };
    
exports.aboutPage = function(req, res){
  res.render("about", {aboutContent: process.env.aboutContent});
    };
    
exports.contactPage = function(req, res){
  res.render("contact", {contactContent: process.env.contactContent});
    };
    
exports.composePage = function(req, res){
  res.render("compose", {
        quotes: p
    });
  };
    
exports.deletePost = function (req, res){
  const value = req.body.button;
    
  Post.findOneAndDelete({_id: value}, function(err){
    if (err){
      console.log(err);
    }else {
      console.log("Successful deletion");
      }
      });
    res.redirect('/');
    };
    
exports.composePost = function(req, res){
  const postTitle = req.body.postTitle;
  const postValue = req.body.postBody;
  const sPost = new Post({
    title: postTitle,
    content: postValue
      });
    
  sPost.save(function(err){
    if (!err) {
      res.redirect("/");
    }else{
      console.log(err);
        }
      });
    };
    
exports.findPostsById = function(req, res){
    
      const requestedId = req.params.postid;
    
    Post.findOne({_id: requestedId}, function (err, result){
    if (!err){
    res.render("post", {
        title: result.title,
        content: result.content
        });
      }
    
    });
    
 };