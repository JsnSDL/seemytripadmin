const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.SECRET;

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'Gmail', // or another email service
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

/**
 * Generate a random OTP
 * @returns {string} OTP
 */
const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString(); // Generates a 6-digit OTP
};

/**
 * Send OTP via Email
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const sendOTP = async (req, res, next) => {
    const { email } = req.body;

    try {
        const otp = generateOTP();
        req.session.otp = otp; // Store in session
        
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: 'Your OTP Code',
            text: `Your OTP code is: ${otp}`,
        };

        await transporter.sendMail(mailOptions);
        res.status(200).send('OTP sent successfully to your email.');
    } catch (error) {
        console.error(error); // Log error for debugging
        res.status(500).send('Something went wrong while sending OTP.');
    }
};

/**
 * Verify OTP
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
const verifyOTP = async (req, res, next) => {
    const { otp } = req.body;
    console.log(req.body)

    try {
        if (otp === req.session.otp) {
            const token = jwt.sign({ email: req.body.email }, JWT_SECRET, { expiresIn: '1h' });
            console.log(token);
            
            return res.status(200).json({
                message: 'OTP verified successfully',
                authToken: token,
            });
        } else {
            return res.status(400).json({ message: 'Invalid OTP' });
        }
    } catch (error) {
        console.error(error); // Log error for debugging
        res.status(500).send('Something went wrong during OTP verification.');
    }
};

module.exports = { sendOTP, verifyOTP };
