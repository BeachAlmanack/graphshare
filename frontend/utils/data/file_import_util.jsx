import { csv, json, tsv } from 'd3-request';

const csvData = (filename, cb) => {
  csv(filename, (error, data) => {
    cb(data);
  });
};

const jsonData = (filename, cb) => {
  json(filename, (error, data) => {
    cb(data);
  });
};

const tsvData = (filename, cb) => {
  tsv(filename, (error, data) => {
    cb(data);
  });
};

export default (file, type, cb) => {
  switch (type) {
    case 'text/csv':
      return csvData(file, cb);
    case 'text/tab-separated-values':
      return tsvData(file, cb);
    case 'application/json':
      return jsonData(file, cb);
    default:
      return undefined;
  }
};
