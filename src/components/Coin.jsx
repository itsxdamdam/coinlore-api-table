export const Coin = ({ name, symbol, price, totalSupply, index }) => (
  <tbody>
    <tr className={index % 2 ? "py-3 w-full" : "bg-neutral-300 py-5 w-full"}>
      <td className="py-1 sm:p-3 text-wrap">
        <span className="block font-bold sm:hidden">💰Coin</span>
        {name}
      </td>
      <td className="py-1 sm:p-3"><span className="block font-bold sm:hidden">📄Code</span>{symbol}</td>
      <td className="py-1 sm:p-3"><span className="block font-bold sm:hidden">🤑 Price</span>${price}</td>
      <td className="py-1 sm:p-3">
        <span className="block font-bold sm:hidden">📉 Total Supply</span>
        {totalSupply} {symbol}
      </td>
    </tr>
  </tbody>
);
