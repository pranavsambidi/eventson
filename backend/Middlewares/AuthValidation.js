const Joi= require('joi');
const loginValidation = (req, res, next) => {
    const schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    });
    const { error } = schema.validate(req.body);
    
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
}
module.exports = {loginValidation};