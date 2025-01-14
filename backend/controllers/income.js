const IncomeSchema = require("../models/IncomeModel");

exports.addIncome = async (req, res) => {
    const {title, amount, category, description, date} = req.body

    const income = IncomeSchema({
        title,
        amount,
        category,
        description,
        date
    })

    try {
        //validations
        if(!title || !description || !category || !date) {
            return res.status(400).json({message: 'Missing required fields'});
        }
        if(amount <= 0 || !amount === 'number') {
            return res.status(400).json({message: 'Amount must be a positive number'});
        }
        await income.save()
        res.status(200).json({message: 'Income added successfully'})
    } catch (error){
        res.status(500).json({message: 'Server Error'})
    }

    console.log(income)
}