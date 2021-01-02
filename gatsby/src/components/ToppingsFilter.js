import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const ToppingsStyles = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;
  a {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 0 1rem;
    align-items: center;
    padding: 5px;
    background: var(--grey);
    border-radius: 2px;
    .count {
      background: white;
      padding: 2px 5px;
    }
    &[aria-current='page'] {
      background: var(--yellow);
    }
  }
`;

// Return number of pizzas within a certain topping
function countPizzasInToppings(pizzas) {
  // flat() will take an array of arrays and turn them into one big array
  const counts = pizzas
    .map((pizza) => pizza.toppings)
    .flat()
    .reduce((accumulator, topping) => {
      // check if this is an existing topping
      const existingTopping = accumulator[topping.id];
      //   If there is an existing topping incrememnt it by 1
      if (existingTopping) {
        existingTopping.count += 1;
      } else {
        // otherwise create a new entry in our accumulator and set it to one
        accumulator[topping.id] = {
          id: topping.id,
          name: topping.name,
          count: 1,
        };
      }
      return accumulator;
    }, {});
  // Sort them based on their count
  const sortedToppings = Object.values(counts).sort(
    (a, b) => b.count - a.count
  );
  return sortedToppings;
}

function ToppingsFilter() {
  // Get a list of all the toppings
  // Get a list of all the Pizzas with their toppings
  const { pizzas } = useStaticQuery(graphql`
    query {
      pizzas: allSanityPizza {
        nodes {
          toppings {
            name
            id
          }
        }
      }
    }
  `);
  // Count how many pizzas are in each topping
  const toppingsWithCounts = countPizzasInToppings(pizzas.nodes);
  // console.log(toppingsWithCounts);
  // Loop over the list of toppings and display the topping and the count of pizzas in that topping

  // Link it up ....

  return (
    <ToppingsStyles>
      <Link to="/pizzas">
        <span className="name">All</span>
        <span className="count">{pizzas.nodes.length}</span>
      </Link>
      <p />
      {toppingsWithCounts.map((topping) => (
        <Link to={`topping/${topping.name}`} key={topping.id}>
          <span className="name">{topping.name}</span>
          <span className="count">{topping.count}</span>
        </Link>
      ))}
    </ToppingsStyles>
  );
}

export default ToppingsFilter;
