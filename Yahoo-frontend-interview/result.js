// Mock data - Items and pattern
const items = [
  { name: "Eva", habit: "paint", age: "30" },
  { name: "Bob", habit: "play guitar", age: "29" },
  { name: "Timmy", habit: "paint", age: "30" },
  { name: "Allen", habit: "gym", age: "29" },
  { name: "John", habit: "swim", age: "29" },
];

const pattern = {
  name: "KKven",
  habbit: "leetcode",
  age: "29",
};

/* 
iterate through items
for each item(object), check its age whether === pattern.age
- if yes directly return currentObj
- if not, keep iterating items array
*/
/* 🟢 第一輪的手刻find() method - 
Implement Array.protoType.find which 
returns first element that match the target
otherwise return undefined
*/
const find = (items, pattern) => {
  for (let i = 0; i < items.length; i++) {
    const currentObj = items[i];

    if (currentObj.age === pattern.age) {
      return currentObj;
    }
  }
  return undefined;
};

const result = find(items, pattern);
console.log(result); // result: { name: "Bob", habit: "play guitar", age: "29" }
/* ------------------------------------------------------------------------------------ */
console.log(
  "* ---------------------------------------------------------------------- *"
);
const games = [
  {
    title: "Hello World",
    platform: ["switch", "kkbox", "spotify"],
    text: "mock text 1",
  },
  {
    title: "Another Title",
    platform: ["spotify", "apple music"],
    text: "mock text 2",
  },
  {
    title: "Different Title",
    platform: ["kkbox", "google play", "spotify"],
    text: "mock text 3",
  },
  {
    title: "4th title",
    platform: ["switch"],
    text: "mock text 4",
  },
];
/* 
expected output 把相同的platform strin和起來變成一個新的obj{title:.., text:}
*/
/* 🟢 2.最後面白板題 把duplicated platform的duplicated key拿出來，return a new object */
const keyValueObjectOperation = (items) => {
  const res = {};
  // forEach item = 每個items array裡面的object
  items.forEach((item) => {
    // item.platform is an array
    // 針對每個platform裡面的string
    // if(res[platform] === undefined)給他一個new array
    item.platform.forEach((platform) => {
      if (!res[platform]) {
        res[platform] = [];
      }
      // 把新的object包成{title, text}放進res[platform]
      res[platform].push({ title: item.title, text: item.text });
    });
  });

  return res;
};

const result2 = keyValueObjectOperation(games);
console.log(result2);
/*  
result2:{
  switch: [
    { title: 'Hello World', text: 'mock text 1' },
    { title: '4th title', text: 'mock text 4' }
  ],
  kkbox: [
    { title: 'Hello World', text: 'mock text 1' },
    { title: 'Different Title', text: 'mock text 3' }
  ],
  spotify: [
    { title: 'Hello World', text: 'mock text 1' },
    { title: 'Another Title', text: 'mock text 2' },
    { title: 'Different Title', text: 'mock text 3' }
  ],
  'apple music': [ { title: 'Another Title', text: 'mock text 2' } ],
  'google play': [ { title: 'Different Title', text: 'mock text 3' } ]
}
*/
/* ------------------------------------------------------------------------------------ */
console.log("* ---------------------------------------- *");

/* ------------------------------------------------------------------------------------ */
var data = [
  {
    countyId: "TPC",
    candidates: [
      {
        number: 1,
        name: "柯文哲",
        viceName: "吳欣盈",
        partyId: "tpp",
        votes: 366854,
        votePct: 23.8,
        status: "unknown",
      },
      {
        number: 2,
        name: "賴清德",
        viceName: "蕭美琴",
        partyId: "dpp",
        votes: 587899,
        votePct: 38.1,
        status: "elected",
      },
      {
        number: 3,
        name: "侯友宜",
        viceName: "趙少康",
        partyId: "kmt",
        votes: 587258,
        votePct: 38.1,
        status: "unknown",
      },
    ],
  },
  {
    countyId: "NTPC",
    candidates: [
      {
        number: 1,
        name: "柯文哲",
        viceName: "吳欣盈",
        partyId: "tpp",
        votes: 645105,
        votePct: 26.2,
        status: "unknown",
      },
      {
        number: 2,
        name: "賴清德",
        viceName: "蕭美琴",
        partyId: "dpp",
        votes: 948818,
        votePct: 38.6,
        status: "elected",
      },
      {
        number: 3,
        name: "侯友宜",
        viceName: "趙少康",
        partyId: "kmt",
        votes: 864557,
        votePct: 35.2,
        status: "unknown",
      },
    ],
  },
  {
    countyId: "TYC",
    candidates: [
      {
        number: 1,
        name: "柯文哲",
        viceName: "吳欣盈",
        partyId: "tpp",
        votes: 413528,
        votePct: 30.6,
        status: "unknown",
      },
      {
        number: 2,
        name: "賴清德",
        viceName: "蕭美琴",
        partyId: "dpp",
        votes: 476441,
        votePct: 35.3,
        status: "elected",
      },
      {
        number: 3,
        name: "侯友宜",
        viceName: "趙少康",
        partyId: "kmt",
        votes: 460823,
        votePct: 34.1,
        status: "unknown",
      },
    ],
  },
  {
    countyId: "TCC",
    candidates: [
      {
        number: 1,
        name: "柯文哲",
        viceName: "吳欣盈",
        partyId: "tpp",
        votes: 513025,
        votePct: 30.1,
        status: "unknown",
      },
      {
        number: 2,
        name: "賴清德",
        viceName: "蕭美琴",
        partyId: "dpp",
        votes: 641622,
        votePct: 37.6,
        status: "elected",
      },
      {
        number: 3,
        name: "侯友宜",
        viceName: "趙少康",
        partyId: "kmt",
        votes: 552556,
        votePct: 32.4,
        status: "unknown",
      },
    ],
  },
  {
    countyId: "TNH",
    candidates: [
      {
        number: 1,
        name: "柯文哲",
        viceName: "吳欣盈",
        partyId: "tpp",
        votes: 262560,
        votePct: 23.4,
        status: "unknown",
      },
      {
        number: 2,
        name: "賴清德",
        viceName: "蕭美琴",
        partyId: "dpp",
        votes: 570811,
        votePct: 51.0,
        status: "elected",
      },
      {
        number: 3,
        name: "侯友宜",
        viceName: "趙少康",
        partyId: "kmt",
        votes: 286867,
        votePct: 25.6,
        status: "unknown",
      },
    ],
  },
  {
    countyId: "KHC",
    candidates: [
      {
        number: 1,
        name: "柯文哲",
        viceName: "吳欣盈",
        partyId: "tpp",
        votes: 358096,
        votePct: 21.9,
        status: "unknown",
      },
      {
        number: 2,
        name: "賴清德",
        viceName: "蕭美琴",
        partyId: "dpp",
        votes: 800390,
        votePct: 48.9,
        status: "elected",
      },
      {
        number: 3,
        name: "侯友宜",
        viceName: "趙少康",
        partyId: "kmt",
        votes: 478476,
        votePct: 29.2,
        status: "unknown",
      },
    ],
  },
  {
    countyId: "KLC",
    candidates: [
      {
        number: 1,
        name: "柯文哲",
        viceName: "吳欣盈",
        partyId: "tpp",
        votes: 58195,
        votePct: 26.6,
        status: "unknown",
      },
      {
        number: 2,
        name: "賴清德",
        viceName: "蕭美琴",
        partyId: "dpp",
        votes: 76079,
        votePct: 34.8,
        status: "elected",
      },
      {
        number: 3,
        name: "侯友宜",
        viceName: "趙少康",
        partyId: "kmt",
        votes: 84507,
        votePct: 38.6,
        status: "unknown",
      },
    ],
  },
  {
    countyId: "HCT",
    candidates: [
      {
        number: 1,
        name: "柯文哲",
        viceName: "吳欣盈",
        partyId: "tpp",
        votes: 91384,
        votePct: 34.3,
        status: "unknown",
      },
      {
        number: 2,
        name: "賴清德",
        viceName: "蕭美琴",
        partyId: "dpp",
        votes: 92679,
        votePct: 34.8,
        status: "elected",
      },
      {
        number: 3,
        name: "侯友宜",
        viceName: "趙少康",
        partyId: "kmt",
        votes: 82326,
        votePct: 30.9,
        status: "unknown",
      },
    ],
  },
  {
    countyId: "HCH",
    candidates: [
      {
        number: 1,
        name: "柯文哲",
        viceName: "吳欣盈",
        partyId: "tpp",
        votes: 120985,
        votePct: 35.6,
        status: "unknown",
      },
      {
        number: 2,
        name: "賴清德",
        viceName: "蕭美琴",
        partyId: "dpp",
        votes: 93309,
        votePct: 27.4,
        status: "elected",
      },
      {
        number: 3,
        name: "侯友宜",
        viceName: "趙少康",
        partyId: "kmt",
        votes: 126016,
        votePct: 37.0,
        status: "unknown",
      },
    ],
  },
  {
    countyId: "MLH",
    candidates: [
      {
        number: 1,
        name: "柯文哲",
        viceName: "吳欣盈",
        partyId: "tpp",
        votes: 95637,
        votePct: 30.0,
        status: "unknown",
      },
      {
        number: 2,
        name: "賴清德",
        viceName: "蕭美琴",
        partyId: "dpp",
        votes: 91798,
        votePct: 28.8,
        status: "elected",
      },
      {
        number: 3,
        name: "侯友宜",
        viceName: "趙少康",
        partyId: "kmt",
        votes: 131230,
        votePct: 41.2,
        status: "unknown",
      },
    ],
  },
  {
    countyId: "CHH",
    candidates: [
      {
        number: 1,
        name: "柯文哲",
        viceName: "吳欣盈",
        partyId: "tpp",
        votes: 214714,
        votePct: 29.0,
        status: "unknown",
      },
      {
        number: 2,
        name: "賴清德",
        viceName: "蕭美琴",
        partyId: "dpp",
        votes: 282514,
        votePct: 38.1,
        status: "elected",
      },
      {
        number: 3,
        name: "侯友宜",
        viceName: "趙少康",
        partyId: "kmt",
        votes: 244140,
        votePct: 32.9,
        status: "unknown",
      },
    ],
  },
  {
    countyId: "NTC",
    candidates: [
      {
        number: 1,
        name: "柯文哲",
        viceName: "吳欣盈",
        partyId: "tpp",
        votes: 74854,
        votePct: 26.1,
        status: "unknown",
      },
      {
        number: 2,
        name: "賴清德",
        viceName: "蕭美琴",
        partyId: "dpp",
        votes: 103279,
        votePct: 36.0,
        status: "elected",
      },
      {
        number: 3,
        name: "侯友宜",
        viceName: "趙少康",
        partyId: "kmt",
        votes: 109163,
        votePct: 38.0,
        status: "unknown",
      },
    ],
  },
  {
    countyId: "YLH",
    candidates: [
      {
        number: 1,
        name: "柯文哲",
        viceName: "吳欣盈",
        partyId: "tpp",
        votes: 99470,
        votePct: 26.1,
        status: "unknown",
      },
      {
        number: 2,
        name: "賴清德",
        viceName: "蕭美琴",
        partyId: "dpp",
        votes: 169516,
        votePct: 44.5,
        status: "elected",
      },
      {
        number: 3,
        name: "侯友宜",
        viceName: "趙少康",
        partyId: "kmt",
        votes: 111633,
        votePct: 29.3,
        status: "unknown",
      },
    ],
  },
  {
    countyId: "CIH",
    candidates: [
      {
        number: 1,
        name: "柯文哲",
        viceName: "吳欣盈",
        partyId: "tpp",
        votes: 67382,
        votePct: 23.0,
        status: "unknown",
      },
      {
        number: 2,
        name: "賴清德",
        viceName: "蕭美琴",
        partyId: "dpp",
        votes: 139510,
        votePct: 47.7,
        status: "elected",
      },
      {
        number: 3,
        name: "侯友宜",
        viceName: "趙少康",
        partyId: "kmt",
        votes: 85642,
        votePct: 29.3,
        status: "unknown",
      },
    ],
  },
  {
    countyId: "CIC",
    candidates: [
      {
        number: 1,
        name: "柯文哲",
        viceName: "吳欣盈",
        partyId: "tpp",
        votes: 39950,
        votePct: 25.3,
        status: "unknown",
      },
      {
        number: 2,
        name: "賴清德",
        viceName: "蕭美琴",
        partyId: "dpp",
        votes: 68199,
        votePct: 43.3,
        status: "elected",
      },
      {
        number: 3,
        name: "侯友宜",
        viceName: "趙少康",
        partyId: "kmt",
        votes: 49507,
        votePct: 31.4,
        status: "unknown",
      },
    ],
  },
  {
    countyId: "PTH",
    candidates: [
      {
        number: 1,
        name: "柯文哲",
        viceName: "吳欣盈",
        partyId: "tpp",
        votes: 103028,
        votePct: 21.7,
        status: "unknown",
      },
      {
        number: 2,
        name: "賴清德",
        viceName: "蕭美琴",
        partyId: "dpp",
        votes: 226110,
        votePct: 47.5,
        status: "elected",
      },
      {
        number: 3,
        name: "侯友宜",
        viceName: "趙少康",
        partyId: "kmt",
        votes: 146789,
        votePct: 30.8,
        status: "unknown",
      },
    ],
  },
  {
    countyId: "ILH",
    candidates: [
      {
        number: 1,
        name: "柯文哲",
        viceName: "吳欣盈",
        partyId: "tpp",
        votes: 70171,
        votePct: 26.3,
        status: "unknown",
      },
      {
        number: 2,
        name: "賴清德",
        viceName: "蕭美琴",
        partyId: "dpp",
        votes: 119517,
        votePct: 44.7,
        status: "elected",
      },
      {
        number: 3,
        name: "侯友宜",
        viceName: "趙少康",
        partyId: "kmt",
        votes: 77441,
        votePct: 29.0,
        status: "unknown",
      },
    ],
  },
  {
    countyId: "HLH",
    candidates: [
      {
        number: 1,
        name: "柯文哲",
        viceName: "吳欣盈",
        partyId: "tpp",
        votes: 43047,
        votePct: 24.7,
        status: "unknown",
      },
      {
        number: 2,
        name: "賴清德",
        viceName: "蕭美琴",
        partyId: "dpp",
        votes: 43157,
        votePct: 24.8,
        status: "elected",
      },
      {
        number: 3,
        name: "侯友宜",
        viceName: "趙少康",
        partyId: "kmt",
        votes: 87953,
        votePct: 50.5,
        status: "unknown",
      },
    ],
  },
  {
    countyId: "TTH",
    candidates: [
      {
        number: 1,
        name: "柯文哲",
        viceName: "吳欣盈",
        partyId: "tpp",
        votes: 25590,
        votePct: 23.3,
        status: "unknown",
      },
      {
        number: 2,
        name: "賴清德",
        viceName: "蕭美琴",
        partyId: "dpp",
        votes: 30131,
        votePct: 27.4,
        status: "elected",
      },
      {
        number: 3,
        name: "侯友宜",
        viceName: "趙少康",
        partyId: "kmt",
        votes: 54220,
        votePct: 49.3,
        status: "unknown",
      },
    ],
  },
  {
    countyId: "PHC",
    candidates: [
      {
        number: 1,
        name: "柯文哲",
        viceName: "吳欣盈",
        partyId: "tpp",
        votes: 12202,
        votePct: 24.8,
        status: "unknown",
      },
      {
        number: 2,
        name: "賴清德",
        viceName: "蕭美琴",
        partyId: "dpp",
        votes: 19023,
        votePct: 38.6,
        status: "elected",
      },
      {
        number: 3,
        name: "侯友宜",
        viceName: "趙少康",
        partyId: "kmt",
        votes: 18052,
        votePct: 36.6,
        status: "unknown",
      },
    ],
  },
  {
    countyId: "KMC",
    candidates: [
      {
        number: 1,
        name: "柯文哲",
        viceName: "吳欣盈",
        partyId: "tpp",
        votes: 13038,
        votePct: 28.6,
        status: "unknown",
      },
      {
        number: 2,
        name: "賴清德",
        viceName: "蕭美琴",
        partyId: "dpp",
        votes: 4569,
        votePct: 10.0,
        status: "elected",
      },
      {
        number: 3,
        name: "侯友宜",
        viceName: "趙少康",
        partyId: "kmt",
        votes: 28005,
        votePct: 61.4,
        status: "unknown",
      },
    ],
  },
  {
    countyId: "LCC",
    candidates: [
      {
        number: 1,
        name: "柯文哲",
        viceName: "吳欣盈",
        partyId: "tpp",
        votes: 1651,
        votePct: 26.8,
        status: "unknown",
      },
      {
        number: 2,
        name: "賴清德",
        viceName: "蕭美琴",
        partyId: "dpp",
        votes: 648,
        votePct: 10.5,
        status: "elected",
      },
      {
        number: 3,
        name: "侯友宜",
        viceName: "趙少康",
        partyId: "kmt",
        votes: 3860,
        votePct: 62.7,
        status: "unknown",
      },
    ],
  },
];
/* -------------⭐️ 下面是react拿votesList跟votePtcList的實作-------------------------- */
const allVotes = [];

/* 🟢 React get all candidate's votes with sort from low -> high */

data.forEach((county) => {
  // iterate through 'candidates array' for each county
  county.candidates.forEach((candidate) => {
    // Push an object with candidate's name and votes to allVotes array
    allVotes.push({ name: candidate.name, votes: candidate.votes });
  });
});

console.log(allVotes.sort((obj1, obj2) => obj1.votes - obj2.votes));

/* 🟢 React get all candidate's votePct */
const allVotePct = [];

data.forEach((county) => {
  county.candidates.forEach((candidate) => {
    allVotePct.push({ name: candidate.name, votePct: candidate.votePct });
  });
});

/* React get all candidates's votePct with sort from high -> low */
console.log(allVotePct.sort((obj1, obj2) => obj2.votePct - obj1.votePct));

/*
allVotes:[
  { name: '賴清德', votes: 648 },
  { name: '柯文哲', votes: 1651 },
  { name: '侯友宜', votes: 3860 },
  { name: '賴清德', votes: 4569 },
  { name: '柯文哲', votes: 12202 },
  { name: '柯文哲', votes: 13038 },
  { name: '侯友宜', votes: 18052 },
  { name: '賴清德', votes: 19023 },
  { name: '柯文哲', votes: 25590 },
  { name: '侯友宜', votes: 28005 },
  { name: '賴清德', votes: 30131 },
  { name: '柯文哲', votes: 39950 },
  { name: '柯文哲', votes: 43047 },
  { name: '賴清德', votes: 43157 },
  { name: '侯友宜', votes: 49507 },
  { name: '侯友宜', votes: 54220 },
  { name: '柯文哲', votes: 58195 },
  { name: '柯文哲', votes: 67382 },
  { name: '賴清德', votes: 68199 },
  { name: '柯文哲', votes: 70171 },
  { name: '柯文哲', votes: 74854 },
  { name: '賴清德', votes: 76079 },
  { name: '侯友宜', votes: 77441 },
  { name: '侯友宜', votes: 82326 },
  { name: '侯友宜', votes: 84507 },
  { name: '侯友宜', votes: 85642 },
  { name: '侯友宜', votes: 87953 },
  { name: '柯文哲', votes: 91384 },
  { name: '賴清德', votes: 91798 },
  { name: '賴清德', votes: 92679 },
  { name: '賴清德', votes: 93309 },
  { name: '柯文哲', votes: 95637 },
  { name: '柯文哲', votes: 99470 },
  { name: '柯文哲', votes: 103028 },
  { name: '賴清德', votes: 103279 },
  { name: '侯友宜', votes: 109163 },
  { name: '侯友宜', votes: 111633 },
  { name: '賴清德', votes: 119517 },
  { name: '柯文哲', votes: 120985 },
  { name: '侯友宜', votes: 126016 },
  { name: '侯友宜', votes: 131230 },
  { name: '賴清德', votes: 139510 },
  { name: '侯友宜', votes: 146789 },
  { name: '賴清德', votes: 169516 },
  { name: '柯文哲', votes: 214714 },
  { name: '賴清德', votes: 226110 },
  { name: '侯友宜', votes: 244140 },
  { name: '柯文哲', votes: 262560 },
  { name: '賴清德', votes: 282514 },
  { name: '侯友宜', votes: 286867 },
  { name: '柯文哲', votes: 358096 },
  { name: '柯文哲', votes: 366854 },
  { name: '柯文哲', votes: 413528 },
  { name: '侯友宜', votes: 460823 },
  { name: '賴清德', votes: 476441 },
  { name: '侯友宜', votes: 478476 },
  { name: '柯文哲', votes: 513025 },
  { name: '侯友宜', votes: 552556 },
  { name: '賴清德', votes: 570811 },
  { name: '侯友宜', votes: 587258 },
  { name: '賴清德', votes: 587899 },
  { name: '賴清德', votes: 641622 },
  { name: '柯文哲', votes: 645105 },
  { name: '賴清德', votes: 800390 },
  { name: '侯友宜', votes: 864557 },
  { name: '賴清德', votes: 948818 } 
]

allVotePct = [
  { name: '侯友宜', votePct: 62.7 },
  { name: '侯友宜', votePct: 61.4 },
  { name: '賴清德', votePct: 51 },
  { name: '侯友宜', votePct: 50.5 },
  { name: '侯友宜', votePct: 49.3 },
  { name: '賴清德', votePct: 48.9 },
  { name: '賴清德', votePct: 47.7 },
  { name: '賴清德', votePct: 47.5 },
  { name: '賴清德', votePct: 44.7 },
  { name: '賴清德', votePct: 44.5 },
  { name: '賴清德', votePct: 43.3 },
  { name: '侯友宜', votePct: 41.2 },
  { name: '賴清德', votePct: 38.6 },
  { name: '侯友宜', votePct: 38.6 },
  { name: '賴清德', votePct: 38.6 },
  { name: '賴清德', votePct: 38.1 },
  { name: '侯友宜', votePct: 38.1 },
  { name: '賴清德', votePct: 38.1 },
  { name: '侯友宜', votePct: 38 },
  { name: '賴清德', votePct: 37.6 },
  { name: '侯友宜', votePct: 37 },
  { name: '侯友宜', votePct: 36.6 },
  { name: '賴清德', votePct: 36 },
  { name: '柯文哲', votePct: 35.6 },
  { name: '賴清德', votePct: 35.3 },
  { name: '侯友宜', votePct: 35.2 },
  { name: '賴清德', votePct: 34.8 },
  { name: '賴清德', votePct: 34.8 },
  { name: '柯文哲', votePct: 34.3 },
  { name: '侯友宜', votePct: 34.1 },
  { name: '侯友宜', votePct: 32.9 },
  { name: '侯友宜', votePct: 32.4 },
  { name: '侯友宜', votePct: 31.4 },
  { name: '侯友宜', votePct: 30.9 },
  { name: '侯友宜', votePct: 30.8 },
  { name: '柯文哲', votePct: 30.6 },
  { name: '柯文哲', votePct: 30.1 },
  { name: '柯文哲', votePct: 30 },
  { name: '侯友宜', votePct: 29.3 },
  { name: '侯友宜', votePct: 29.3 },
  { name: '侯友宜', votePct: 29.2 },
  { name: '柯文哲', votePct: 29 },
  { name: '侯友宜', votePct: 29 },
  { name: '賴清德', votePct: 28.8 },
  { name: '柯文哲', votePct: 28.6 },
  { name: '賴清德', votePct: 27.4 },
  { name: '賴清德', votePct: 27.4 },
  { name: '柯文哲', votePct: 26.8 },
  { name: '柯文哲', votePct: 26.6 },
  { name: '柯文哲', votePct: 26.3 },
  { name: '柯文哲', votePct: 26.2 },
  { name: '柯文哲', votePct: 26.1 },
  { name: '柯文哲', votePct: 26.1 },
  { name: '侯友宜', votePct: 25.6 },
  { name: '柯文哲', votePct: 25.3 },
  { name: '賴清德', votePct: 24.8 },
  { name: '柯文哲', votePct: 24.8 },
  { name: '柯文哲', votePct: 24.7 },
  { name: '柯文哲', votePct: 23.8 },
  { name: '柯文哲', votePct: 23.4 },
  { name: '柯文哲', votePct: 23.3 },
  { name: '柯文哲', votePct: 23 },
  { name: '柯文哲', votePct: 21.9 },
  { name: '柯文哲', votePct: 21.7 },
  { name: '賴清德', votePct: 10.5 },
  { name: '賴清德', votePct: 10 }
]
*/
