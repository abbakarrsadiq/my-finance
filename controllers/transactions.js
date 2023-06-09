const Transaction = require("../models/Transaction")


exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find()

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions,
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'server-error'
        })
    }
};
exports.addTransaction = async (req, res, next) => {
 try {
    const { amount, type, category, description, createdAt } = req.body;
    const transaction = await Transaction.create(req.body)

    return res.status(201).json({
        success: true,
        data: transaction,
    })
 } catch (error) {
    return res.status(501).json({
        success: false,
    })
 }
};
exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if(!transaction) {
      return res.status(404).json({
        success: false,
        error: 'No transaction found'
      });
    }

    await transaction.remove();

    return res.status(200).json({
      success: true,
      data: {}
    });

  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
}