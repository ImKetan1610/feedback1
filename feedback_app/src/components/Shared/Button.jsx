import PropTypes from 'prop-types'

function Button ({type, children, isDisabled, version}) {

    return (
        <button type="type" disabled={isDisabled} className = {`btn btn-${version}`}>
            {children}
        </button> 
    )
}

Button.defaultProps = {
    version: 'primary',
    type: 'button',
    isDisabled: false,
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    version: PropTypes.string,
    isDisabled: PropTypes.bool,
    type: PropTypes.string,
}


export default Button;