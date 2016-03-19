/* This file handles additonal functions
 * that are needed across the app.
 */
'use strict';

// Checks to make sure used is logged in
exports.isAuthenticated = function (req, res, next) {
    // Check to see if there is there is a user in session
    var backURL = req.header('Referer') || '/';
    if (req.session.user !== undefined && req.session.user !== null &&
        req.session.user.toLowerCase() === req.params.user.toLowerCase()) {
        return next();
    }
    res.redirect(backURL);
};

// Sets complete manga object
exports.mangaObj = function (manga) {
    return {
        title: manga.title,
        author: manga.author,
        url: manga.url,
        userStatus: manga.userStatus,
        type: manga.type,
        categories: manga.categories,
        chapter: manga.chapter,
        seriesStatus: manga.seriesStatus,
        plot: manga.plot,
        altName: manga.altName,
        direction: manga.direction,
        thumbnail: manga.thumbnail
    };
};

// Sets complete manga object
exports.userObj = function (user) {
    if (user.password === user.password2) {
        return {
            username: user.username,
            password: user.password,
            email: user.email,
            firstname: user.firstname,
            lastname: user.lastname
        };
    }
    else {
        return null;
    }

};

// Sets complete manga object
exports.jadeObj = function (sess, req) {
    return {
        title: sess.title,
        user: sess.user,
        url: sess.url,
        token: sess.token,
        api: sess.api,
        username: sess.username,
        msg: {
            error: req.flash('error'),
            info: req.flash('info'),
            success: req.flash('success')
        }
    };
};