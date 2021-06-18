export const mainTableCreator = (element, structure, data, arch) => {
  element.innerHTML = '';
  data.map((row, idx) => {
    if (row.isArchived === arch) {
      const tr = document.createElement('tr');
      tr.id = `item-${idx}`;
      element.appendChild(tr);
      for (let i = 0; i < structure.length; i++) {
        const td = document.createElement('td');
        td.innerHTML = row[structure[i]];
        tr.appendChild(td);
      }
    }
  });
};

export const subTableCreator = (element, structure, data) => {
  element.innerHTML = '';
  const transformData = {};

  for (let i = 0; i < data.length; i++) {
    if (!transformData.hasOwnProperty(data[i].category)) {
      transformData[data[i].category] = {
        amount: 1,
        arch: 0,
        cat: data[i].category,
      };
      if (data[i].isArchived) {
        transformData[data[i].category].arch += 1;
      }
    } else {
      transformData[data[i].category].amount += 1;
      if (data[i].isArchived)
        transformData[data[i].category].arch += 1;
    }
  }
  for (let key in transformData) {
    const tr = document.createElement('tr');
    tr.id = key;
    element.appendChild(tr);

    for (let i = 0; i < structure.length; i++) {
      const td = document.createElement('td');
      td.innerHTML = transformData[key][structure[i]];
      console.log(transformData[key][structure[i]]);
      tr.appendChild(td);
    }
  }
};