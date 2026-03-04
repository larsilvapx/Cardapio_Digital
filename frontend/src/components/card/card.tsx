import './card.css'

interface CardProps {
  price: number;
  title: string;
  image: string;
}

export function Card({ price, title, image }: CardProps) {
  return (
    <div className="card">

      <div className="card-image">
        <img
          src={`http://localhost:8080/images/${image}`}
          alt={title}
        />
      </div>

      <div className="card-info">
        <h2>{title}</h2>
        <p className="price">
          <b>Valor:</b> R$ {price.toFixed(2)}
        </p>
      </div>

    </div>
  );
}