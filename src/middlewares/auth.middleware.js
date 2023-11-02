import jwt from 'jsonwebtoken'

const generator = (role) => {
    return async function (req, res, next) {
        const token = req.cookies.token;
        if (!token) {
            res.status(401).send("Please login to access the page.");
        } else {
            try {
                const payload = jwt.verify(token, process.env.JWT_SECRET_KEY)
                // Changes here
                const id = payload.id;
                req.id = id;
                req.role = role; //Doctor, Patient
                next();
            } catch (err) {
                console.log(err);
                res.status(500).send("Error while verifying token.");
            }
        }
    }
}
const patientAuthMiddleware = generator("Patient");
const doctorAuthMiddleware = generator("Doctor");

export { patientAuthMiddleware, doctorAuthMiddleware };