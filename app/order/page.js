// import { BillboardsList } from "@/components/pages";
import Link from 'next/link';
import Image from 'next/image';
import { IoReturnDownForwardOutline } from 'react-icons/io5';

const page = () => {
  return <div className='w-full h-screen m-0 p-0 flex flex-col items-center justify-center gap-4 overflow-hidden'>
    <div className='w-1/5 aspect-square relative'>
      <Image src='/img/maintenance.jpg' className='object-contain' fill />
    </div>
    <h1 className='text-3xl text-z-dark-blue font-bold'>با سپاس از صبر شما، صفحه مورد نظر در حال بازنگری است.</h1>
    <Link href='/' className='text-2xl font-normal text-z-dark-blue flex gap-2 border border-z-dark-blue transition-all
      rounded-lg hover:scale-105 p-4 m-2
    '>
      <p>بازگشت به صفحه اصلی</p>
      <IoReturnDownForwardOutline />
    </Link>
  </div>
  // return <BillboardsList hasHero={false}/>
}

export default page