import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_MEDOLOGY || '',
      pass: process.env.PASS_MEDOLOGY || '',
    },
  });


export const generateVerificationCode = (): string => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&?';
    const codeLength = 4;
    let verificationCode = '';
  
    for (let i = 0; i < codeLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      verificationCode += characters.charAt(randomIndex);
    }
  
    return verificationCode;
  };
  

const sendVerificationCodeEmail = async (email: string,verificationCode:string): Promise<void> => {
    // const verificationCode = generateVerificationCode()
  
    const mailOptions = {
      from: process.env.EMAIL_MED || '',
      to: email,
      subject: 'Email Verification Code',
      text: `Your verification code is: ${verificationCode}`,
    };
  
    await transporter.sendMail(mailOptions);
  };
  

export default sendVerificationCodeEmail