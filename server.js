//Here, have a slew of imports.

const express = require('express');
const hbars = require('express-handlebars');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.engine("handlebars", hbars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


//methods:  devour(burgerName), 
//          addBurger(burgerName), 
//          select(table, searchCol, colVal)
const orm = require('./config/orm');

app.get('/', (req, res) => {
    orm.getAll(data => {
        let eaten = [];
        let uneaten = [];
        for (let i = 0; i < data.length; i++){
            if (data[i].devoured == true){
                eaten.push(data[i]);
            } else {
                uneaten.push(data[i]);
            }
        }   
        res.render('index', {
            eaten: eaten,
            uneaten: uneaten
        });
    });
});

app.get('/api/burgers', (req, res) => {
    orm.getAll(data => {
        res.send(data);
    });
});

app.put('/api/burgers', (req, res) => {
    console.log(req.body);
    orm.devour(req.body.burgerName, () => {
        console.log('success.');
    });
});

app.post('/api/burgers', (req, res) => {
    console.log(req.body);
    orm.addBurger(req.body.name, (data) => {
        console.log('success!');
    })
})

app.listen(PORT, () => {
    console.log("Listening on port " + PORT);
});
