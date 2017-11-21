import { csv } from 'd3-request';

export const csvData = (filename, cb) => {
  csv(filename, (error, data) => {
    cb(data);
  });
};