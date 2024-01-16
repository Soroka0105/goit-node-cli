const fs = require('fs').promises;
const path = require('path')

const contactsPath = async () => {
    try {
        const pathToFile = path.join('db', 'contacts.json')
       const result = await fs.readFile(pathToFile) 
       console.log(result);
    } catch (error) {
        console.log(error);
    }
}
contactsPath()
console.log(process.env);