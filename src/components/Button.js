import PropTypes from 'prop-types';

const Button = ({ onClick, color, text }) => {
	return (
		<button onClick={onClick} style={{ backgroundColor: color }} className="btn">
			{text}
		</button>
	);
};

Button.defaultProps = {
	color: 'steelblue'
};

Button.propTypes = {
	test: PropTypes.string,
	color: PropTypes.string,
	onClick: PropTypes.func
};

export default Button;
