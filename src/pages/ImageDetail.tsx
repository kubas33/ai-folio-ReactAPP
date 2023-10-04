import { Card, CardGroup, ListGroup } from "react-bootstrap";
import ImageCard from "../components/ImageCard";

export default function ImageDetail() {
  return (
    <section className="image-details my-auto">
      <CardGroup>
        <Card>
          <div className="my-auto">
            <ImageCard fileName="image.jpeg" />
          </div>
        </Card>
        <Card>
          <div className="my-auto">
            <Card.Title className={"px-2"} as={"h5"}>
              Image metas
            </Card.Title>
            <ListGroup variant="flush">
              <ListGroup.Item>image_id</ListGroup.Item>
              <ListGroup.Item>ai_image</ListGroup.Item>
              <ListGroup.Item>ai_model</ListGroup.Item>
              <ListGroup.Item>ai_model_version</ListGroup.Item>
              <ListGroup.Item>positive_prompts</ListGroup.Item>
              <ListGroup.Item>negative_prompts</ListGroup.Item>
              <ListGroup.Item>sampler</ListGroup.Item>
              <ListGroup.Item>cgf_scale</ListGroup.Item>
              <ListGroup.Item>seed</ListGroup.Item>
              <ListGroup.Item>created_at</ListGroup.Item>
            </ListGroup>
          </div>
        </Card>
      </CardGroup>
    </section>
  );
}
