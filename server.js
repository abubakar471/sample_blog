const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 3000;
hbs.registerPartials(__dirname + '/views/partials');
hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
})
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
})

app.use((req,res,next) => {
    var now = new Date().toString();
    console.log(`${now} ${req.method} ${req.url}`);
    res.render('mantain.hbs');
})
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));


app.get('/help', (req, res) => {
});

app.get('/', (req,res) => {
    res.render('home.hbs', {
        page_title : 'home page',
        welcomeMessage : 'hello programmer',
    });
})

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        page_title: 'about page bro :<',
    });
});

app.listen(port, () => console.log(`server is running on ${port}`));