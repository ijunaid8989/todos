$(document).ready(function() {
  var todoItem = new TodoItem({ desciption: "TodoItem 1" });

  var todoItemView = new TodoItemView({ model: todoItem });

  $("body").append(todoItemView.render().$el);
});