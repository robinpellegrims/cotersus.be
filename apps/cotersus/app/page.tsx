import Image from 'next/image';
import logo from '../public/logo.svg';

export default async function Index() {
  return (
    <div className="flex h-full min-h-screen w-full flex-col items-center justify-center">
      <div className="flex flex-col gap-6">
        <Image src={logo} alt="logo" className="m-auto" />
        <div className="text-center">
          <h1 className="font-fjalla text-8xl">Cotersus</h1>
          <h2 className="font-montserrat text-4xl">IT Consulting</h2>
        </div>
      </div>
    </div>
  );
}
