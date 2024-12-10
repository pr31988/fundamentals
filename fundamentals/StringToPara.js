#!/usr/bin/env node
/** write a function to get input of long string and conver it to paras.
 * para will be group of sentence count, count is passed as input 
 * run command --> StringToPara <filename> <sentence per para>
  */

var fs = require('fs');

function StringToPara(stringData, options) {
    const defaultOption = 2
    let paras = []

    const sentencePerPara = !options ? defaultOption : options;
    
    /* hold sentences in the array  */
    let rows = stringData.replace(/([.?!])\s*(?=[A-Z])/g, '$1|').split('|')
   // console.log('raw: ', rows);

   /* create an array or arrays for each para  */
   let count = sentencePerPara
   while (count > 1){
        rows.map(sentence => paras.push(rows.splice(0,sentencePerPara)));
        count--;
   }
   //console.log(paras);

   /* join sentences if a array occurance has more than 1 sentence */
   if (sentencePerPara !== 1) {
        paras = paras.map(para => para.join(' '))
   } 
   //console.log(paras);
   return paras;
}

//read command arguments for file name & no of sentences per paragraph
const args = process.argv.slice(2);

var inpData = '';

var inputStream = fs.createReadStream(args[0]);     
inputStream.setEncoding('utf-8');

var writeStream = fs.createWriteStream('strOut.txt')

inputStream.on('data', (chunk) => {
     inpData += chunk;
});

inputStream.on('end', () => {
     const outData = StringToPara(inpData, Number(args[1]));
     console.log(outData.toString());
     //writeStream.write(outData);
     //writeStream.end();
});

inputStream.on('error', (err) => {
     console.log(err);
})