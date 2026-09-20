
const Card = ({ children, className = '', hoverEffect = false, ...props }) => {
    return (
        <div
            className={`
        bg-white rounded-2xl border border-gray-100 shadow-sm
        ${hoverEffect ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : ''}
        ${className}
      `}
            {...props}
        >
            {children}
        </div>
    );
};

export default Card;
