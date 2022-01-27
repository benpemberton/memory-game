export default function Card(props) {
  return (
    <div className="card">
      <div className="img-wrap">
        <img
          src={props.image}
          onClick={() => props.handleClick(props.name)}
        ></img>
      </div>
    </div>
  );
}
