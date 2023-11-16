export default function Item({ item, onDeleteItem, onPackedItem }) {
  return (
    <li>
      <input type="checkbox" onClick={() => onPackedItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}个{item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
