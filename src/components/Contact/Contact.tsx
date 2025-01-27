import './Contact.scss';

export interface IContact {
  type: string;
  value: string;
  label?: string;
}

export interface IContactProps {
  contact: IContact;
  isExpanded?: boolean;
  expand?: () => void;
}

export const Contact = ({ contact, isExpanded, expand }: IContactProps) => {
  const { logo, href } = getContactLogo(contact);
  return (
    <div className={'Contact Contact_' + contact.type}>
      {isExpanded || !contact.label ? (
        <a className="Contact_Expanded" href={href} target="_blank">
          <img src={logo} alt={contact.type} />
          {contact.label && (
            <p className="Contact_ExpandedLabel">{contact.label}</p>
          )}
        </a>
      ) : (
        <button className="Contact_Collapsed" onClick={expand}>
          <img src={logo} alt={contact.type} />
        </button>
      )}
    </div>
  );
};

const getContactLogo = ({ type, value }: IContact) => {
  switch (type) {
    case 'email':
      return {
        logo: '/icons/email.svg',
        href: 'mailto:' + value,
        label: 'Написать на почту',
      };
    case 'tg':
      return { logo: '/logo/TG.svg', href: value, label: 'Телеграм' };
    case 'whatsapp':
      return { logo: '/logo/Whatsapp.svg', href: value, label: 'Whatsapp' };
    case 'vk':
      return { logo: '/logo/VK.svg', href: value, label: 'ВКонтакте' };
    default:
      return {
        logo: '/icons/phone.svg',
        href: 'tel:' + value,
        label: 'Позвонить',
      };
  }
};
