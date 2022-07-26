import React from 'react';
import PropTypes from 'prop-types';
import { UserRow } from '../userRow/UserRow';
import { InfoTabs } from '../InfoTabs/InfoTabs';
import './ListPage.scss';

export const ListPage = ({ users, setUserId }) => (
  <div className="table">
    <h4 className="table__title">All users</h4>
    <table className="table__body">
      <tr className="table__tr-name">
        <th className="table__tr-name">User details</th>
        <th className="table__tr-company">Company name</th>
        <th className="table__tr-email">Email</th>
        <th className="table__tr-dist">Distance</th>
      </tr>
      {users.map(user => (
        <UserRow
          key={user.id}
          user={user}
          setUserId={setUserId}
        />
      ))}
    </table>
    <InfoTabs />
  </div>
);

ListPage.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  setUserId: PropTypes.func.isRequired,
};
