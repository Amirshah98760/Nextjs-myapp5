"use client"    
import { useSearchParams } from 'next/navigation'
import React from 'react'


const SearchParamsData = () => {
  const searchParams = useSearchParams();

  const category = searchParams.get('category');
  const page = searchParams.get('page');

  console.log(page, category);

  return (
    <div>useSearchParamsData - Category: {category}, Page: {page}</div>
  )
}

export default SearchParamsData