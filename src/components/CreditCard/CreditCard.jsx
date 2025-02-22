import './CreditCard.css';
import visaImg from '../../assets/images/visa.png';
import masterImg from '../../assets/images/master-logo.png';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  const bankImg = () => { //Esto podría ser solo una constante, con un ternario dentro.
    if (type === 'Visa') {
      return visaImg
    } else {
      return masterImg
    }
  };

  const cardNumber = '•••• •••• •••• ' + number.slice(12); // O se puede hacer number.slice(-4)

  const expirationDate = expirationMonth + '/' + expirationYear.toString().slice(2);

  const creditCardStyle = {
    color: color, // Esto se puede resumir a 'color'
    backgroundColor: bgColor,
  };

  return (
    <div style={creditCardStyle} className="CreditCard-container">
      <span className="Bank-img">
        <img className='Card-img' src={bankImg()} alt="CreditCard bank"></img>
      </span>
      <p className="Card-number">{cardNumber}</p>
      <div className="Info-container">
        <p>Expires {expirationDate} </p>
        <p>{bank}</p>
        <p className="Owner">{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
