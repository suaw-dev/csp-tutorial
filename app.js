var fs = require('fs');

fs.writeFile('readme.txt', 'test readme', function(err, data){
  if (err) throw err;
  console.log('readme created');
});

fs.mkdir('stuff', function(){
  fs.readFile('readme.txt', 'utf8', function(err, data){
    fs.writeFile('./stuff/writeme.txt', data, function(err){
      if (err) throw err;
    });
  });
});
