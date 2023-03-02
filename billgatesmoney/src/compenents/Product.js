import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addBasket, increaseAmount, decreaseAmount } from "../redux/ItemSlice";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Product = () => {
  const itemList = useSelector((state) => state.item.itemLists);
  const list = useSelector((state) => state.item.itemLists);
  const money = useSelector((state) => state.item.initialMoney);
  const spendingMoney = list.reduce((acc, cur) => {
    acc += cur.money * cur.amount;
    return acc;
  }, 0);
  const isTrue = money > spendingMoney;

  const dispatch = useDispatch();
  const handleAddBasket = (data) => {
    if (!itemList.find((arr) => arr.title === data.title)) {
      dispatch(addBasket(data));
    } else {
      dispatch(increaseAmount(data));
    }
  };
  const handleSell = (data) => {
    if (itemList.find((arr) => arr.title === data.title && arr.amount >= 1)) {
      dispatch(decreaseAmount(data));
    }
  };

  return (
    <div className="boxes">
      {itemList.map((data, index) => {
        return (
          <div className="box" key={index}>
            <img src={data.img} alt={data.title}></img>
            <h3>{data.title}</h3>
            <p>${numberWithCommas(data.money)}</p>
            <div className="boxfooter">
              <button onClick={() => handleSell(data)}>Sell</button>
              <input
                name={data.title}
                value={data.amount}
                type="text"
                readOnly
              />
              <button disabled={!isTrue} onClick={() => handleAddBasket(data)}>
                Buy
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
