const mailOptions = {
  from: "your-school-email@gmail.com",
  to: "your-school-email@gmail.com",
  subject: `New Admission Application - ${req.body.fullName}`,
  text: `
    New Admission Application Received:

    Full Name: ${req.body.fullName}
    Father's Name: ${req.body.fatherName}
    Mother's Name: ${req.body.motherName}
    DOB: ${req.body.dob}
    Gender: ${req.body.gender}
    Email: ${req.body.email}
    Phone: ${req.body.phone}
    Address: ${req.body.address}
    Class Applied For: ${req.body.classApplied}
    Previous School: ${req.body.prevSchool}
  `,
  attachments: req.file ? [{ filename: req.file.originalname, content: req.file.buffer }] : [],
};
