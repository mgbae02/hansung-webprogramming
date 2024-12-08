const cart = [
    { item: '노트북', price: 1200000, quantity: 1 },
    { item: '마우스', price: 35000, quantity: 2 },
    { item: '키보드', price: 89000, quantity: 1 },
  ];
  
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price * cart[i].quantity;
  }
  console.log('총 금액 = ' + totalPrice);
  
  //total Price : 1359000
  
  totalPrice = 0;
  cart.forEach((good) => (totalPrice += good.price * good.quantity));
  console.log('총 금액 = ' + totalPrice);
  //total Price : 1359000
  
  totalPrice = 0;
  totalPrice = cart.reduce((a, good) => a + good.price * good.quantity, 0);
  console.log('총 금액 = ' + totalPrice);
  //total Price : 1359000
  
  /*
  const itemTotals = card.map(good => {
      item : good.item,
      total : good.price * good.quantity;
  });*/
  
  /*
  제품별 금액: [
   { item: ' ', total: 1200000 }, 노트북
   { item: ' ', total: 70000 }, 마우스
   { item: ' ', total: 89000 } 키보드
  ]
  
  
  */
  const names = ['alice', 'bob', 'charlie'];
  
  const uppercasedNames = names.map(n=> n.toUpperCase());
  console.log(`upperCasedNames = ${uppercasedNames}`);

  const capitalStartnames = names.map(n=>n[0].toUpperCase()+n.slice(1));
  console.log(`upperCasedNames = ${capitalStartnames}`);
  
  