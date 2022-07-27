import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUsers } from './api';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { ListPage } from './components/ListPage/ListPage';
import { UserPage } from './components/UserPage/UserPage';
import './App.scss';

export const App = () => {
  const [userId, setUserId] = useState(0);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState({});

  useEffect(() => {
    const getAll = async() => {
      const all = await getUsers();

      setUsers(all);
    };

    getAll();
  }, []);

  useEffect(() => {
    let user;

    if (userId !== 0) {
      user = users.find(person => person.id === userId);
    }

    setSelectedUser(user);
  }, [userId]);

  return (
    <div className="page_container">
      <div className="page_container__sidebar">
        <Sidebar className="page_container__sidebar" />
      </div>

      <Header className="page_container__header" />

      <div className="page_container__main">
        <Routes>
          <Route
            path="/list"
            element={<ListPage users={users} setUserId={setUserId} />}
          />
          <Route
            path="/list/:userId"
            element={<UserPage user={selectedUser} />}
          />
          <Route path="*" element={<ListPage users={users} />} />
        </Routes>
      </div>
    </div>
  );
};
