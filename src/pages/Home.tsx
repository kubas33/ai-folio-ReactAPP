import { Fragment, useEffect, useState } from "react";
import ImageCard from "../components/ImageCard";
import { Container, Row } from "react-bootstrap";
import ImagesCarousel from "../components/ImagesCarousel";
import CategoryProps from "../interfaces/CategoryProps";

interface LoadedImage {
  fileName: string;
}

async function getData(dataFile: string) {
  try {
    console.log("Fetching data");
    const response = await fetch(`./src/data/${dataFile}.json`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }); // Zakładając, że plik jest w tym samym katalogu co komponent
    if (!response.ok) {
      throw new Error("Błąd pobierania danych");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Błąd pobierania danych:", error);
    throw error;
  }
}

export default function Home() {
  const [images, setImages] = useState<LoadedImage[]>([]);
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const categoriesData = await getData("categories");
        setCategories(categoriesData);
        console.log({ categoriesData });
      } catch (error) {
        console.log({ error });
      }
    }
    fetchData();
    setImages((prevState) => [
      ...prevState,
      ...[
        {
          fileName: "1.jpg",
        },
        {
          fileName: "2.jpg",
        },
        {
          fileName: "3.jpg",
        },
        {
          fileName: "4.jpg",
        },
        {
          fileName: "5.jpg",
        },
        {
          fileName: "6.jpg",
        },
        {
          fileName: "7.jpg",
        },
        {
          fileName: "8.jpg",
        },
        {
          fileName: "9.jpg",
        },
        {
          fileName: "10.jpg",
        },
        {
          fileName: "11.jpg",
        },
        {
          fileName: "12.jpg",
        },
      ],
    ]);
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h1>AiFolio</h1>
        </div>
      </div>
      <Container>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
          {images.map((image) => (
            <ImageCard fileName={image.fileName} key={image.fileName} />
          ))}
        </div>
      </Container>
      <hr />
      <section className="categories-preview">
        {categories.map((category) => (
          <Fragment key={category.slug}>
            <h3>{category.name}</h3>
            <ImagesCarousel />
            <hr />
          </Fragment>
        ))}
      </section>
    </div>
  );
}
