import { PhoneIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";


const Footer = () => {
  return (
    <div className="bg-gray-200 mt-10">
      <div  className='max-w-screen-xl py-[5rem] px-10 m-auto gap-10 items-center grid grid-cols-4'>
        <div className="flex flex-col col-span-2 gap-2 ">
          <span className="text-3xl">LOGO</span>
          <span >
            Essa é uma loja modelo da Yampi. Todos os produtos, preços e
            informações são meramente ilustrativos e pedidos não serão
            processados.
          </span>
        </div>
        <div className="col-span-1 inline-block">
          <span>Atendimento</span>
          <div className="items-center flex gap-2">
            <div className="border border-gray-500 p-1 inline-block rounded-full">
              <PhoneIcon className="h-3 w-3  text-gray-500" />
            </div>
            <span>99 999999999</span>
          </div>
        </div>
  
        <div className="flex gap-4 col-span-1 justify-center">
         <Image src="/instagram.svg" height={50} width={50} alt="Instagram"/>
         <Image src="/pinterest.svg" height={50} width={50} alt="Pinterest"/>
         <Image src="/facebook.svg" height={50} width={50} alt="Facebook"/>
         <Image src="/youtube.svg" height={50} width={50} alt="Youtube"/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
