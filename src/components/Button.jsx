
const Button = ({ children, onClick, variant = 'primary', size = 'md', className = '', ...props }) => {
    const baseClasses = "font-medium rounded-xl transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2";

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-5 py-2.5 text-sm",
        lg: "px-6 py-3 text-base",
    };

    const variants = {
        primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 border border-transparent",
        secondary: "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 shadow-sm hover:shadow-md",
        outline: "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
        ghost: "bg-transparent hover:bg-gray-100 text-gray-600 hover:text-gray-900",
        danger: "bg-red-50 text-red-600 hover:bg-red-100 border border-red-200",
        glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 shadow-lg",
    };

    return (
        <button
            onClick={onClick}
            className={`${baseClasses} ${sizes[size]} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
