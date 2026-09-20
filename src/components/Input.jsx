
const Input = ({ label, type = 'text', placeholder, value, onChange, className = '', error, ...props }) => {
    return (
        <div className={`w-full ${className}`}>
            {label && (
                <label className="block text-sm font-medium text-gray-700 mb-1.5 ml-1">
                    {label}
                </label>
            )}
            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`
          w-full px-4 py-3 rounded-xl border border-gray-200 
          bg-gray-50/50 focus:bg-white
          text-gray-900 placeholder-gray-400
          transition-all duration-200
          outline-none focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500
          ${error ? 'border-red-500 focus:ring-red-500/10 focus:border-red-500' : ''}
        `}
                {...props}
            />
            {error && <p className="mt-1 text-sm text-red-500 ml-1">{error}</p>}
        </div>
    );
};

export default Input;
