export function Tabs({ todos, selectedTab, setSelectedTab }) {
  const tabs = ["All", "Open", "Completed"];

  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const numOfTodos =
          tab === "All"
            ? todos.length
            : tab === "Open"
            ? todos.filter((val) => !val.complete).length
            : todos.filter((val) => val.complete).length;
        return (
          <button
            key={tabIndex}
            onClick={() => setSelectedTab(tab)}
            className="tab-button"
          >
            <h4
              className={`tab-button ${
                tab === selectedTab ? "tab-selected" : ""
              }`}
            >
              {tab} <span>({numOfTodos})</span>
            </h4>
          </button>
        );
      })}
      <hr />
    </nav>
  );
}
