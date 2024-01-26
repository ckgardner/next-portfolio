import { forwardRef, ReactNode } from 'react';

import NextLink, { LinkProps } from 'next/link';

interface Props extends LinkProps {
  className?: string;
  children: ReactNode;
  target?: string;
  title?: string;
  download?: string;
  rel?: string;
}

// eslint-disable-next-line react/display-name
export const Link = forwardRef<HTMLAnchorElement, Props>(({ className, href, children, download, target, title, rel, ...nextLinkProps }, ref) => {
  if (!href.toString().startsWith('http') && !href.toString().startsWith('/') && !href.toString().startsWith('#') && !href.toString().startsWith('tel')) {
    throw new Error(`The href is neither absolute, anchored with #, have a phone number, or external: ${href}. Please add adapt the href being passed.`);
  }
  return (
    /** @desc we are allowing this for the third-party props  */
    // eslint-disable-next-line react/jsx-props-no-spreading
    <NextLink href={href} {...nextLinkProps}>
      {/** @param ensures the anchor gets a @param href */}
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={className} ref={ref} title={title} target={target} download={download} rel={rel}>
        {children}
      </a>
    </NextLink>
  );
});
