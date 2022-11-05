const { readFileSync,readdirSync } = require('fs');

function findExp(search, ...args) {
  var re = new RegExp(search, "i");
  found = []
  for (let file of args) {
    let contents = readFileSync(file, 'utf-8');
    if (contents.search(re) != -1) {
      found.push(file)
    }
  }
  if (found.length == 0) console.log('None')
  else console.log('Found in : ' + found.join(','))
}

function findExpGold(search, ...args) {
  var re = new RegExp(search, "i");
  found = []
  for (let file of args) {
    if (file.endsWith('.txt')) {
      let contents = readFileSync(file, 'utf-8');
      if (contents.search(re) != -1) {
        found.push(file)
      }
    } else {
      let subDirfiles = readdirSync(file);
      for (let subDirfile of subDirfiles){
        let contents = readFileSync(file+'/'+subDirfile, 'utf-8');
          if (contents.search(re) != -1) {
            found.push(file+'/'+subDirfile)
          }
      }
    }
  }

  if (found.length == 0) console.log('None')
  else console.log('Found in : ' + found.join(','))
}
//fetch from files
findExp('zakarya','./file1.txt','./file2.txt')
//fetch from diractory files
findExpGold('laib','./test');