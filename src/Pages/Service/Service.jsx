import PropTypes from 'prop-types';

const Service = ({ service }) => {
  const { image, name, description } = service || {};
  return (
    <div data-aos="zoom-in" className="card  bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end"></div>
      </div>
    </div>
  );
};
Service.propTypes = {
    service: PropTypes.object.isRequired,
}
export default Service;
