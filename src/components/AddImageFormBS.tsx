import { useState } from "react";
import {
  Col,
  Container,
  FloatingLabel,
  Form,
  FormGroup,
  Row,
  Image,
  Button,
  Stack,
} from "react-bootstrap";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPEG", "PNG"];

export default function AddImageFormBS() {
  const [file, setFile] = useState<File | null>(null);
  const handleChange = (selectedFile: File | null) => {
    setFile(selectedFile);
    console.log(selectedFile);
  };
  return (
    <Container>
      <Form className="add-image-form">
        <Row xs={1} md={2} className={"p-3"}>
          <FormGroup as={Col} className="p-4" controlId="addImage.addFile">
            {/* <Form.Label>Select file</Form.Label>
            <Form.Control type="file" size="lg" /> */}
            <FileUploader
              multiple={false}
              handleChange={handleChange}
              name="file"
              types={fileTypes}
            />
            <p className="mt-3 px-4">
              {file ? `File name: ${file.name}` : "no file uploaded yet"}
            </p>
          </FormGroup>
          <Col className="bg-body-tertiary p-4">
            {file ? (
              <Image src={URL.createObjectURL(file)} rounded fluid />
            ) : (
              <Image
                src="https://placehold.co/600x400?text=File+preview"
                rounded
                fluid
              />
            )}
          </Col>
        </Row>
        <Row className="g-2 mb-3" xs={1} sm={2}>
          <Col>
            <FloatingLabel
              className="mb-3"
              controlId="floatingSelect"
              label="Select AI Model"
            >
              <Form.Select aria-label="Select AI Model">
                <option value="dalle_2">DALLE-2</option>
                <option value="midjourney">Midjourney</option>
                <option value="stable_diffusion">Stable Diffusion</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingSelect.sampler"
              label="Select sampler"
            >
              <Form.Select aria-label="Select sampler">
                <option value="sampler_1">sampler 1</option>
                <option value="sampler_2">sampler 2</option>
                <option value="sampler_3">sampler 3</option>
              </Form.Select>
            </FloatingLabel>
          </Col>
        </Row>
        {/* <Row xs={1} sm={2} md={3}>*/}
        <Row>
          <FormGroup
            as={Col}
            className="mb-3 col-12 col-sm-6 col-md-4"
            controlId="addImage.cgfScale"
          >
            <Form.Label>CGF Scale</Form.Label>
            <Form.Range />
          </FormGroup>
          <Form.Group
            as={Col}
            className="mb-3 col-12 col-sm-6 col-md-4"
            controlId="addImage.steps"
          >
            <Form.Label>Steps</Form.Label>
            <Form.Control type="number" placeholder="Steps" />
          </Form.Group>
          <Form.Group
            as={Col}
            className="mb-3 col-12 col-md-4"
            controlId="addImage.seed"
          >
            <Form.Label>Seed</Form.Label>
            <Form.Control type="text" placeholder="Seed" />
          </Form.Group>
        </Row>
        <Row xs={1} md={2}>
          <Form.Group
            as={Col}
            className="mb-3"
            controlId="addImage.positivePrompt"
          >
            <Form.Label>Positive prompt</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Form.Group
            as={Col}
            className="mb-3"
            controlId="addImage.positivePrompt"
          >
            <Form.Label>Negative prompt</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Row>
        <Stack direction="horizontal">
          <Button variant="outline-primary" className="px-5" type="submit">
            Add
          </Button>
          <Button variant="outline-danger" className="ms-auto" type="button">
            Cancel
          </Button>
        </Stack>
      </Form>
    </Container>
  );
}
