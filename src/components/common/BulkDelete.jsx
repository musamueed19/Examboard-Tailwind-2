import Image from 'next/image';
import React from 'react'

export default function BulkDelete() {
  return (
    <button className="scale-[0.65] md:scale-[0.7] lg:scale-100 hover:bg-[#ffc5c5] p-2 rounded-md">
      <Image src="/delete.svg" width={30} height={30} alt="delete icon" />
    </button>
  );
}
