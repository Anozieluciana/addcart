const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "uploads");
	},
	filename: function (req, file, cb) {
		const uniqueSuffix = Date.now() + "_" + Math.round(Math.random() * 1e9);
		cb(
			null,
			file.fieldname + "_" + uniqueSuffix + path.extname(file.originalname),
		);
	},
});

const upload = multer({ storage: storage }).single("image");

module.exports = upload;
