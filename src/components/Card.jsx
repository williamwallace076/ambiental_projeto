export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-gray-100 border border-gray-400 rounded-lg p-4 ${className}`}>
      {children}
    </div>
  );
}