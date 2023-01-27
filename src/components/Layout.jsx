// files
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="relative">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <main className="px-8 w-full bg-green-500">{children}</main>
      </div>
    </div>
  );
}
