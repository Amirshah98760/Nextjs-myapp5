// import React from 'react'

// const  Products = async ({searchParams}) => {
//     // const searchParams = await props.searchParams;
//     // console.log(searchParams);
// const resolvedSearchParams  = await searchParams;

//     const category = resolvedSearchParams?.category || "all";
//     const sort = resolvedSearchParams?.sort || "asc";
//     const page = resolvedSearchParams?.page || 1;

//   return (
//    <div>

//     <h1>Products Page</h1>
//     <p>Category: {category}</p>
//     <p>Sort: {sort}</p>
//     <p>Page: {page}</p>
//    </div>
   
// )
// }

// export default Products




// Real World use case of search params in Next.js 13 app directory

const Products = async ({ searchParams }) => {

  const { category = "all", sort = "asc", page = 1 } = await searchParams;

  const res = await fetch(
    `https://dummyjson.com/products/category/${category}?limit=10&skip=${(page - 1) * 10}`,
    { cache: "no-store" }
  );

  const data = await res.json();
//   console.log(data)

  let products = data.products;

  // sort frontend (if API doesn't support)
  products = products.sort((a, b) => 
    sort === "asc" ? a.price - b.price : b.price - a.price
  );

  return (
    <div>
      <h1>Products</h1>

      {products.map(p => (
        <div key={p.id}>
          {p.title} - ${p.price}
        </div>
      ))}

    </div>
  );
};

export default Products