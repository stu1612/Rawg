export default function CardsLayout({ children }) {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {children}
    </div>
  );
}
