export const citiesList = [
  {
    id: 703448,
    name: 'Kyiv',
    state: '',
    country: 'UA',
    coord: {
      lon: 30.516666,
      lat: 50.433334,
    },
  },
  {
    id: 2643743,
    name: 'London',
    state: '',
    country: 'GB',
    coord: {
      lon: -0.12574,
      lat: 51.50853,
    },
  },
  {
    id: 2968815,
    name: 'Paris',
    state: '',
    country: 'FR',
    coord: {
      lon: 2.3486,
      lat: 48.853401,
    },
  },
  {
    id: 5128638,
    name: 'New York',
    state: 'NY',
    country: 'US',
    coord: {
      lon: -75.499901,
      lat: 43.000351,
    },
  },
  {
    id: 5245497,
    name: 'Berlin',
    state: 'WI',
    country: 'US',
    coord: {
      lon: -88.943451,
      lat: 43.96804,
    },
  },
  {
    id: 1816670,
    name: 'Beijing',
    state: '',
    country: 'CN',
    coord: {
      lon: 116.397232,
      lat: 39.907501,
    },
  },
  {
    id: 1850147,
    name: 'Tokyo',
    state: '',
    country: 'JP',
    coord: {
      lon: 139.691711,
      lat: 35.689499,
    },
  },
  {
    id: 7280290,
    name: 'Taipei',
    state: '',
    country: 'TW',
    coord: {
      lon: 121.651611,
      lat: 25.025881,
    },
  },
  {
    id: 1835847,
    name: 'Seoul',
    state: '',
    country: 'KR',
    coord: {
      lon: 127.0,
      lat: 37.583328,
    },
  },
];

export const citiesIds = citiesList.map(({id}) => id).join(',');

export const shadowStyles = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 5,
  elevation: 5,
};

export const listItemPadding = 10;
export const animationDuration = 300;
export const animationPerspective = 1000;
