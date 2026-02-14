import { userValidation } from "../validation/user.validation.js";

export const validateUser = (req, res, next) => {
  const validation =userValidation.validate(req.body,{
  abortEarly: false,
  stripUnknown: true,
  } )
if (validation.error) {
  const errorMessage = validation.error.details.map(err => err.message);
  return res.status(422).json({ errors: errorMessage });
}

next();




}