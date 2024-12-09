/** write a function to get input of long string and conver it to paras.
 * para will be group of fixed set of sentences 
  */


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
        rows.map(sentence => paras.push(rows.splice(0,defaultOption)));
        count--;
   }
   //console.log(paras);

   /* join sentences if a array occurance has more than 1 sentence */
   if (sentencePerPara !== 1) {
        paras = paras.map(para => para.join(' '))
   } 
   console.log(paras);

}


str = 'The replace()  method in JavaScript is used for manipulating strings. It allows you to search for a specific part of a string, known as a substring? and replace it with another substring. This method returns a new string with the specified replacements and does not alter the original string. This functionality is particularly useful for tasks that require string modifications without affecting the original data.'

StringToPara(str, 2);