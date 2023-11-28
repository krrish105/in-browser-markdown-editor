import mongoose from "mongoose";

const { Schema } = mongoose;

const UserSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, "Please provide a name"],
			trim: true,
		},
		email: {
			type: String,
			required: [true, "Please provide an email"],
			trim: true,
			unique: true,
		},
	},
	{ timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);

UserSchema.virtual("posts", {
	ref: "Post",
	localField: "_id",
	foreignField: "author",
	justOne: false,
});

// UserSchema.pre("deleteMany", async function (next) {
// 	// await this.model("Post").deleteMany({ author: this._id });
// 	// next();
// });

const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);

export default UserModel;
