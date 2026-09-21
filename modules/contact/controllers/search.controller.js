const searchContact = require('../services/search.service');

module.exports = async (req, res) => {
  try {
    const result = await searchContact(req.query);
    return res.status(200).json({
      success: true,
      message:
        result.length > 0 ? 'Contacts found successfully' : 'No contacts found',
      data: result
    });
  } catch (err) {
    console.error(err);
    return res
      .status(400)
      .json({ success: false, message: 'something went wrong', data: null });
  }
};
