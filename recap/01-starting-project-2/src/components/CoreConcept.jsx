export default function CoreConcept({ image, title, description }) {
  return (
    <li>
      <h2>{title}</h2>
      <img src={image} alt="component" />
      <p>{description}</p>
    </li>
  );
}
