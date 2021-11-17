import { useState } from "react";

const BendingMachine = () => {
  const [money, setMoney] = useState(0);
  const [cart, setCart] = useState(0);
  const zero = 0;

  const coins = [100, 500, 1000, 5000, 10000];

  const eats = [
    { id: 1, name: "물", coin: 100 },
    { id: 2, name: "커피", coin: 500 },
    { id: 3, name: "음료수", coin: 1000 },
    { id: 4, name: "좀 비싼 음료수", coin: 5000 },
    { id: 5, name: "많이 비싼 음료수", coin: 10000 },
  ];

  const moneyUp = (coin) => {
    setMoney(money + coin);
  };

  const moneyReset = () => {
    setMoney(zero);
  };

  const myCart = (eat) => {
    setCart(cart + eat);
  };
  const cartReset = () => {
    setCart(zero);
  };
  const order = () => {
    setCart(zero);
    setMoney(money - cart);
  };
  return (
    <>
      <ul>
        {coins.map((coin) => (
          <li key={coin} onClick={() => moneyUp(coin)}>
            {coin} 원
          </li>
        ))}
      </ul>
      <ul>
        {eats.map(({ id, name, coin }) => (
          <li key={id} onClick={() => myCart(coin)}>
            {name} : {coin}원
          </li>
        ))}
      </ul>

      <p>현재 가격 : {cart}원</p>
      <p>내 지갑 : {money}원</p>
      <button onClick={moneyReset}>지갑 비우기</button>
      <button onClick={cartReset}>카트 비우기</button>
      <button onClick={order}>계산하기</button>
    </>
  );
};

export default BendingMachine;
