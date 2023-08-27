/* eslint-disable no-undef*/
const todoList = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();
describe("test suite", () => {
  beforeAll(() => {
    add({
      title: "tedt todo",
      completed: false,
      dueDate: new Date(new Date().setDate(new Date().getDate()))
        .toISOString()
        .split("T")[0],
    });
  });
  test("A test that checks creating a new todo", () => {
    const titem = all.length;

    add({
      title: "test todo",
      completed: false,
      dueDate: new Date(new Date().setDate(new Date().getDate()))
        .toISOString()
        .split("T")[0],
    });
    expect(all.length).toBe(titem + 1);
  });
  test("...checks marking a todo as completed", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("...checks retrieval of overdue items", () => {
    add({
      title: "Submit assignment",
      dueDate: new Date(new Date().setDate(new Date().getDate() - 1))
        .toISOString()
        .split("T")[0],
      completed: false,
    });
    p = overdue();
    expect(p.length).toBe(1);
  });
  test("...checks retrieval of due today items", () => {
    add({
      title: "Submit assignment",
      dueDate: new Date(new Date().setDate(new Date().getDate()))
        .toISOString()
        .split("T")[0],
      completed: false,
    });
    r = dueToday();
    expect(r.length).toBe(3);
  });
  test("...checks retrieval of due later items", () => {
    add({
      title: "Submit assignment",
      dueDate: new Date(new Date().setDate(new Date().getDate() + 1))
        .toISOString()
        .split("T")[0],
      completed: false,
    });
    s = dueLater();
    expect(s.length).toBe(1);
  });
});
