import { useEffect, useState } from 'react';

const gql = String.raw;

const deets = gql`
  name
  _id
  image {
    asset {
      url
      metadata {
        lqip
      }
    }
  }
`;

function useLatestData() {
  // hotslices
  const [hotSlices, setHotSlices] = useState();
  // slicemasters
  const [slicemasters, setSlicemasters] = useState();

  // Use a side effect to fetch the data from the sanity graphql endpoint
  useEffect(() => {
    // When the component loads, fetch the data
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
          query {
            StoreSettings(id: "downtown") {
              name
              slicemaster {
                # We defined a deets variable to hold the duplicated query properties used in both slicemaster and hotSlices
                ${deets} 
              }
              hotSlices {
                ${deets}
              }
            }
          }
        `,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        // TODO: Check for errors

        // Set the data to state
        setHotSlices(response.data.StoreSettings.hotSlices);
        setSlicemasters(response.data.StoreSettings.slicemaster);
        // console.log(response.data.StoreSettings);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return {
    hotSlices,
    slicemasters,
  };
}

export default useLatestData;
