import './Button.scss';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = ({ children, className, ...props }: IButtonProps) => {
  return (
    <button className={'Button ' + className} {...props}>
      {children}
    </button>
  );
};
