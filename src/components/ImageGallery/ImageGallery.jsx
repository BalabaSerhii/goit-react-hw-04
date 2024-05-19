export default function ImageGallery({ img }) {
  return (
    <ul>
      <li>
        <ImageCard img = {img}/>
      </li>
    </ul>
  );
}
