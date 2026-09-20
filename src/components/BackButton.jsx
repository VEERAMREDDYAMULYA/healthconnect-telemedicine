import { ArrowLeft } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function BackButton({ fallback = '/' }) {
    const navigate = useNavigate();
    const location = useLocation();

    const goBack = () => {
        if (window.history.length > 1 && location.key !== 'default') navigate(-1);
        else navigate(fallback);
    };

    return <button type="button" className="back-button" onClick={goBack}><ArrowLeft size={16} /> Back</button>;
}
