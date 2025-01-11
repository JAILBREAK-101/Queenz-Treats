import React from 'react';
import Link from '../../../blog/node_modules/next/link';

interface CardProps {
  image?: string;
  title: string;
  description: string;
  link: string;
  btnText: string;
}

export const Card: React.FC<CardProps> = ({
  image,
  title,
  description,
  link,
  btnText,
}) => {
  return (
    <div className="">
      <div className="relative">- 
        <img src={image} alt={title} className="" />
        <Link href={link} className="">
            {btnText}
        </Link>
      </div>
      <div className="">
          <h3 className="">{title}</h3>
          <p className="">{description}</p>
      </div>
    </div>
  );
};
