export default function TabButton(props) {
  return (
    <li>
      {/* <button onClick={props.pfnOnClick}>{props.children}</button> */}
      <button onClick={props.p_fnOnClick}>{props.children}</button>
    </li>
  );
}
