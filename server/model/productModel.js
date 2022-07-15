const mongoose = require("mongoose");
const productModel = mongoose.Schema(
	{
		title: {
			type: String,
		},
		description: {
			type: String,
		},
		price: {
			type: Number,
		},
		quantity: {
			type: Number,
		},
		image: {
			type: String,
		},
		imageID: {
			type: String,
		},
		status: {
			type: Boolean,
		},
		user: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: "users",
			},
		],
	},
	{ timestamps: true },
);

module.exports = mongoose.model("products", productModel);
