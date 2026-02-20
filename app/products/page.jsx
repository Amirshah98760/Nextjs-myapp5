import React from 'react'

const  Products = async ({searchParams}) => {
    // const searchParams = await props.searchParams;
    // console.log(searchParams);
const resolvedSearchParams  = await searchParams;

    const category = resolvedSearchParams?.category || "all";
    const sort = resolvedSearchParams?.sort || "asc";
    const page = resolvedSearchParams?.page || 1;

  return (
   <div>

    <h1>Products Page</h1>
    <p>Category: {category}</p>
    <p>Sort: {sort}</p>
    <p>Page: {page}</p>
   </div>
   
)
}

export default Products