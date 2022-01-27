// Import stylesheets
import './style.css';

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