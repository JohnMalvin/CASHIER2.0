import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";

export async function POST(req: Request) {
	try {
		await connectDB();

		const body = await req.json();

		console.log(body);

		const user = await User.create(body);

		return NextResponse.json(
			{
				success: true,
				user,
			},
			{ status: 201 },
		);
	} catch (error) {
		console.error(error);

		return NextResponse.json(
			{
				success: false,
				error: String(error),
			},
			{ status: 500 },
		);
	}
}
