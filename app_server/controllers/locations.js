/* Get 'home' page */
const homelist = (req, res) => {
    res.render('locations-list', {title: 'Home'});
};

/* Get 'Location info' page */
const locationInfo = (req, res) => {
    res.render('index', {title: 'Location Info'});
};

/* Get 'Add Review' page */
const addReview = (req, res) => {
    res.render('index', {title: 'Add Review'});
};

module.exports = {
    homelist,
    locationInfo,
    addReview
};