import React from 'react';

export default class WidgetHeader extends React.Component {
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
      <div className="widget-date-container">
        <div className="widget__date">
          <p className="widget__date--day">{this.getDay()}</p>
          <div className="date-container">
            <p className="widget__date--month">{this.getMonth()}</p>
            <p className="widget__date--year">{this.getYear()}</p>
          </div>
        </div>
        <div className="widget__date--week-day">
          <p>{this.getWeekDay()}</p>
        </div>
      </div>
    );
  }
}