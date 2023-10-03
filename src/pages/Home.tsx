import { useEffect, useState } from "react";
import ImageCard from '../components/ImageCard';
import {Container, Row} from 'react-bootstrap';

interface LoadedImage {
    fileName: string,
  }

export default function Home() {

    const [images, setImages] = useState<LoadedImage[]>([]);

    useEffect(() => {
      setImages((prevState) => [...prevState, ...[
        {
          fileName: '1.jpg'
        },
        {
          fileName: '2.jpg'
        },
        {
          fileName: '3.jpg'
        },
        {
          fileName: '4.jpg'
        },
        {
          fileName: '5.jpg'
        },
        {
          fileName: '6.jpg'
        },
        {
            fileName: '7.jpg'
          },
          {
            fileName: '8.jpg'
          },
          {
            fileName: '9.jpg'
          },
      ]])
    }, [])

    return(
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h1>AiFolio</h1>
                </div>
            </div>
            <Container>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                    {images.map(image => <ImageCard fileName={image.fileName}/>)}
                </div>

            </Container>
      </div>
    )
}