const Joi = require('joi');
const deleteContact = require('../services/delete.service');

module.exports = async (req, res) => {
  try {
    await deleteContact(req.params.id);

    return res.status(200).json({
      success: true,
      message: 'Contact deleted successfully',
      data: null
    });
  } catch (err) {
    console.error(err);
    return res
      .status(400)
      .json({ success: false, message: 'something went wrong', data: null });
  }
};
