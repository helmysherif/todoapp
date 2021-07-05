import './App.css';
import TodoList from './views/todoList';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <header>
        <Header />
        <TodoList />
      </header>
    </div>
  );
}
export default App;