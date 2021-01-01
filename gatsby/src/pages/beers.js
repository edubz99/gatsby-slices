import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';

const BeerGridStyles = styled.div`
  display: grid;
  gap: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const SingleBeerSyles = styled.div`
  border: 1px solid var(--grey);
  padding: 2rem;
  text-align: center;

  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    display: grid;
    align-items: center;
    font-size: 10px;
  }
`;
function BeersPage({ data: { beers } }) {
  // console.log(beers.nodes);
  return (
    <>
      <SEO title={`Beers! We have ${beers.nodes.length} in stock`} />
      <h2 className="center">
        We have {beers.nodes.length} Beers Available. Dine in Only!
      </h2>
      <BeerGridStyles>
        {beers.nodes.map((beer) => {
          const rating = Math.round(beer.rating.average);
          return (
            <SingleBeerSyles key={beer.id}>
              <img src={beer.image} alt={beer.name} />
              <h3>{beer.name}</h3>
              <p>{beer.price}</p>
              <p title={`${rating} out of 5 stars`}>
                {`🌟`.repeat(rating)}
                <span style={{ filter: `grayscale(100%)` }}>
                  {`🌟`.repeat(5 - rating)}
                </span>
                <span> - ({beer.rating.reviews})</span>
              </p>
            </SingleBeerSyles>
          );
        })}
      </BeerGridStyles>
    </>
  );
}

// Get a list of all the beers
export const query = graphql`
  query {
    beers: allBeer {
      nodes {
        id
        image
        name
        price
        rating {
          reviews
          average
        }
      }
    }
  }
`;

export default BeersPage;
