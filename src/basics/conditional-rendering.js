//////////////////////////
// Conditional Rendering
// if statements, ternary operators, logical '&&' operator

const user = {
  name: 'Aleksandra',
  age: 24,
  //location: 'Brynica'
};
// jeśli lokalizacja występuje to zwróć ją, a jeśli obiekt nie posiada takiej właściwości to zwróć  Unknown
function getLocation(location) {
  if (location) {
    return location;
  } else {
    return 'Unknown';
  }
}
const templateFive = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {getLocation(user.location)}</p>
  </div>
);

// jeśli lokalizacja występuje to zwróć ją w elemencie p
function getLocation2(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
}
const templateSix = (
  <div>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation2(user.location)}
  </div>
);

const app = {
  title: 'To-Do List',
  subtitle: 'React App',
  //options: ['One', 'Two']
};

const templateSeven = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    {(app.options && app.options.length > 0) ? 'Here are your options: ' + app.options : 'No options'}
  </div>
);

const appRoot = document.getElementById('app');
ReactDOM.render(templateSeven, appRoot);