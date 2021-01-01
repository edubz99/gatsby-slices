import calculatePizzaPrice from './calculatePizzaPrice';
import formatMoney from './formatMoney';

function attachNamesAndPrices(order, pizzas) {
  return order.map((item) => {
    const pizza = pizzas.find((singlePizzas) => singlePizzas.id === item.id);
    return {
      // Add addtional properties to the order
      ...item,
      name: pizza.name,
      thumbnail: pizza.image.asset.fluid.src,
      price: formatMoney(calculatePizzaPrice(pizza.price, item.size)),
    };
  });
}

export default attachNamesAndPrices;
