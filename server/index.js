const express = require('express');
const app     = express();

app.set('view engine', 'ejs');
app.set('views', './server/views');

app.use(express.static('public'));
app.use(express.urlencoded());
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`> Start server at port: ${PORT}`));

app.get('/', (req, res) => {
    res.render('index');
});