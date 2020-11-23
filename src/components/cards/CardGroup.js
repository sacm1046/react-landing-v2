import React from 'react';
import Card from './Card';

const CardGroup = () => {
    return (
        <div className="bg-danger py-5" id="cards">

            <div className="container">
                <h1 className="text-light text-center mb-5">Cards</h1>
                <div className="row justify-content-center">

                    <Card
                        src="https://picsum.photos/id/227/200/200"
                        title="Tren"
                        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, voluptate?1"
                        colorButton="success"
                    />

                    <Card
                        src="https://picsum.photos/id/250/200/200"
                        title="Cámara"
                        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, voluptate?3"
                        colorButton="danger"
                    />

                    <Card
                        src="https://picsum.photos/id/200/200/200"
                        title="Llama"
                        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda, voluptate?2"
                        colorButton="dark"
                    />

                </div>

            </div>
        </div>

    )
}

export default CardGroup;
