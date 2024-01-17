// import { program } from "commander";
const {program} = require('commander')
const contacts = require('./contacts')
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
       const allContact = await contacts.listContacts()
      console.log(allContact);
      break

    case "get":
      const contact = await contacts.getContactById(id)
      console.log(contact);
      break

    case "add":
      const newContact = await contacts.addContact({name, email, phone})
      console.log(newContact);
    break;

    case "remove":
      const deletedContact = await contacts.removeContact(id)
      console.log(deletedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options);
