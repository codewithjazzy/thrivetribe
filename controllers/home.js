module.exports = {
    getIndex: (req, res) => {
        res.render('index.ejs');
    },
    getAbout: (req, res) => {
        res.render('about.ejs');
    },
    getTherapistFinder: (req, res) => {
        res.render('therapistfinder.ejs');
    },
    getTypesOfTherapy: (req, res) => {
        res.render('typesoftherapy.ejs');
    },
    getTherapy101: (req, res) => {
        res.render('therapystarter.ejs');
    },
    getBlog: (req, res) => {
        res.render('blog.ejs');
    },
    getTherapistPortal: (req, res) => {
        res.render('therapistportal.ejs');
    },
};
