import React, { useState } from "react";

// Every visible string lives here so it can be matched to the design images in one place.
const TEXT = {
  title: "Add Items to List",
  placeholder: "Enter an item",
  button: "Add",
  remove: "Remove",
};

export default function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    const value = item.trim();
    if (!value) return;
    setItems((list) => [...list, { id: Date.now() + Math.random(), value }]);
    setItem("");
  };

  const remove = (id) => setItems((list) => list.filter((i) => i.id !== id));

  return (
    <main className="app">
      <h1>{TEXT.title}</h1>

      <form className="form" onSubmit={submit}>
        <input
          name="item"
          type="text"
          autoComplete="off"
          placeholder={TEXT.placeholder}
          aria-label={TEXT.placeholder}
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button type="submit" className="btn">{TEXT.button}</button>
      </form>

      <ul className="list">
        {items.map((i) => (
          <li key={i.id}>
            <span>{i.value}</span>
            <button type="button" className="btn remove" onClick={() => remove(i.id)}>
              {TEXT.remove}
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}