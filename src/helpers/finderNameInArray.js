const finderName = (array, contact) =>
  new Promise((resolve, reject) => {
    const haveContact = array.find(
      ({ name }) => name === contact.name.toLowerCase()
    );

    if (haveContact) {
      reject(contact.name);
    } else {
      resolve(contact);
    }
  });

export default finderName;
