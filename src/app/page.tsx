import Header from "@/components/Header";
import Balance from "@/components/Balance";
import TransactionForm from "@/components/Transactions/TransactionForm";
import TransactionList from "@/components/Transactions/TransactionList";

const Home = () => {
  return (
    <main className="p-4" >
      <Header />
      <Balance />
      <TransactionForm />
      <TransactionList />
      
      <h1>Hello world</h1>
    </main>
  );
};

export default Home;
