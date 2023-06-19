import Header from '@/components/Header';
import CardComponent from '@/components/CardComponent';

import React, { useState } from 'react';
import TableComponent from '@/components/TableComponent';
import '../app/globals.css'

const IndexPage = () => {
  
  return (
    <div className='bg-[#F1F5F8] min-h-screen'>
      <Header onTransactionCreated={undefined} />
      <CardComponent />
      <TableComponent />
    </div>
  )
};

export default IndexPage;
