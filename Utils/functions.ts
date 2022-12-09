import {readFileSync} from "fs";


function syncReadFile(filename:string) {
  return  readFileSync(filename, 'utf-8');
}

export {syncReadFile}

