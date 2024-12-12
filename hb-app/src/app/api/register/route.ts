import dbConnect from "@/lib/db";
import { ServiceProvider } from "@/models/user-models/ServiceProvider";
import Account from "@/models/user-models/Account";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

export async function POST(request: NextRequest) {
  try {
    await dbConnect();
    const reqBody = await request.json();
    const { username, password, email, telephoneNumber, country } = reqBody;

    //Existing user check
    const account = await Account.findOne({ email });

    if (account) {
      return NextResponse.json(
        { error: "Account with provided email already exists" },
        { status: 400 }
      );
    }

    //Hashing password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    //Creating new account
    const newServiceProvider = new ServiceProvider({
      username,
      email,
      password: hashedPassword,
      telephoneNumber,
      country,
    });

    const savedServiceProvider = await newServiceProvider.save();
    // console.log(savedServiceProvider)
    return NextResponse.json(
      { message: "Service Provider created succesfully" },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
    {
      status: 500;
    }
  }
}

export async function GET(request: NextRequest, providerName: string) {
  redirect(`/sp-profile/${providerName}`);
}
