export default function Footer() {
    return (
        <footer className="mt-auto py-8 w-full text-center text-sm text-gray-600 border-t border-gray-200 bg-gray-50 flex flex-col items-center justify-center space-y-4">
            <p>© 2026 MedConnect – Virtual Healthcare System</p>
            <div className="space-y-1">
                <p className="font-semibold text-gray-700">Developed by:</p>
                <p className="flex flex-wrap justify-center items-center gap-2">
                    <span>2400032990 – T. Abhinav</span>
                    <span className="hidden sm:inline">|</span>
                    <span>2400030623 – M. Karthik</span>
                    <span className="hidden sm:inline">|</span>
                    <span>2400031891 – T. Pujitha</span>
                </p>
            </div>
            <p className="pt-2 text-gray-500">K L University – B.Tech Academic Project</p>
        </footer>
    );
}
