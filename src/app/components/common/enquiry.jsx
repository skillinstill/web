"use client";
import { useState } from "react";
import { HiLightningBolt } from "react-icons/hi";
import countries from "../../../assets/countries.json";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contactNumber: "",
        country: "",
        enquiryType: "Training as a Service",
        message: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        // console.log(formData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus(null);

        try {
            const response = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const result = await response.json();

            setSubmitStatus("Message sent successfully!");
            setFormData({
                name: "",
                email: "",
                contactNumber: "",
                country: "",
                enquiryType: "Training as a Service",
                message: "",
            });
        } catch (error) {
            console.error(
                "There was a problem with the fetch operation:",
                error
            );
            setSubmitStatus("Failed to send message. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-back flex flex-col items-center max-w-2xl mx-auto gap-4 rounded-[1.5rem] mt-16 w-full p-6 md:p-8"
        >
            <div className="grid grid-cols-2 gap-6 w-full">
                <input
                    className="p-4 rounded-xl outline-none focus:drop-shadow-md anim h-fit w-full border"
                    placeholder="Name"
                    required
                    name="name"
                    autoComplete="on"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input
                    className="p-4 rounded-xl outline-none focus:drop-shadow-md anim h-fit w-full border"
                    placeholder="Email"
                    required
                    name="email"
                    autoComplete="on"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div className="grid grid-cols-2 gap-6 w-full">
                <select
                    name="country"
                    required
                    autoComplete="on"
                    placeholder="Country"
                    value={formData.country}
                    onChange={handleChange}
                    className="p-4 rounded-xl outline-none focus:drop-shadow-md anim h-fit w-full border"
                >
                    <option key={"in"} value={"India"}>
                        India
                    </option>
                    {countries.map((country) => (
                        <option key={country.code} value={country.name}>
                            {country.name}
                        </option>
                    ))}
                </select>
                <input
                    className="p-4 rounded-xl outline-none focus:drop-shadow-md anim h-fit w-full border"
                    placeholder="Contact Number"
                    required
                    name="contactNumber"
                    autoComplete="on"
                    type="mobile"
                    value={formData.contactNumber}
                    onChange={handleChange}
                />
            </div>

            <select
                name="enquiryType"
                required
                value={formData.enquiryType}
                onChange={handleChange}
                className="p-4 rounded-xl outline-none focus:drop-shadow-md anim h-fit w-full border"
            >
                <option>Training as a Service</option>
                <option>Hiring as a Service</option>
                <option>Consulting as a Service</option>
                <option>Software Development</option>
                <option>Training Venue</option>
                <option>Other</option>
            </select>
            <textarea
                className="p-4 rounded-xl outline-none focus:drop-shadow-md min-h-[5rem] w-full border"
                placeholder="Message"
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
            />
            <button
                type="submit"
                className="text-white h-fit shrink-0 bg-black px-6 p-4 rounded-xl"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Sending..." : "Send Message"}
                <HiLightningBolt className="inline ml-2" color="#7CC318" />
            </button>
            {submitStatus && (
                <p
                    className={
                        submitStatus.includes("success")
                            ? "text-green-500"
                            : "text-red-500"
                    }
                >
                    {submitStatus}
                </p>
            )}
        </form>
    );
}
