import type { ReactNode } from 'react';

interface BackgroundImageBlockProps {
  imageSrc: string;
  alt?: string;
  className?: string;
  contentClassName?: string;
  overlayClassName?: string;
  children?: ReactNode;
  backgroundPosition?: string;
  backgroundSize?: string;
}

const BackgroundImageBlock = ({
  imageSrc,
  alt,
  className,
  contentClassName,
  overlayClassName,
  children,
  backgroundPosition = 'center bottom',
  backgroundSize,
}: BackgroundImageBlockProps) => {
  const combinedClassName = [
    'relative left-1/2 w-screen -translate-x-1/2 bg-no-repeat',
    !backgroundSize && 'bg-cover',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      className={combinedClassName}
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundPosition,
        ...(backgroundSize && { backgroundSize }),
      }}
      role={alt ? 'img' : undefined}
      aria-label={alt}
    >
      {overlayClassName ? (
        <div
          className={`absolute inset-0 ${overlayClassName}`}
          aria-hidden="true"
        />
      ) : null}
      {children ? (
        <div
          className={['relative z-10', contentClassName]
            .filter(Boolean)
            .join(' ')}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
};

export default BackgroundImageBlock;
