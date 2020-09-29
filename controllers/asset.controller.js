var { Asset } = require("../models/models");
var saveFile = require("../services/asset");
const aboutController = require("./about.controller");

async function createSingleAsset(req, res, next) {
	try {
		let file = saveFile(req.files.file);
		let asset = await Asset.create({
			url: "https://dyrevelfaerd-alexander.herokuapp.com/file-bucket/" + file
		});
		res.json(asset);
	} catch (error) {
		console.error(error);
		res.status(500).end();
	}
}

async function getAllAssets(req, res, next) {
	try {
		let assets = await Asset.findAll();
		res.json(assets);
	} catch (error) {
		console.error(error);
		res.status(500).end();
	}
}

async function getSingleAsset(req, res, next) {
	try {
		let asset = await Asset.findByPk(req.params.id);
		res.json(asset);
	} catch (error) {
		console.error(error);
		res.status(500).end();
	}
}

/*async function patchAllAssets() {
    let assets = await Asset.findAll();

    for(let i = 0; i < assets.length; i++) {
        assets[i].url = assets[i].url.replace("http://localhost:4000/", "https://dyrevelfaerd-alexander.herokuapp.com/");
        await assets[i].save();
    }
}

patchAllAssets();*/

module.exports = {
	createSingleAsset,
	getAllAssets,
	getSingleAsset
};
