const { Todo } = require("../models/index");
/* Todos 전체 목록 불러오기 */
res.s;
exports.readAll = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (err) {
    res.status(500).json({ error: "todo 호출실패패" });
  }
};
/* Todo 한 개 불러오기 */
exports.readOne = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: "todo없음" });
    }
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: "todo실패" });
  }
};

exports.create = async (req, res) => {
  try {
    const { title, done } = req.body;
    const newTodo = await Todo.create({ title, done });
    res.status(201).json(newTodo);
  } catch (err) {
    res.status(500).json({ error: "못만듬듬" });
  }
};

exports.update = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: "발견못함" });
    }
    const { title, done } = req.body;
    await todo.update({ title, done });
    res.json(todo);
  } catch (err) {
    res.status(500).json({ error: "업뎃실패" });
  }
};

exports.delete = async (req, res) => {
  try {
    const todo = await Todo.findByPk(req.params.id);
    if (!todo) {
      return res.status(404).json({ error: "발견안됨" });
    }
    await todo.destroy();
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: "삭제실패" });
  }
};
