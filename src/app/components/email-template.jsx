import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
} from "@react-email/components";

export const CareersForm = ({
    name,
    country,
    contactNumber,
    email,
    message,
    enquiryType,
}) => (
    <Html>
        <Head />
        <Preview>New form submission from - {name}</Preview>
        <Body style={main}>
            <Container style={container}>
                <Heading style={h1}>New form submission</Heading>
                <Text style={text}>
                    You have received a New form submission with the following
                    details:
                </Text>
                <Section style={detailSection}>
                    <Text style={label}>Name:</Text>
                    <Text style={value}>{name}</Text>

                    <Text style={label}>Country:</Text>
                    <Text style={value}>{country}</Text>

                    <Text style={label}>Enquiry Type:</Text>
                    <Text style={value}>{enquiryType}</Text>

                    <Text style={label}>Contact No:</Text>
                    <Text style={value}>{contactNumber}</Text>

                    <Text style={label}>Email ID:</Text>
                    <Text style={value}>{email}</Text>

                    <Text style={label}>Message:</Text>
                    <Text style={value}>{message}</Text>
                </Section>
                <Text style={text}>
                    Please follow up with this inquiry at your earliest
                    convenience.
                </Text>
            </Container>
        </Body>
    </Html>
);

export default CareersForm;

const main = {
    backgroundColor: "#f6f9fc",
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
};

const container = {
    margin: "0 auto",
    padding: "20px 0 48px",
    width: "580px",
};

const h1 = {
    color: "#333",
    fontSize: "24px",
    fontWeight: "600",
    lineHeight: "32px",
    margin: "0 0 20px",
    textAlign: "center",
};

const text = {
    color: "#555",
    fontSize: "16px",
    lineHeight: "24px",
    margin: "0 0 40px",
};

const detailSection = {
    backgroundColor: "#ffffff",
    border: "1px solid #e6e6e6",
    borderRadius: "4px",
    padding: "24px",
    marginBottom: "24px",
};

const label = {
    color: "#777",
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "4px",
};

const value = {
    color: "#333",
    fontSize: "16px",
    marginBottom: "16px",
};
