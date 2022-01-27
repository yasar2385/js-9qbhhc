// Import stylesheets
import './style.css';
import moment from 'moment';
// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

const ROLE_JSON = {
  '5b53536b4c4a803e9a5abf70': { short: 'AU', full: 'Author' },
  '5b534de04c4a803e9a5abf45': { short: 'PE', full: 'Production Editor' },
  '5bcf15b1cf510152afba028a': { short: 'CL', full: 'Collator' },
  '5bd1c4e2cf51015102014427': { short: 'CE', full: 'Copyeditor' },
};

function get(val) {
  var short = null;
  Object.keys(ROLE_JSON).forEach((key) => {
    if (ROLE_JSON[key]['full'] == val) {
      console.log(ROLE_JSON[key]['short']);
    }
  });
}

get('Production Editor');

function diffYMDHMS(date1, date2) {
  let years = date1.diff(date2, 'year');
  date2.add(years, 'years');

  let months = date1.diff(date2, 'months');
  date2.add(months, 'months');

  let days = date1.diff(date2, 'days');
  date2.add(days, 'days');

  let hours = date1.diff(date2, 'hours');
  date2.add(hours, 'hours');

  let minutes = date1.diff(date2, 'minutes');
  date2.add(minutes, 'minutes');

  let seconds = date1.diff(date2, 'seconds');

  console.log(
    years +
      ' years ' +
      months +
      ' months ' +
      days +
      ' days ' +
      hours +
      'hours ' +
      minutes +
      ' minutes ' +
      seconds +
      ' seconds'
  );

  return { years, months, days, hours, minutes, seconds };
}//1634795613586
diffYMDHMS(moment(1643270648617), moment(1634795613586));
