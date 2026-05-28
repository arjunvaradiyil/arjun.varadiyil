import Image from 'next/image';
import { NEU } from './ui/neuTheme';

export default function HeroImage() {
  return (
    <div className={`relative aspect-[5/7] w-full max-w-sm mx-auto lg:max-w-none ${NEU.frame}`}>
      <Image
        src="/assets/images/profilepic.png"
        alt="Portrait of portfolio creator"
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 90vw, 400px"
      />
    </div>
  );
}
