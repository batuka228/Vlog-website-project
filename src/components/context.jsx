import { createContext, useState, useEffect } from "react";

export const FirstContext = createContext([]);
export const FirstContextProvider = ({ children }) => {
  const [articlesTrending, setarticlesTrending] = useState([]);
  const [articles, setarticles] = useState([]);
  const [Top, setTop] = useState([]);
  const [plusData, setPlusData] = useState(9);
  const [searchArticles, setSearchArticles] = useState(articles);
  const PlusData = () => {
    setPlusData(plusData + 3);
  };

  const fetchData = async () => {
    try {
      const res1 = await fetch(
        "https://dev.to/api/articles?state=rising&per_page=4"
      );
      const res2 = await fetch(
        `https://dev.to/api/articles?per_page=${plusData}`
      );
      const res3 = await fetch("https://dev.to/api/articles?top=1&per_page=5");
      const data1 = await res1.json();
      const data2 = await res2.json();
      const data3 = await res3.json();
      setarticlesTrending(data1);
      setarticles(data2);
      setTop(data3);
      setSearchArticles(data2);
    } catch (error) {
      console.error();
    }
  };

  useEffect(() => {
    fetchData();
  }, [plusData]);
  const handleSearch = (event) => {
    const filteredArticles = articles.filter((articles) =>
      articles.title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setSearchArticles(filteredArticles);
  };
  return (
    <FirstContext.Provider
      value={{
        articlesTrending,
        articles,
        Top,
        PlusData,
        handleSearch,
        searchArticles,
      }}
    >
      {children}
    </FirstContext.Provider>
  );
};
