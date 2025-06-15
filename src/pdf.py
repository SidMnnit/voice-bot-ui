import base64

# Read the base64 encoded file
with open("resume.b64", "r") as f:
    base64_data = f.read()

# Decode the Base64 data
pdf_data = base64.b64decode(base64_data)

# Write the decoded data to a PDF file
with open("Senior_Accountant_Resume.pdf", "wb") as pdf_file:
    pdf_file.write(pdf_data)

print("PDF saved as 'Senior_Accountant_Resume.pdf'")