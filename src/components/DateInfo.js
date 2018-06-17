import React from 'react';

export default class DateInfo extends React.Component {
  getDay = () => (new Date().getDate());
  getMonth = () => {
    const MONTHS = [`jan`, `feb`, `mar`, `apr`, `may`, `jun`, `jul`, `aug`, `sep`, `oct`, `nov`, `dec`];
    return MONTHS[new Date().getMonth()];
  };
  getYear = () => (new Date().getFullYear());
  getWeekDay = () => {
    const WEEK_DAYS = [`sunday`, `monday`, `tuesday`, `wednesday`, `thursday`, `friday`, `saturday`];
    const today = new Date().getDay();
    return WEEK_DAYS[today];
  };
  render() {
    return (
      <div className="full-date-container">
        <div className="date">
          <p className="date__day">{this.getDay()}</p>
          <div className="date-container">
            <p className="date__month">{this.getMonth()}</p>
            <p className="date__year">{this.getYear()}</p>
          </div>
        </div>
        <div className="week-day">
          <p>{this.getWeekDay()}</p>
        </div>
      </div>
    );
  }
}