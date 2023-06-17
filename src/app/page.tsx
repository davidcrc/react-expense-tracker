import Header from "@/components/Header";
import Balance from "@/components/Balance";
import TransactionForm from "@/components/Transactions/TransactionForm";
import TransactionList from "@/components/Transactions/TransactionList";
import IncomeExpenses from "@/components/IncomeExpenses";

const Home = () => {
  return (
    <main className="flex flex-col p-4" >
      <Header />
      <IncomeExpenses />
      <Balance />
      <TransactionForm />
      <TransactionList />
      
      <h1>Hello world</h1>
    </main>
  );
};

export default Home;
