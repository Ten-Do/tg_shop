import './CircleButton.scss';

export interface ICircleButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  icon: string;
  label: string;
  className?: string;
  withoutBg?: boolean;
}

export const CircleButton = ({
  onClick,
  className,
  icon,
  label,
  withoutBg,
}: ICircleButtonProps) => {
  return (
    <button
      className={
        'CircleButton ' +
        (withoutBg ? 'CircleButton_withoutBg ' : '') +
        className
      }
      aria-label={label}
      onClick={onClick}
      style={{ backgroundImage: `url(${icon})` }}
    />
  );
};
