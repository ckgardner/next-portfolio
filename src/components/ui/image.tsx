import Image, { ImageProps } from 'next/image';

export const NextImage = (props: ImageProps & { alt: string }) => {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image {...props}  />
  );
};
