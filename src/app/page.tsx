import Header from "@/components/Header";
import Balance from "@/components/Balance";
import TransactionForm from "@/components/TransactionForm";

const Home = () => {
  return (
    <main>
      <Header />
      <Balance />
      <TransactionForm />
      <h1>Hello world</h1>
    </main>
  );
};

export default Home;
