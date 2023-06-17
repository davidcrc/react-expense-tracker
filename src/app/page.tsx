import Header from "@/components/Header";
import Balance from "@/components/Balance";
import TransactionForm from "@/components/Transactions/TransactionForm";
import TransactionList from "@/components/Transactions/TransactionList";
import IncomeExpenses from "@/components/IncomeExpenses";
import ExpenseChart from "@/components/ExpenseChart";

const Home = () => {
  return (
    <main className="flex flex-col p-4 bg-zinc-900 text-white h-screen justify-center items-center ">
      <div className="flex w-fit max-w-5xl overflow-auto">
        <div className="flex flex-col bg-zinc-800 p-10 rounded-lg gap-4 md:flex-row overflow-auto">
          <div>
            {/* <Header /> */}
            <h1 className="text-4xl font-bold ">Expense Tracker</h1>
            <IncomeExpenses />
            <Balance />
            <TransactionForm />
          </div>
          <div className="flex flex-col flex-1 w-full">
            <ExpenseChart />
            <TransactionList />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
