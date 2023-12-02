import mongoose from "mongoose";

const { Schema } = mongoose;

const PostSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, "Please provide a name"],
			trim: true,
		},
		markdown: {
			type: String,
		},
		slug: {
			type: String,
			required: [true, "Please provide a slug"],
			trim: true,
		},
		author: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: [true, "Please provide the author name"],
		},
	},
	{ timestamps: true }
);
const PostModel = mongoose.models.Post || mongoose.model("Post", PostSchema);

export default PostModel;
