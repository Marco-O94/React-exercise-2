import ImageShow from "./ImageShow";

function ImageList({images}) {
    return (
        <div>
        <h1>Image List: {images.length}</h1>
        <div className="grid grid-cols-4 gap-5 p-8">
        {images.map((image,index) => <ImageShow key={image.id} image={image.urls.regular} title={image.alt_description} /> )}
        </div>
        </div>
        );
}

export default ImageList;