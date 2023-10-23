import React from "react";
import Header from "./Header";
import Image from "next/image";
import Product from "./Product";

const HeroSection = () => {
  return (
    <div className="p-6">
      <Header />
      <div className="bg-gray-200 relative h-[25rem] pt-10 rounded-[3rem] mt-6">
        <div className="flex px-[6rem] justify-between items-center">
          <span>home/detalhes</span>
          <span className="text-3xl">Detalhes</span>
          <span>Próximo produto</span>
        </div>
        <div className="bg-gray-100 h-[30rem] absolute gap-[1rem]  rounded-[3rem] top-[7rem] mx-[4rem] p-[4rem] flex items-center">
          <div className="space-y-4 ">
            <h1 className="text-3xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </h1>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto tempora eligendi eos perferendis voluptas maiores vero
              qui distinctio iusto quia suscipit, sint harum fugiat, adipisci
              quae reiciendis aliquam, sit dolorem.
            </p>
            <div className="flex gap-4">
              <div className="bg-gray-200 h-[5rem] relative w-[5rem] rounded-[1rem]">
                <Image
                  src="/sneaker.png"
                  height={100}
                  width={100}
                  alt="sneaker"
                  className="absolute top-4 rotate-90"
                />
              </div>
              <div className="bg-gray-200 h-[5rem] relative w-[5rem] rounded-[1rem]">
                <Image
                  src="/sneaker.png"
                  height={100}
                  width={100}
                  alt="sneaker"
                  className="absolute top-4 rotate-45"
                />
              </div>
              <div className="bg-gray-200 h-[5rem] relative w-[5rem] rounded-[1rem]">
                <Image
                  src="/sneaker.png"
                  height={100}
                  width={100}
                  alt="sneaker"
                  className="absolute top-4 rotate-20"
                />
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col gap-6 justify-center">
            <div className="h-[22rem] w-[22rem] p-6 rounded-full border border-gray-200">
              <div className="bg-gray-200 h-full w-full rounded-full relative">
                <Image
                  src="/sneaker.png"
                  height={500}
                  width={500}
                  alt="sneaker"
                  className="absolute top-10 "
                />
              </div>
            </div>
            <span className="text-xl">R$ 499,90</span>
          </div>
          <div className="justify-center space-y-6">
            <div className="space-y-6">
              <div className="flex gap-2 items-center">
                <span>Avaliações:</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
                <span>5.0</span>
                <span>(69)</span>
              </div>
              <div className="flex items-center gap-2">
                <span>Cores:</span>
                <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
                <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
                <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
                <div className="h-6 w-6 bg-gray-200 rounded-full"></div>
              </div>
              <div className="flex gap-2">
                <span>Tamanhos:</span>
                <div className="grid grid-cols-3 gap-2">
                  <div className=" border py-2 px-6 border-gray-200 rounded-lg">
                    <span>32</span>
                  </div>
                  <div className=" border py-2 px-6 border-gray-200 rounded-lg">
                    <span>32</span>
                  </div>
                  <div className=" border py-2 px-6 border-gray-200 rounded-lg">
                    <span>32</span>
                  </div>
                  <div className=" border py-2 px-6 border-gray-200 rounded-lg">
                    <span>32</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full">
              {" "}
              <button className="bg-gray-300 m-auto py-2 rounded-md">
                Adicionar ao carrinho
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-2  rounded-full mx-[10rem] mt-[9rem] border-gray-300 h-[5rem]"></div>

      <div className="flex justify-between items-center">
        <div>
          <span>Outros</span>
          <br />
          <span>produtos</span>
        </div>
        <span>mostrar todos os produtos</span>
      </div>

      <div className="mt-10 grid grid-cols-3 gap-10">
        <Product />
        <Product />
        <Product />

      </div>
    </div>
  );
};

export default HeroSection;
