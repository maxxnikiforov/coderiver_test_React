import React from 'react';
import './InfoTabs.scss';

export const InfoTabs = () => (
  <div className="infoTabs">
    <div className="infoTabs__tickets">
      <div className="infoTabs__tickets-title">
        <p className="infoTabs__tickets-title-text">Unresolved tickets</p>
        <p className="infoTabs__tickets-title-details">View details</p>
      </div>
      <p className="infoTabs__tickets-title-paragraph">
        Group:
        <b>Support</b>
      </p>
      <div className="infoTabs__tickets-body">
        <p className="infoTabs__tickets-body-text">
          Waiting on Feature Request
        </p>
        <p className="infoTabs__tickets-body-number">4238</p>
      </div>

      <div className="infoTabs__tickets-body">
        <p className="infoTabs__tickets-body-text">
          Awaiting Customer Response
        </p>
        <p className="infoTabs__tickets-body-number">1005</p>
      </div>

      <div className="infoTabs__tickets-body">
        <p className="infoTabs__tickets-body-text">
          Awaiting Developer Fix
        </p>
        <p className="infoTabs__tickets-body-number">911</p>
      </div>

      <div className="infoTabs__tickets-body">
        <p className="infoTabs__tickets-body-text">
          Pending
        </p>
        <p className="infoTabs__tickets-body-number">101</p>
      </div>
    </div>

    <div className="infoTabs__tasks">
      <div className="infoTabs__tickets-title">
        <p className="infoTabs__tickets-title-text">Tasks</p>
        <p className="infoTabs__tickets-title-details">View all</p>
      </div>
      <p className="infoTabs__tickets-title-paragraph">
        Today
      </p>
      <div className="infoTabs__tickets-body">
        <p className="infoTabs__tasks-text">
          Create new task
        </p>
        <div className="infoTabs__tasks-new">+</div>
      </div>

      <div className="infoTabs__tickets-body">
        <p className="infoTabs__tickets-body-text">
          <input type="checkbox" />
          Finish ticket update
        </p>
        <div className="infoTabs__tasks-finish">Urgent</div>
      </div>

      <div className="infoTabs__tickets-body">
        <p className="infoTabs__tickets-body-text">
          <input type="checkbox" />
          Create new ticket example
        </p>
        <div className="infoTabs__tasks-ticket">Ntw</div>
      </div>

      <div className="infoTabs__tickets-body">
        <p className="infoTabs__tickets-body-text">
          <input type="checkbox" />
          Update ticket report
        </p>
        <div className="infoTabs__tasks-default">Default</div>
      </div>
    </div>
  </div>
);
