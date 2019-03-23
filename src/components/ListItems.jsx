import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const ListItems = () => (
  <Query
    query={gql`
      {
        viewer {
          repositories(last: 100) {
            nodes {
              name
            }
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Данные загружаются...</p>;
      if (error) return <p>Ошибка загрузки</p>;

      return data.viewer.repositories.nodes.map(({ name }) => (
          <li key={name} className='main_list__item'>
            <p>{name}</p>
          </li>
      ));
    }}
  </Query>
);

export default ListItems;