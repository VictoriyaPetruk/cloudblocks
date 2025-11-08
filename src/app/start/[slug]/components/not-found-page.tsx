import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className='min-h-screen bg-white flex items-center justify-center'>
      <div className='text-center max-w-md px-6'>
        <div className='mb-8'>
          <Image
            src='/img/logo.png'
            alt='Cloud Blocks logo'
            width={72}
            height={72}
            className='mx-auto rounded-md'
          />
        </div>
        <h1 className='text-4xl font-bold text-black mb-4 leading-tight'>
          Page Not Found
        </h1>
        <p className='text-base text-gray-600 mb-8'>
          The page you're looking for doesn't exist.
        </p>
        <Link
          href='/'
          className='inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:from-orange-700 hover:to-orange-600 transition-all duration-200 shadow-sm hover:shadow-md'
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}

