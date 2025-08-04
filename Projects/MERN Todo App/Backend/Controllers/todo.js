const Todo = require('../Model/todo');

const CreateTodo = async (req, res) => {
  try {
    console.log("Received body:", req.body);

    const todo = new Todo(req.body);
    const result = await todo.save();

    res.send({
      status: "success",
      message: "Todo created successfully",
      _id:result._id,
    });
  } catch (error) {
    console.error("Error creating todo:", error);
    res.status(500).send({
      status: "error",
      message: "Todo creation failed",
      error: error.message,
    });
  }
};

const getTodo = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.send({
      status: "success",
      message: "Todos retrieved successfully",
      data: todos,
    });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "Todo get failed",
      error: error.message,
    });
  }
};

const updateTodo = async (req, res) => {
  try {
    const { _id, userName, mobile } = req.body;

    const todo = await Todo.findById(_id);
    if (!todo) {
      return res.status(404).send({ status: "error", message: "Todo not found" });
    }

    todo.userName = userName;
    todo.mobile = mobile;
    await todo.save();

    res.send({ status: "success", message: "Todo updated successfully" });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "Todo update failed",
      error: error.message,
    });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const { _id } = req.body;

    const todo = await Todo.findById(_id);
    if (!todo) {
      return res.status(404).send({ status: "error", message: "Todo not found" });
    }

    await todo.deleteOne();

    res.send({ status: "success", message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).send({
      status: "error",
      message: "Todo delete failed",
      error: error.message,
    });
  }
};

module.exports = { CreateTodo, getTodo, updateTodo, deleteTodo };