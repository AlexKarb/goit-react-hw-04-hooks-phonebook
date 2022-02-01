import { useState } from 'react';

import Section from './Utils/Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactsList from './ContactsList/ContactsList';
import Title from './Utils/Title/Title';
import { nanoid } from 'nanoid';
import useLocalStorage from 'helpers/useLocalStorage';

const LS_KEY = 'contacts';

const App = () => {
  const [contacts, setContacts] = useLocalStorage(LS_KEY, []);
  const [filter, setFilter] = useState('');

  const filterChange = e => setFilter(e.target.value.toLowerCase());

  const saveContact = (name, number) =>
    setContacts(pS => [
      { name: name.toLowerCase(), number, id: nanoid() },
      ...pS,
    ]);

  const filterContact = contacts.filter(({ name }) => name.includes(filter));
  const contactsList = filterContact.length === 0 ? contacts : filterContact;

  return (
    <div className="container">
      <Section type="Phonebook">
        <Title title="Phonebook" />
        <ContactForm allContacts={contacts} onSubmit={saveContact} />
      </Section>
      <Section>
        <Title title="Contacts" />
        <ContactsList
          contactsList={contactsList}
          filter={filter}
          onChange={filterChange}
          onDelete={setContacts}
        />
      </Section>
    </div>
  );
};

export default App;
