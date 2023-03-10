// files
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout({ children }) {
  return (
    <div className="relative background text">
      <Navbar />
      <div className="flex flex-row min-h-screen h-full pb-20">
        <Sidebar />
        <main className="px-8 w-full ">{children}</main>
      </div>
    </div>
  );
}
