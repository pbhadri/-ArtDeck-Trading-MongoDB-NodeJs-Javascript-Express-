const Trade = require('../models/trade');

exports.index = (req, res, next) => {
    let categories = [];
    Trade.distinct("category", function(error, results){
        categories = results;
    });
    Trade.find()
    .then(trades => res.render('./trade/index', {trades, categories}))
    .catch(err=>next(err));
};

exports.new = (req, res) => {
    res.render('./trade/new');
};

exports.create = (req, res, next) => {
    let trade = new Trade(req.body);
    trade.host = req.session.user;
    trade.save()
    .then(trade=> {
        req.flash('success', 'You have successfully created a new trade');
        res.redirect('/trades');
    })
    .catch(err=>{
        if(err.name === 'ValidationError'){
            req.flash('error', err.message);
            res.redirect('back');
        }else{
            next(err);
        }
    });
};

exports.show = (req, res, next) => {
    let id = req.params.id;
    var userId = req.session.user;
    Trade.findById(id).populate('host', 'firstName lastName')
    .then(trade=>{
        if(trade) {
            return res.render('./trade/show', {trade, userId});
        } else {
            let err = new Error('Cannot find a trade with id ' + id);
            err.status = 404;
            next(err);
        }
    })
    .catch(err=>next(err));
};

exports.edit = (req, res, next) => {
    let id = req.params.id;
    Trade.findById(id).populate('host', 'firstName lastName')
    .then(trade=>{
        if(trade) {
            return res.render('./trade/edit', {trade});
        } else {
            let err = new Error('Cannot find a trade with id ' + id);
            err.status = 404;
            next(err);
        }
    })
    .catch(err=>next(err));
};

exports.update = (req, res, next) => {
    let id = req.params.id;
    let trade = req.body;
    Trade.findByIdAndUpdate(id, trade, {useFindAndModify: false, runValidators: true})
    .then(trade=>{
        if(trade) {
            res.redirect('/trades/'+id);
        } else {
            let err = new Error('Cannot find a trade with id ' + id);
            err.status = 404;
            next(err);
        }
    })
    .catch(err=> {
        if(err.name === 'ValidationError')
            err.status = 400;
        next(err);
    });
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    Trade.findByIdAndDelete(id, {useFindAndModify: false})
    .then(trade =>{
        if(trade) {
            res.redirect('/trades');
        } else {
            let err = new Error('Cannot find a trade with id ' + id);
            err.status = 404;
            return next(err);
        }
    })
    .catch(err=>next(err));
};

exports.watch = (req, res, next) => {
    let id = req.params.id;
    var userId = req.session.user;
    console.log(userId);
    Trade.findById(id)
        .then(trade => {
            if (trade) {
                if (trade.watchlist.find(pz => pz == userId) == null) {
                    trade.watchlist.push(userId); 
                    trade.save().
                        then(res.redirect('/users/profile'));
                }

                else {
                    const index = trade.watchlist.indexOf(userId);
                    if (index > -1) {
                        trade.watchlist.splice(index, 1);
                        trade.save().
                            then(res.redirect('/users/profile'));
                    }
                }
            }
            else {
                let err = new Error('Sorry Cannot find trade with id ' + id);
                err.status = 404;
                next(err);
            }
        })
        .catch(err => next(err));
};