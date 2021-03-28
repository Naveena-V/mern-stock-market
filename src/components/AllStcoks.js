import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { startRemoveStock } from "./redux/actions/Stockaction";

function AllStcoks(props) {
  const allstocks = useSelector((state) => state.stocks);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(startRemoveStock(id));
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Stock details</h1>
      <table className="table">
        <tbody>
          <tr>
            <th className="th">Company Name</th>
            <th className="th">Stock Symbol</th>
            <th className="th">Market Cap</th>
            <th className="th">Current Price</th>
          </tr>
          {allstocks.map((item, _id) => {
            return (
              <tr key={item._id} className="tr">
                <td className="td">{item.companyName}</td>
                <td className="td">{item.stockSymbol}</td>
                <td className="td">{item.marketCap}</td>
                <td className="td">{item.currentPrice}</td>
                <td className="deleteTd">
                  <button
                    className="deleteButton"
                    onClick={() => handleRemove(item._id)}
                    key={item._id}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default AllStcoks;
