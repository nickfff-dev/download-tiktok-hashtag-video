

const prompt = require('prompt-sync')({ sigint: true });
const fs = require('fs')
  
  


let hashTag = prompt('Enter hashtag: ');
const path = './save_vid/' + "#" + hashTag;

(async () => { 

  try {
    fs.readdir(path, (err, files) => {
      files.sort((a, b) => {
        return a.localeCompare(b);
      }
      );
      files.forEach((file, index) => {
        fs.rename(path + '/' + file, path + '/' + "#" + hashTag + "_" + index + ".mp4", function (err) {
          if (err) throw err;
        });
      }
      );
    });
  }
  catch (error) {
    console.log(error);
  
   }
})();
