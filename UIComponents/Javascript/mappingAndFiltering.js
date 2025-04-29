/********************************************************
  Basic Blacklist Filtering – Direct ID match
********************************************************/
const data = [
    { id: 3, name: 'Alice' },
    { id: 7, name: 'Bob' },
    { id: 42, name: 'Cara' },
    { id: 5, name: 'Dan' },
    { id: 7, name: 'Eve' }
  ];
  
  const blacklistIds = [5, 7];
  
  const filteredData = data.filter(({ id }) => !blacklistIds.includes(id));
  
  console.log('Filtered Data:', filteredData);
  // Output: [{ id: 3, name: 'Alice' }, { id: 42, name: 'Cara' }]
  
  /********************************************************
    Advanced Blacklist Filtering – Exact IDs and Range
  ********************************************************/
  const users = [
    { id: 1, info: { name: 'Kinjal', age: 25 } },
    { id: 2, info: { name: 'Raj', age: 30 } },
    { id: 3, info: { name: 'Asha', age: 28 } },
    { id: 4, info: { name: 'Mehul', age: 22 } },
    { id: 5, info: { name: 'Divya', age: 27 } }
  ];
  
  const blacklistComplex = [
    { id: 2 },
    { range: [4, 5] }
  ];
  
  let exactIds = [];
  let rangeIds = [];
  
  blacklistComplex.forEach(elem => {
    if (elem.id !== undefined) exactIds.push(elem.id);
    if (elem.range) {
      elem.range.forEach(id => rangeIds.push(id));
    }
  });
  
  const filteredUsers = users.filter(({ id }) => 
    !exactIds.includes(id) && !rangeIds.includes(id)
  );
  
  console.log('Filtered Users:', filteredUsers);
  // Output: [{ id: 1, info: { name: 'Kinjal', age: 25 } }, { id: 3, info: { name: 'Asha', age: 28 } }]
  
  /********************************************************
    Mapping Users with Cities
  ********************************************************/
  const usersSimple = [
    { id: 1, name: 'Kinjal' },
    { id: 2, name: 'Raj' },
    { id: 3, name: 'Asha' }
  ];
  
  const cities = [
    { userId: 1, city: 'Mumbai' },
    { userId: 2, city: 'Delhi' },
    { userId: 4, city: 'Pune' }
  ];
  
  const usersWithCities = usersSimple.map(({ id, name }) => {
    const matched = cities.find(({ userId }) => userId === id);
    return {
      id,
      name,
      city: matched ? matched.city : null
    };
  });
  
  console.log('Users with Cities:', usersWithCities);
  // Output: 
  // [
  //   { id: 1, name: 'Kinjal', city: 'Mumbai' },
  //   { id: 2, name: 'Raj', city: 'Delhi' },
  //   { id: 3, name: 'Asha', city: null }
  // ]
  
  /********************************************************
    Mapping Users with Extra Info (City + Hobby)
  ********************************************************/
  const extraInfo = [
    { userId: 1, city: 'Mumbai', hobby: 'Dancing' },
    { userId: 2, city: 'Delhi', hobby: 'Reading' },
    { userId: 4, city: 'Pune', hobby: 'Gaming' }
  ];
  
  const usersWithExtra = usersSimple.map(({ id, name }) => {
    const matched = extraInfo.find(({ userId }) => userId === id);
    return {
      id,
      name,
      city: matched ? matched.city : null,
      hobby: matched ? matched.hobby : null
    };
  });
  
  console.log('Users with Extra Info:', usersWithExtra);
  // Output:
  // [
  //   { id: 1, name: 'Kinjal', city: 'Mumbai', hobby: 'Dancing' },
  //   { id: 2, name: 'Raj', city: 'Delhi', hobby: 'Reading' },
  //   { id: 3, name: 'Asha', city: null, hobby: null }
  // ]
  