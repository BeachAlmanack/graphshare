export const NUMERICAL = 'Numerical';
export const DATE = 'Date';
export const CATEGORICAL = 'Categorical';

const removeTrailingAndLeadingSpaces = (string) => {
  return string.replace(/^\s+|\s+$/g, '');
};

const rowsToColumns = (data) => {
  const dataset = {};
  const keys = Object.keys(data[0]);
  keys.forEach((key, idx) => {
    dataset[idx] = { data: [] };
    const keyString = removeTrailingAndLeadingSpaces(key);
    dataset[idx].name = keyString;
  });
  data.forEach((d) => {
    keys.forEach((key, idx) => {
      const dataString = removeTrailingAndLeadingSpaces(d[key]);
      dataset[idx].data.push(dataString);
    });
  });
  return dataset;
};

export const verifyNumberColumn = (column) => {
  for (let i = 0; i < column.length; i += 1) {
    const matches = column[i].match(/-?\d+[.|,]?\d*/);
    if (!matches || (matches && matches[0] !== column[i])) {
      return column[i];
    }
  }
  return null;
};

export const verifyDateColumn = (column) => {
  for (let i = 0; i < column.length; i += 1) {
    const matches = column[i].match(/\d{2,4}[-|/]\d{2,4}[-|/]\d{2,4}/);
    if (!matches || (matches && matches[0] !== column[i])) {
      return column[i];
    }
  }
  return null;
};

export const formatData = (rows) => {
  const arrayData = rowsToColumns(rows);
  const columnIds = Object.keys(arrayData);
  const header = {};
  
  columnIds.forEach((column) => {
    let name = '';
    switch (null) {
      case verifyNumberColumn(arrayData[column].data):
        name = arrayData[columnIds[column]].name;
        header[name] = NUMERICAL;
        break;
      case verifyDateColumn(arrayData[column].data):
        name = arrayData[columnIds[column]].name;
        header[name] = DATE;
        break;
      default:
        name = arrayData[columnIds[column]].name;
        header[name] = CATEGORICAL;
        break;
    }
  });

  return {
    rows,
    header,
  };
};

// export const addColumnsTypes = (data) => {
//   const arrayData = rowsToColumns(data);
//   const columnNames = Object.keys(arrayData);
//   const dataWithType = arrayData;
//   const dataTypes = {};
//   columnNames.forEach((column) => {
//     switch (null) {
//       case verifyNumberColumn(dataWithType[column].data):
//         data[column].type = NUMERICAL;
//         break;
//       case verifyDateColumn(dataWithType[column].data):
//         dataWithType[column].type = DATE;
//         break;
//       default:
//         dataWithType[column].type = CATEGORICAL;
//         break;
//     }
//   });
//   return dataWithType;
// };
