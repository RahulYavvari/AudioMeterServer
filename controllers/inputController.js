const User = require("../models/userdata");

const getInput = (req, res) => {
    res.render("input");
}

const postInput = (req, res) => {
    let name = req.body.name;
    let age = req.body.age;

    console.log(`[LOG: POST REQ TYPE:INPUT] ${name} ${age}`);

    const user = new User({
        name: name,
        age: age
    });

    user.save()
        .then(() => {
            res.redirect("test");
        })
        .catch(() => {
            console.log(err);
        });
}

module.exports = {
    getInput,
    postInput
}