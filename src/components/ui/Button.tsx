import Link from 'next/link';

type ButtonVariant = 'primary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

interface ButtonAsLink extends ButtonBaseProps {
  href: string;
  onClick?: never;
  type?: never;
}

interface ButtonAsButton extends ButtonBaseProps {
  href?: never;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-primary-dark text-white hover:bg-[#001a40] active:bg-[#001433]',
  outline:
    'border border-text text-text hover:bg-text hover:text-white active:bg-[#0d0d0d]',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-5 py-2 text-sm',
  md: 'px-7 py-3 text-sm',
  lg: 'px-9 py-4 text-base',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  onClick,
  type = 'button',
}: ButtonProps) {
  const baseStyles =
    'inline-flex items-center justify-center rounded-full font-medium transition-colors duration-200 cursor-pointer';

  const classes = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
