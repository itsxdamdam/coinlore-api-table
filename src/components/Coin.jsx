export const Coin = ({ name, symbol, price, totalSupply, index }) => (
  <tbody>
    <tr className={index % 2 ? "py-3" : "bg-neutral-300 py-5"}>
      <td className="p-3">{name}</td>
      <td className="p-3">{symbol}</td>
      <td className="p-3">${price}</td>
      <td className="p-3">{totalSupply} {symbol}</td>
    </tr>
  </tbody>
);
