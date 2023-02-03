function ImageShow({ image, title }) {
    return (
        <div className="">
            <h1 className="font-bold text-md capitalize p-3">{title}</h1>
        <img src={image} alt={title}/>
        </div>
    );
}

export default ImageShow;