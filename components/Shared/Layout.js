import Header from "./Header";
import Footer from "./Footer";
import ReadyToTalk from "./ReadyToTalk";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">{children}</main>
      <ReadyToTalk />
      <Footer />
    </div>
  );
}
