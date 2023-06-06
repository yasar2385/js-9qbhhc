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
  Object.keys(ROLE_JSON).forEach((key) => {
    if (ROLE_JSON[key]['full'] == val) {
      console.log('===>' + ROLE_JSON[key]['short']);
    }
  });
}

console.log(get('Production Editor'));

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
} //1634795613586
diffYMDHMS(moment(1643270648617), moment(1634795613586));

var LAST = [
  {
    char: '%',
    title: 'Percent sign',
    ignore: false,
    frag: false,
    alert_msg: false,
  },
  {
    char: '%',
    title: 'Percent sign',
    ignore: false,
    frag: false,
    alert_msg: false,
  },
  {
    char: 'ʞ',
    title: 'Latin small letter turned K',
    ignore: false,
    frag: false,
    alert_msg: false,
  },
];

var result = LAST.filter((obj) => obj.ignore == false);
console.log('===');
console.log(result);

console.log([1, 2, 3, 4].reduce((a, b) => a + b, 0));
console.log(
  [1, 25, 8, 9, 65, 9, 5, 85, 5, 8, 0.3, 555].reduce((a, b) => a + b, 0)
);

var json =
  '{"editor": "Rich Text Editor","editorPanel": "Rich Text Editor panel","common": {"editorHelp": "Press ALT 0 for help"}}';
var json_str = JSON.stringify(json);
console.log(json_str);
var json_par = JSON.parse(json);
console.log(json_par);
var ROLE_IDS = {
  '5b53536b4c4a803e9a5abf70': {
    name: 'Author',
    SelectorAttribute: 'showForAU',
    Restrict_Selector: 'ForAU',
    shortname: 'AU',
    backup: '5b53536b4c4a803e9a5abf70_AU',
    Stage: 'Authoring',
    next_mail: 'PE_email',
    next_role: 'PE_role',
  },
  '5b534de04c4a803e9a5abf45': {
    name: 'Production Editor',
    SelectorAttribute: 'showForPE',
    Restrict_Selector: 'ForPE',
    shortname: 'PE',
    backup: '5b534de04c4a803e9a5abf45_PE',
    Stage: 'PE Review',
    next_mail: 'collator_email',
    next_role: 'collator_role',
  },
  '5bcf15b1cf510152afba028a': {
    name: 'Collator',
    SelectorAttribute: 'showForCO',
    Restrict_Selector: 'ForCO',
    shortname: 'CO',
    backup: '5bcf15b1cf510152afba028a_CO',
    Stage: 'Collation',
  },
  '5bd1c4e2cf51015102014427': {
    name: 'Copyeditor',
    SelectorAttribute: 'showForCE',
    Restrict_Selector: 'ForCE',
    shortname: 'CE',
    backup: '5bd1c4e2cf51015102014427_CE',
    Stage: 'CE Review',
  },
  '5b534dc54c4a803e9a5abf41': {
    name: 'Project Manager',
    SelectorAttribute: 'showForPM',
    Restrict_Selector: 'ForPM',
    shortname: 'PM',
    backup: '5b534dc54c4a803e9a5abf41_PM',
    Stage: 'PM Review',
  },
  '5b534e334c4a803e9a5abf4c': {
    name: 'Editor',
    SelectorAttribute: 'showForED',
    Restrict_Selector: 'ForED',
    shortname: 'ED',
    backup: '5b534e334c4a803e9a5abf4c_ED',
    Stage: 'ED Review',
  },
  '5b534e5b4c4a803e9a5abf4f': {
    name: 'Journal Manager',
    SelectorAttribute: 'showForJM',
    Restrict_Selector: 'ForJM',
    shortname: 'JM',
    backup: '5b534e5b4c4a803e9a5abf4f_JM',
    Stage: 'JM Review',
  },
  '5bcf11635e7186178a22eee0': {
    name: 'Proofreader',
    SelectorAttribute: 'showForPR',
    Restrict_Selector: 'ForPR',
    shortname: 'PR',
    backup: '5bcf11635e7186178a22eee0_PR',
    Stage: 'Proof Reading',
  },
  XML: {
    name: 'XML',
    Stage: 'XML',
    shortname: 'XML',
  },
};
var ARR = [
  '5b534e334c4a803e9a5abf4c',
  '5b534de04c4a803e9a5abf45',
  '5b53536b4c4a803e9a5abf70',
  '5bcf15b1cf510152afba028a',
  '5b534dc54c4a803e9a5abf41',
  '5b534e5b4c4a803e9a5abf4f',
];
function stageComparator(stage1, stage2) {
  let Order_Of_Stage = [
    'Authoring',
    'PE Review',
    'ED Review',
    'Proof Reading',
    'JM Review',
    'CE Review',
    'PM Review',
    'Collation',
    'XML',
  ];
  if (ROLE_IDS[stage1]) {
    stage1 = ROLE_IDS[stage1].Stage;
    stage2 = ROLE_IDS[stage2].Stage;
  }
  console.log([stage1, stage2]);
  let index1 = Order_Of_Stage.indexOf(stage1);
  let index2 = Order_Of_Stage.indexOf(stage2);
  console.log([index1, index2]);
  if (index1 < index2) {
    return -1;
  }
  if (index1 > index2) {
    return 1;
  }
  return 0;
}
console.log(ARR.sort(stageComparator));

var GET_ROLES = function (Obj, Option = {}) {
  try {
    let return_data = Object.entries(Obj)
      .filter(function ([key, value]) {
        if (Option.active) return value == 'active';
        else return value != 'active';
      })
      .map(([key, value]) => key);
    return return_data;
  } catch (err) {
    console.warn(err.message);
  }
};

var one_obj = {
  '5b53536b4c4a803e9a5abf70': {
    $numberLong: '1658211917130',
  },
  '5b534e334c4a803e9a5abf4c': 'active',
};

console.log(GET_ROLES(one_obj, { active: false }));
var roles_orders = [
  {
    order: 1,
    role: '5b53536b4c4a803e9a5abf70',
    rolename: 'Author',
    status: 'signoff',
  },
  {
    order: 2,
    role: '5b534e334c4a803e9a5abf4c',
    rolename: 'Editor',
    status: 'active',
  },
  {
    order: 3,
    role: '5bcf11635e7186178a22eee0',
    rolename: 'Proofreader',
    status: 'active',
  },
];
let active_role = null;
Array.from(roles_orders).forEach((obj) => {
  if (obj.status == 'active' && !active_role) {
    //console.log(obj);
    active_role = obj.role;
  }
});
console.log(active_role);

var AUTH_SEL = {
  journal:
    "[person-group-type='author'] .surname,  [person-group-type='author'] .anonymous,  [person-group-type='author'] .collab",
  book: "[person-group-type='author'] .surname,  [person-group-type='author'] .anonymous,  [person-group-type='author'] .collab",
  default: '.surname,  .anonymous,  .collab',
};

var ref = document.querySelector('.ref');
var arr = [AUTH_SEL.journal, AUTH_SEL.default];

var reTurn = arr.map(function (selector, idx) {
  console.log(idx);
  return ref.querySelectorAll(selector).length;
});
console.log(reTurn);
