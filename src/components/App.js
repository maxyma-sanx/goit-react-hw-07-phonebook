import { Wrapper } from './Wrapper';
import { GlobalStyle } from './GlobalStyle';

import { Section } from './Section';
import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { Social } from './Social';

import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

export const App = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Wrapper>
      <Section title="Add contact" headerContent={<Social />}>
        <ContactForm />
      </Section>
      {contacts.length > 0 && (
        <Section title="Contacts" headerContent={<Filter />}>
          <ContactList />
        </Section>
      )}

      <GlobalStyle />
    </Wrapper>
  );
};
