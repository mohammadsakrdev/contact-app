const Joi = require('joi');
const updateContact = require('../services/update.service');

module.exports = async (req, res) => {
  try {
    {
      // validation
      const expectedBody = Joi.object()
        .required()
        .keys({
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
    await updateContact(req.params.id, req.body);
    return res.status(200).json({
      success: true,
      message: 'Contact updated successfully',
      data: null
    });
  } catch (err) {
    console.error(err);
    return res
      .status(400)
      .json({ success: false, message: 'something went wrong', data: null });
  }
};
