import { useState } from 'react';

interface Icon {
  icon: JSX.Element;
  url: string;
  hoverColor: string;
}

export const SocialLink = ({ url, hoverColor, icon }: Icon) => {
  const [isHover, setHover] = useState(false);
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onMouseLeave={() => {
        setHover(false);
      }}
      onMouseEnter={() => {
        setHover(true);
      }}
      className="transition-colors"
      style={{
        color: isHover ? hoverColor : '#fff'
      }}
    >
      {icon}
    </a>
  );
};
