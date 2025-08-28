import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";

function ApplyLayout() {
  return (
    <div>
      <Header />
      <main>
        <h1>Content</h1>
      </main>
      <CartOverview />
    </div>
  );
}

export default ApplyLayout;
