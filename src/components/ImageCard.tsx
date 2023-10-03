import {PropsWithChildren} from 'react';
import { Col, ButtonGroup, Button } from 'react-bootstrap';
import {FiMoreVertical} from 'react-icons/fi'
import { AiOutlineEdit, AiOutlineEye, AiOutlineDelete } from "react-icons/ai";

interface ImageCardProps extends PropsWithChildren {
    fileName: string
}

export default function  ImageCard(props: ImageCardProps) {
    const index : number = Math.random() * 100;
    return (
        <Col>
            <div className='image-card m-1'>
                <img src={`https://picsum.photos/800/600?random=${index}`} alt="" />
                <div className='context-menu-top'>
                    <Button variant="outline-light" size="sm" onClick={() => console.log("Context")}>
                        <FiMoreVertical/>
                    </Button>
                </div>
                <div className="context-menu-bottom">
                    <ButtonGroup>
                        <Button variant="outline-light" size="sm" onClick={() => console.log("Edit")}>
                            <AiOutlineEdit/>
                        </Button>
                        <Button variant="outline-light" size="sm" onClick={() => console.log("View")}>
                            <AiOutlineEye/>
                        </Button>
                        <Button variant="outline-light" size="sm" onClick={() => console.log("Delete")}>
                            <AiOutlineDelete/>
                        </Button>
                    </ButtonGroup>
                </div>
            </div>
        </Col>
    )
}