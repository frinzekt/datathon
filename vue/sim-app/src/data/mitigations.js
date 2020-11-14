const mitigations = [
  {
    id: 1,
    name: 'School Closures',
    levels: 4,
    level: 0,
    levelDescriptors: {
      0: 'No measures.',
      1: 'Recommend closing, open with alterations to operations.',
      2: 'Require closing at some levels/categories.',
      3: 'Require closing at all levels.',
    },
  },
  {
    id: 2,
    name: 'Workplace Closures',
    levels: 4,
    level: 0,
    levelDescriptors: {
      0: 'No measures.',
      1: 'Recommend closing (or work from home).',
      2: 'Require closing (or work from home) for some sectors or categories of workers.',
      3: 'Require closing (or work from home) all-but-essential workplaces (e.g. grocery stores, doctors).',
    },
  },
  {
    id: 3,
    name: 'Public event cancellation',
    levels: 3,
    level: 0,
    levelDescriptors: {
      0: 'No measures.',
      1: 'Recommend cancelling.',
      2: 'Require cancelling.',
    },
  },
  {
    id: 4,
    name: 'Restrictions on gatherings',
    levels: 5,
    level: 0,
    levelDescriptors: {
      0: 'No restrictions.',
      1: 'Restrictions on very large gatherings (the limit is above 1000 people).',
      2: 'Restrictions on gatherings between 101-1000 people.',
      3: 'Restrictions on gatherings between 11-100 people.',
      4: 'Restrictions on gatherings of 10 people or less.',
    },
  },
  {
    id: 5,
    name: 'Public transport closure',
    levels: 3,
    level: 0,
    levelDescriptors: {
      0: 'No measures.',
      1: 'Recommend closing (or significantly reduce volume/route/means of transport available).',
      2: 'Require closing (or prohibit most citizens from using it).',
    },
  },
  {
    id: 6,
    name: 'Stay at home requirements',
    levels: 4,
    level: 0,
    levelDescriptors: {
      0: 'No measures.',
      1: 'Recommend not leaving house.',
      2: 'Require not leaving house with exceptions for daily exercise, grocery shopping, and ‘essential’ trips.',
      3: 'Require not leaving house with minimal exceptions (e.g. allowed to leave only once a week, or only one person can leave at a time, etc.).',
    },
  },
  {
    id: 7,
    name: 'Internal movement restrictions',
    levels: 3,
    level: 0,
    levelDescriptors: {
      0: 'No measures.',
      1: 'Recommend not to travel between regions/cities.',
      2: 'Internal movement restrictions in place.',
    },
  },
  {
    id: 8,
    name: 'International travel restrictions',
    levels: 5,
    level: 0,
    levelDescriptors: {
      0: 'No measures.',
      1: 'Screening.',
      2: 'Quarantine arrivals from high-risk regions.',
      3: 'Ban on arrivals from some regions.',
      4: 'Ban on all regions or total border closure.',
    },
  },
  {
    id: 9,
    name: 'Income support',
    levels: 3,
    level: 0,
    levelDescriptors: {
      0: 'No income support.',
      1: 'Government is replacing less than 50% of lost salary (or if a flat sum, it is less than 50% median salary).',
      2: 'Government is replacing 50% or more of lost salary (or if a flat sum, it is greater than 50% median salary).',
    },
  },
  {
    id: 10,
    name: 'Debt/contract relief for households',
    levels: 3,
    level: 0,
    levelDescriptors: {
      0: 'No debt/contract relief.',
      1: 'Narrow relief, specific to one kind of contract.',
      2: 'Broad debt/contract relief.',
    },
  },
  {
    id: 11,
    name: 'Public info campaigns',
    levels: 3,
    level: 0,
    levelDescriptors: {
      0: 'No COVID-19 public information campaign.',
      1: 'Public officials urging caution about COVID-19.',
      2: 'Coordinated public information campaign (e.g. across traditional and social media).',
    },
  },
  {
    id: 12,
    name: 'Testing policy',
    levels: 4,
    level: 0,
    levelDescriptors: {
      0: 'No testing policy.',
      1: 'Only those who both (a) have symptoms AND (b) meet specific criteria (e.g. key workers, hospital admissions, contact with a known case, overseas returns).',
      2: 'Testing of anyone showing COVID-19 symptoms.',
      3: 'Open public testing (e.g. “drive through” testing available to asymptomatic people).',
    },
  },
  {
    id: 13,
    name: 'Facial coverings',
    levels: 5,
    level: 0,
    levelDescriptors: {
      0: 'No policy.',
      1: 'Recommended.',
      2: 'Required in some specified shared/public spaces outside the home with other people present, or some situations when social distancing not possible.',
      3: 'Required in all shared/public spaces outside the home with other people present or all situations when social distancing not possible.',
      4: 'Required outside the home at all times regardless of location or presence of other people.',
    },
  },
];

export default mitigations;
