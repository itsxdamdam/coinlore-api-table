import React, { useEffect, useState } from "react";
import axios from "axios";
import { Coin } from "./Coin";
import Pagination from "./Pagination";

// const getScreenWidth = () => {
//   const { innerWidth: width, innerHeight: height } = window;

//   return width, height;
// };

const Table = () => {
  const [loading, setLoading] = useState(true);
  const [coinList, setCoinList] = useState([]);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const itemsPerPage = 10;

  useEffect(() => {
    setLoading(true);
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    axios
      .get("https://api.coinlore.net/api/tickers/")
      .then(({ data }) => {
        setLoading(false);
        setCoinList(data.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err.message || err);
      });

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (error) {
    return (
      <div className="m-auto text-center w-1/4 font-bold">
        Oops! error while getting data!
      </div>
    );
  }

  const lastCoin = currentPage * itemsPerPage;
  const firstCoin = lastCoin - itemsPerPage;
  const currentCoins = coinList.slice(firstCoin, lastCoin);

  return (
    <div className="lg:w-6/12 sm:w-full mx-auto mt-5">
      <table className="text-left w-full h-full">
        <thead>
          <tr className={screenWidth < 640 ? "hidden" : " "}>
            <th className="p-3">💰 Coin</th>
            <th className="p-3">📄 Code</th>
            <th className="p-3">🤑 Price</th>
            <th className="p-3">📉 Total Supply</th>
          </tr>
        </thead>
        {currentCoins.map((coin, index) => (
          // {index === 0 || index % 2 }
          <Coin
            key={coin.id}
            name={coin.name}
            symbol={coin.symbol}
            price={coin.price_usd}
            totalSupply={coin.tsupply}
            index={index}
          />
        ))}
      </table>

      <Pagination
        setCurrentPage={setCurrentPage}
        coinList={coinList}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

export default Table;
