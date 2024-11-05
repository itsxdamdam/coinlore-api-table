export const Coin = ({ name, symbol, price, totalSupply, index }) => (
  <tbody className="w-full font-medium">
    <tr
      className={
        index % 2
          ? "py-3 w-full flex flex-wrap pl-2  sm:table-row"
          : "bg-neutral-300 py-5 w-full flex flex-wrap pl-2 sm:table-row"
      }
    >
      <td className="py-1 sm:p-3 w-6/12 sm:w-fit">
        <span className="block font-bold sm:hidden">💰Coin</span>
        {name}
      </td>
      <td className="py-1 sm:p-3 w-6/12 sm:w-fit">
        <span className="block font-bold sm:hidden">📄Code</span>
        {symbol}
      </td>
      <td className="py-1 sm:p-3 w-6/12 sm:w-fit">
        <span className="block font-bold sm:hidden">🤑 Price</span>${price}
      </td>
      <td className="py-1 sm:p-3 w-6/12 sm:w-fit">
        <span className="block font-bold sm:hidden">📉 Total Supply</span>
        {totalSupply} {symbol}
      </td>
    </tr>
  </tbody>
);
