import React from 'react'
import dynamic from 'next/dynamic';
const BaseLayout= dynamic(
    () => import("../src/components/BaseLayout"),
    { ssr: false }
);
export default function Home() {
  return (
      <div className=''>
        <BaseLayout />
      </div>
  )
}
