import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { sendStocks } from "./redux/actions/Stockaction";
import "./TableData.css";

function Home() {
  const [search, setSearch] = useState("");
  const [stock, setStock] = useState({
    companyName: "",
    stockSymbol: "",
    currentPrice: "",
    marketCap: "",
  });
  const data = useSelector((state) => state.stocks);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    const data = e.target.value;
    setSearch(data);
  };

  const handleData = () => {
    if (stock.companyName.length > 6 && stock.stockSymbol) {
      dispatch(sendStocks(stock));
    }
  };

  // useEffect(() => {
  //   dispatch(fetchStocks());
  // }, [data.length]);

  return (
    <div>
      <div>
        <input
          className="search"
          type="text"
          onChange={handleSearch}
          placeholder="Search With Company Name"
        />
      </div>
      <div>
        <table className="table">
          <tbody>
            <tr>
              <th className="th">Company Name</th>
              <th className="th">Stock Symbol</th>
              <th className="th">Market Cap</th>
              <th className="th">Current Price</th>
            </tr>
            {data.map((item, _id) => {
              if (
                item.companyName.toLowerCase() === search.toLocaleLowerCase()
              ) {
                return (
                  <tr key={item._id} className="tr">
                    <td className="td">{item.companyName}</td>
                    <td className="td">{item.stockSymbol}</td>
                    <td className="td">{item.marketCap}</td>
                    <td className="td">{item.currentPrice}</td>
                    <td className="tdStyle">
                      <button className="tdButton">
                        <Link className="linkStyle" to={`/view/${item._id}`}>
                          view
                        </Link>
                      </button>
                    </td>
                  </tr>
                );
              }
            })}
          </tbody>
        </table>
      </div>
      <div className="divStyle">
        <table>
          <tbody>
            <tr>
              <th className="th">Company Name</th>
              <th className="th">Stock Symbol</th>
              <th className="th">Market Cap</th>
              <th className="th">Current Price</th>
            </tr>
            <tr>
              <td>
                <input
                  className="inputStyle"
                  type="text"
                  name="companyName"
                  onChange={(e) =>
                    setStock({ ...stock, companyName: e.target.value })
                  }
                ></input>
              </td>
              <td>
                <input
                  className="inputStyle"
                  type="text"
                  name="stockSymbol"
                  onChange={(e) =>
                    setStock({ ...stock, stockSymbol: e.target.value })
                  }
                ></input>
              </td>
              <td>
                <input
                  className="inputStyle"
                  type="text"
                  name="marketCap"
                  onChange={(e) =>
                    setStock({ ...stock, marketCap: e.target.value })
                  }
                ></input>
              </td>
              <td>
                <input
                  className="inputStyle"
                  type="text"
                  name="currentPrice"
                  onChange={(e) =>
                    setStock({ ...stock, currentPrice: e.target.value })
                  }
                ></input>
              </td>
              <td>
                <button className="saveButton" onClick={handleData}>
                  Save
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
