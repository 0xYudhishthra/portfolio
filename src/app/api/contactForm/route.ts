import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  //format a custom message format that says:-
  const constructMessage = (
    name: string,
    contactInfo: string,
    message: string
  ) => {
    return `New Message Received from Name: ${name} with Contact Info: ${contactInfo} and Message: ${message}`;
  };

  const requestBody = await request.json();
  const res = await fetch(
    `https://chatapi.blockscan.com/v1/api?&method=sendchat&to=${
      requestBody.targetAddress
    }&msg=${constructMessage(
      requestBody.name,
      requestBody.contactInfo,
      requestBody.message
    )}&apikey=${process.env.BLOCKSCAN_API_KEY}`
  );

  if (res.status === 200) {
    const { status, message, result } = await res.json();
    if (status === "1" && message === "OK") {
      return NextResponse.json({ message: result }, { status: 200 });
    }
  } else {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
}
