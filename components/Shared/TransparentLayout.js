import TransparentHeader from "./TransparentHeader";
import Footer from "./Footer";
import ReadyToTalk from "./ReadyToTalk";

export default function TransparentLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <TransparentHeader />
      <main className="flex-grow">{children}</main>
      <ReadyToTalk />
      <Footer />
    </div>
  );
}
