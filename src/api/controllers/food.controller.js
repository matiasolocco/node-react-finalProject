const Food = require("../models/food.model");

const addFood = async (req, res) => {
  try {
    const newFood = new Food(req.body);
    const findFood = await Food.find({ name: req.body.name });
    if (findFood.length !== 0) {
      return res.json({ message: "Esta comida ya se ha creado" });
    }
    const createdFood = await newFood.save();
    return res.json(createdFood);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const selectFood = async (req, res) => {
  try {
    const foods = await Food.find();
    return res.status(200).json(foods);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const selectOneFood = async (req, res) => {
  try {
    const { id } = req.params;
    const findFood = await Food.findById(id);
    return res.status(200).json(findFood);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const updateFood = async (req, res) => {
  try {
    const { id } = req.params;
    const foodBody = req.body;
    const updatedFood = await Food.findByIdAndUpdate(id, foodBody, { new: true });
    if (!updatedFood) {
      return res.status(404).json({ message: "Esta comida no existe" });
    }
    return res.status(200).json(updatedFood);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const deleteFood = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(`Deleting food with ID: ${id}`); 
    const deletedFood = await Food.findByIdAndDelete(id);
    if (!deletedFood) {
      return res.status(404).json({ message: "Esta comida no existe" });
    }
    return res.status(200).json({ message: "Food deleted successfully", food: deletedFood });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Error deleting food', error });
  }
};

module.exports = { addFood, selectFood, selectOneFood, updateFood, deleteFood };
