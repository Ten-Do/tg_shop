import './Tag.scss';

export interface ITagProps {
  label?: string;
  value?: string | number;
  size?: 's' | 'm' | 'l';
}

export const Tag = ({ label, value, size = 'm' }: ITagProps) => {
  return (
    <p className={'Tag' + ' Tag_' + size}>
      {label}
      {value && <span className="Tag-Value">{' ' + value}</span>}
    </p>
  );
};
