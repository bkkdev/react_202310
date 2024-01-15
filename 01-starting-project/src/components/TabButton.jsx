export default function TabButton({ children, p_fnOnClick, isSelected }) {
  return (
    <li>
      <button
        className={isSelected ? "active" : undefined}
        onClick={p_fnOnClick}
      >
        {children}
      </button>
    </li>
  );
}
