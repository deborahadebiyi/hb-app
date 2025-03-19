"use client";
import { useState } from "react";
// import { CheckIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Trash, Edit, CheckCircle, Save } from "lucide-react";
import { standardBtn } from "@/components/button-variants/button";

export default function TodoApp() {
  const [todos, setTodos] = useState<{ text: string; completed: boolean }[]>(
    []
  );
  const [input, setInput] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editText, setEditText] = useState("");

  // Add a new task
  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([...todos, { text: input, completed: false }]);
      setInput(""); // Clear input after adding
    }
  };

  // Toggle task completion
  const toggleComplete = (index: number) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // Delete a task
  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  // Enable editing mode
  const startEditing = (index: number, text: string) => {
    setEditingIndex(index);
    setEditText(text);
  };

  // Save the edited task
  const saveEdit = (index: number) => {
    if (editText.trim() !== "") {
      setTodos(
        todos.map((todo, i) =>
          i === index ? { ...todo, text: editText } : todo
        )
      );
      setEditingIndex(null);
    }
  };

  return (
    <div className="flex flex-col items-left p-6 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">My tasks</h1>

      {/* Input and Add Button */}
      <div className="flex space-x-2 w-full max-w-md">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
          className="flex-grow px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-goldy"
        />
        <button onClick={addTodo} className={standardBtn}>
          Add
        </button>
      </div>

      {/* Todo List */}
      <ul className="mt-4 w-full max-w-md">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white p-3 mt-2 rounded-lg shadow-md border"
          >
            {/* Checkbox and Task */}
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(index)}
                className="w-5 h-5"
              />
              {editingIndex === index ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="border px-2 py-1 rounded-md"
                />
              ) : (
                <span
                  className={`text-lg ${
                    todo.completed ? "line-through text-gray-500" : ""
                  }`}
                >
                  {todo.text}
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="flex space-x-2">
              {editingIndex === index ? (
                <button onClick={() => saveEdit(index)} className="text-black">
                  <Save className="w-5 h-5" />
                </button>
              ) : (
                <button
                  onClick={() => startEditing(index, todo.text)}
                  className="text-black"
                >
                  <Edit className="w-5 h-5" />
                </button>
              )}
              <button onClick={() => removeTodo(index)} className="text-black">
                <Trash className="w-5 h-5" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
