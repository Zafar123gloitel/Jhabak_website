import React from 'react';
import styles from './textComponents.module.scss';
import Image from 'next/image';
import Link from 'next/link';
interface ITextContent {
  smallHeading?: string;
  heading?: string;
  content?: string;
  contentList?: string[];
  href?: string;
}
export const TextComponent = ({ heading, smallHeading, content, contentList, href }: ITextContent) => {
  return (
    <div className={styles.content}>
      <p className={`${styles.small_heading} text-white css-f13 m-0`}>
        <strong>{smallHeading}</strong>
      </p>
      <h1 className="section_heading_css w-100 mt-1">{heading}</h1>
      <p className={`${styles.advisory_text} mt-3  _css_content_ `}>{content}</p>
      <ul className="mt-2">
        {contentList &&
          contentList.map(data => {
            return (
              <li key={data} className="_css_content_ mt-1">
                <Image src={'/assets/svg/landing/check_squere.svg'} alt={data} width={17} height={17} />
                <span>{data}</span>
              </li>
            );
          })}
      </ul>
      {href && (
        <Link href={href}>
          <button className="Dark_button mt-5">Book An Appointment</button>
        </Link>
      )}
    </div>
  );
};
