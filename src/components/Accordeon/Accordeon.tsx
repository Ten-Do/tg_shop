import { useId } from 'react';
import './Accordeon.scss';

interface IInfo {
  label: string;
  value: string;
}

interface IAccordeonProps {
  items?: IInfo[];
}

export const Accordeon = ({ items }: IAccordeonProps) => {
  const id = useId();
  return (
    <div className="Accordeon">
      {items?.map((item, i) => (
        <div className="Accordeon-Item" key={i}>
          <details name={id} className="Accordeon-Details">
            <summary className="Accordeon-Title">
              <span role="term" aria-details={item.label}>
                {item.label}
              </span>
            </summary>
          </details>
          <div className="Accordeon-Content" id={item.label} role="definition">
            <div className="Accordeon-ContentBody">
              <p>{item.value}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
