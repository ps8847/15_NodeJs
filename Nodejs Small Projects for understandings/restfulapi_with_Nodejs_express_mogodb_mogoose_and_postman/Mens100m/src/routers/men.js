const express = require("express");
const router = new express.Router();
const MensRanking = require("../models/mens");

// we will handle post req

router.post("/mens", async(req, res) => {
    try {
        const addingMensRecords = new MensRanking(req.body)
        console.log(req.body);
        const insertMens = await addingMensRecords.save();
        res.send(insertMens);
    } catch (e) {
        res.status(400).send(e);
    }
})

// will handle read req    along with sorts

router.get("/mens", async(req, res) => {
    try {
        const getMens = await MensRanking.find({}).sort({ "ranking": 1 });
        res.status(201).send(getMens);
    } catch (e) {
        res.status(400).send(e);
    }
})

//will handle get requets with id 

router.get("/mens/:id", async(req, res) => {
    try {
        const _id = req.params.id;
        const getMen = await MensRanking.findById(_id);
        res.status(201).send(getMen);
    } catch (e) {
        res.status(400).send(e);
    }
})

//will handle patch request with id

router.patch("/mens/:id", async(req, res) => {
    try {
        const _id = req.params.id;
        const UpdateMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.status(201).send(UpdateMen);
    } catch (e) {
        res.status(500).send(e);
    }
})

// will handle he delete request

router.delete("/mens/:id", async(req, res) => {
    try {
        const deleteMen = await MensRanking.findByIdAndDelete(req.params.id);
        res.status(201).send(deleteMen);
    } catch (e) {
        res.status(500).send(e);
    }
})


module.exports = router;