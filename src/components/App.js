import { useState } from "react";
import Logo from "./Logo";
import From from "./From";
import PackingList from "./PackingList";
import Stats from "./Stats";
// const initialItems = [
//   { id: 1, description: "Passports", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];
export default function App() {
  const [items, setItems] = useState([]);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handlePackedItem(id) {
    setItems((items) =>
      items.map((item) => {
        return item.id === id ? { ...item, packed: !item.packed } : item;
      })
    );
  }
  function handleClearItem() {
    const confirmed = window.confirm("兄弟你真的要全部clear了吗😱");
    if (confirmed) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <From items={items} onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onPackedItem={handlePackedItem}
        onClearItem={handleClearItem}
      />
      <Stats items={items} />
    </div>
  );
}
