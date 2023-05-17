const express = require('express');
require('./conn');
const User = require('./user');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/create', async (req, res) => {
    const user = new User(req.body);
    const data = await user.save();
    res.send(data);
})

app.get('/', async (req, res) => {
    const user = await User.find();
    res.send(user);
})
app.delete('/delete/:_id', async (req, res) => {
    const user = await User.deleteOne(req.params);
    res.send(user);
})

app.put('/update/:_id', async (req, res) => {
    const data = await User.updateOne(
        req.params,
        { $set: req.body }
    );
    res.send(data);
})

app.listen(5000);