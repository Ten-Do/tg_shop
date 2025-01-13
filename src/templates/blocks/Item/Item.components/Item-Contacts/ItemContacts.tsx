import { useState } from 'react';

import '../../Item.scss';
import { Contact } from '../../../../../components/Contact';

export const ItemContacts = ({ contacts }) => {
  const [expanded, setExpanded] = useState(Array(contacts.length).fill(false));
  if (!contacts.length) return null;
  return (
    <div className="Item-Contacts">
      {contacts.map((contact, i) => (
        <Contact
          key={i}
          contact={contact}
          isExpanded={expanded[i]}
          expand={() =>
            setExpanded(
              Array.from({ length: expanded.length }, (_, j) =>
                j === i ? true : false,
              ),
            )
          }
        />
      ))}
    </div>
  );
};
