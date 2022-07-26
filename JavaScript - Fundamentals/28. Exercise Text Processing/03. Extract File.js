function extractFile (input) {
    let extracted = input.split("\\");
    let fileName = extracted.pop().split(".");
    let extension = fileName.pop();

    fileName = fileName.join('.')
    console.log(`File name: ${fileName}\nFile extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.bak.pptx');
console.log('~~~~~~');
extractFile('C:\\Projects\\Data-Structures\\LinkedList.cs');
