import { CareersForm } from "@/app/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request) {
    try {
        // Parse the request body
        const body = await request.json();
        const { name, contactNumber, enquiryType, country, email, message } =
            body;

        const { data, error } = await resend.emails.send({
            from: "admin@skillinstill.com",
            to: ["prasanna.srinivas@skillinstill.com"],
            cc: ["admin@skillinstill.com"],
            subject: "A new enquiry for - '" + enquiryType + "'",
            react: CareersForm({
                name,
                contactNumber,
                enquiryType,
                country,
                email,
                message,
            }),
        });

        if (error) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }

        return NextResponse.json({ message: "Email sent successfully", data });
    } catch (error) {
        return NextResponse.json(
            { error: "Internal server error" + error },
            { status: 500 }
        );
    }
}

// Add support for GET method
export async function GET() {
    return NextResponse.json(
        { message: "POST method is required for sending emails" },
        { status: 405 }
    );
}
