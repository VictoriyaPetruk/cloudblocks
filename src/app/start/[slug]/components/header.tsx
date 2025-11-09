import Image from "next/image";

interface HeaderProps {
  mounted: boolean;
}

export default function Header({ mounted }: HeaderProps) {
  return (
    <header
      className={`relative z-30 ${
        mounted ? "bg-transparent" : "bg-white/90 backdrop-blur-sm"
      }`}
      suppressHydrationWarning
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl'>
        <div className='flex items-center justify-center py-5'>
          <div className='flex items-center gap-3 font-semibold text-xl sm:text-2xl text-gray-700'>
            <Image
              src='/img/logo.png'
              alt='Cloud Blocks logo'
              width={36}
              height={36}
              className='rounded-md'
            />
            <span>Cloud Blocks</span>
          </div>
        </div>
      </div>
    </header>
  );
}
