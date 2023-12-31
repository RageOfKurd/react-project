import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <main
      style={{
        display: "flex",
        gap: 20,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        image="https://images.unsplash.com/photo-1652278856202-3eb2aa54c80d?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="Ara Hama"
      />
      <Card image="https://images.unsplash.com/photo-1652278857150-09c178f0efaa?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <Card
        image="https://images.unsplash.com/photo-1572155297631-91d967cea088?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        name="Sara Tofiq"
      />
    </main>
  );
}

export default App;
