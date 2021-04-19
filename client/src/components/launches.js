import React from 'react';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_year
    }
  }
`;

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  if (loading) return <h4>Loading...</h4>;
  if (error) return <h4>Error... {error}</h4>;

  return (
    <div>
      <h1 className="display-4 my-3">Launches</h1>
      {data.launches.map((launch) => {
        return <h6 key={launch.mission_name}>{launch.mission_name}</h6>;
      })}
    </div>
  );
};

export default Launches;
