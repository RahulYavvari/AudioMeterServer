const getInput = (req, res) => {
    res.render("input");
}

const postInput = (req, res) => {
    let name = req.body.name;
    let age = req.body.age;

    console.log(`[LOG: POST REQ TYPE:INPUT] ${name} ${age}`);

    res.redirect("test");
}

module.exports = {
    getInput,
    postInput
}