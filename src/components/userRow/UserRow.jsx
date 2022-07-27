import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './UserRow.scss';
// import '../../../public/users/1.png';

export const UserRow = ({ user, setUserId }) => (
  <tr className="row">
    <td className="row">
      <Link
        className="row__link"
        to={`/list/${user.id}`}
        onClick={() => setUserId(user.id)}
      >
        <img
          className="row__img"
          src={`/users/${user.id}.png`}
          alt="avatar"
        />
        {user.name}
      </Link>
    </td>
    <td className="row">
      <Link
        className="row__link"
        to={`/list/${user.id}`}
        onClick={() => setUserId(user.id)}
      >
        {user.company.name}
      </Link>
    </td>
    <td className="row">
      <Link
        className="row__link"
        to={`/list/${user.id}`}
        onClick={() => setUserId(user.id)}
      >
        {user.email}
      </Link>
    </td>
    <td className="row">
      <Link
        className="row__link"
        to={`/list/${user.id}`}
        onClick={() => setUserId(user.id)}
      >
        {user.username}
      </Link>
    </td>
  </tr>
);

UserRow.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    company: PropTypes.string,
    email: PropTypes.string,
    username: PropTypes.string,
  }).isRequired,
  setUserId: PropTypes.func.isRequired,
};
