var express = require("express");
var router = express.Router();
var path = require("path");

var request = require("request");
var cheerio = require("cheerio");

var Comment = require("../models/Comments.js");
var Article = require("../models/Article.js");


router.get("/", function(req, res) {
    console.log("scrape_controller.js: ", req + " " + res);
    res.redirect("/article");
});

router.get("/scrape", function(req, res) {
    console.log("scrape_controller.js get /scrape", req + " " + res);
    request("https://www.espn.com/", function(err, res, html) {
        var $ = cheerio.load(html);
        var titleArr = [];

        $(".c-entry-box--compact__title").each(function(i, element) {
            var result = [];
            result.title = $(this)
                .children("a")
                .text();
            result.link = $(this)
                .children("a")
                .attr("href")
                if (result.title !== "" && result.link !== "") {
                    if (titleArr.indexOf(result.title) == -1) {
                        titlesArr.push(result.title);
                        Article.count({ title: result.title }, function(err, test) {
                            if (test === 0) {
                                var entry = new Article(result);
                                entry.save(function(err, doc) {
                                    if (err) {
                                        console.log("error: ", err);
                                    }
                                    else {
                                        console.log("doc: ", doc);
                                    }
                                })
                            }   
                        })    
                    } else {
                        console.log("Article on list");
                    }
                }
                    else { 
                        console.log("Missing data: Not Saved");
                }
                });
           //   res.redirect("/");
    });
});

router.get("/article", function(req,res){
    console.log("router.get/articles");
    Article.find().sort({ _id: -1 }).exec(function(err,doc) {
        console.log("router.get/articles after find");
        if (err) {
            console.log("error: ", err);
        } else {
            console.log("router.get/articles before render");
            console.log("doc length: ", doc.length);
            var doclen = doc.length;
            if (doclen === 0) {
                console.log("No articles found");
            } else {
            var art = { article: doc };
            console.log("art", art);
            res.render("index");
            }
        }
    })
});


router.get("/articles-json", function(req,res) {
    Article.find({}, function(err,doc) {
        if (err) {
            console.log("error: ", err);
        } else {
            res.json(doc);
        }
        })
});
module.exports = router;
