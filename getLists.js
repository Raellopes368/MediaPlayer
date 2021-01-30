require('dotenv').config();
const { readdir } = require('fs');
const { resolve } = require('path');
const { promisify } = require('util');


const readDirSync = promisify(readdir); 

module.exports = async function getLists(){
  const list = await readDirSync(
    resolve(process.env.PATH_LOCAL), { 
    encoding: 'utf-8'
  });
  return list;
};

