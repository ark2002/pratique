import { useState } from "react";

const BrandFilter = () => {
  const brands1 = [
    { id: "0a", brandName: "puma" },
    { id: "0b", brandName: "adiddas" },
    { id: "0c", brandName: "wildcraft" },
    { id: "0d", brandName: "levis" },
    { id: "0e", brandName: "celio" }
  ];
  const [list, setList] = useState(brands1);

  const brandFilter = (e) => {
    const searchWord = e.target.value;
    searchWord
      ? setList(
          brands1.filter((brand) =>
            brand.brandName.indexOf(searchWord.toLowerCase()) !== -1
              ? true
              : false
          )
        )
      : setList(brands1);
  };

  return (
    <div className="brandFilter">
      <input className="search__input" onChange={(e) => brandFilter(e)} />
      <ul>
        {list.map((brand) => (
          <li key={brand.id}>{brand.brandName}</li>
        ))}
      </ul>
    </div>
  );
};

export { BrandFilter };
