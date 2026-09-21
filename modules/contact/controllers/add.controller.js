const Joi = require('joi');
const addContact = require('../services/add.service');

module.exports = async (req, res) => {
  try {
    {
      // validation
      const expectedBody = Joi.object()
        .required()
        .keys({
          userId: Joi.string().required(),
          name: Joi.string().required(),
          email: Joi.string().required(),
          phones: Joi.array().items(Joi.string().required())
        });

      const validation = Joi.validate(req.body, expectedBody);
      if (validation.error)
        return res
          .status(500)
          .json({ success: false, message: validation.error, data: null });
    }
    try {
      await addContact(req.body);

      return res.status(201).json({
        success: true,
        message: 'Contact added successfully',
        data: null
      });
    } catch (err) {
      return res.status(400).json({
        success: false,
        message: err.message,
        data: null
      });
    }
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ success: false, message: 'something went wrong', data: null });
  }
};
