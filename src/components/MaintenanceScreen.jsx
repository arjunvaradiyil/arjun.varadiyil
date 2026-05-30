import Image from 'next/image';

export default function MaintenanceScreen() {
  return (
    <section
      className="relative h-[100svh] w-full overflow-hidden bg-black"
      aria-label="Site under maintenance"
    >
      <Image
        src="/main.png"
        alt="Site under maintenance"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
    </section>
  );
}
