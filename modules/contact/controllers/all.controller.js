const Joi = require('joi');
const allContact = require('../services/all.service');

module.exports = async (req, res) => {
  try {
    const result = await allContact();
    return res.status(200).json({
      success: true,
      message: 'Contacts found successfully',
      data: result
    });
  } catch (err) {
    console.error(err);
    return res
      .status(400)
      .json({ success: false, message: 'something went wrong', data: null });
  }
};
