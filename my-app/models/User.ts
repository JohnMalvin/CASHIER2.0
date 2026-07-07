import mongoose, { Schema, InferSchemaType } from "mongoose";

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true,
	},
);

export type User = InferSchemaType<typeof userSchema>;

export default mongoose.models.User || mongoose.model("User", userSchema);
