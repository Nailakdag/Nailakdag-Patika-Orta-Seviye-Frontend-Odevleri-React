import { useSelector } from "react-redux";
import AnimatedNumbers from "react-animated-numbers";

const Money = () => {
  const list = useSelector((state) => state.item.itemLists);
  const money = useSelector((state) => state.item.initialMoney);
  const spendingMoney = list.reduce((acc, cur) => {
    acc += cur.money * cur.amount;
    return acc;
  }, 0);

  return (
    <div className="money">
      $
      <AnimatedNumbers
        includeComma
        animateToNumber={money - spendingMoney}
        fontStyle={{ fontSize: 30 }}
        configs={[
          { mass: 1, tension: 220, friction: 100 },
          { mass: 1, tension: 180, friction: 130 },
          { mass: 1, tension: 280, friction: 90 },
          { mass: 1, tension: 180, friction: 135 },
          { mass: 1, tension: 260, friction: 100 },
          { mass: 1, tension: 210, friction: 180 },
        ]}
      ></AnimatedNumbers>
    </div>
  );
};

export default Money;
