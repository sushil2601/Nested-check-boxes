const Checkboxes = ({ data, checked, setChecked }) => {
  const handleChange = (e, node) => {
    setChecked((prev) => {
      const newState = { ...prev, [node.id]: e.target.checked };

      const updateChildren = (node) => {
        node.children?.forEach((child) => {
          newState[child.id] = e.target.checked;
          child.children && updateChildren(child);
        });
      };

      updateChildren(node);

      return newState;
    });
  };

  return (
    <div>
      {data.map((node) => (
        <div key={node.id} className="container">
          <input
            type="checkbox"
            checked={checked[node.id] || false}
            onChange={(e) => handleChange(e, node)}
          />
          <span>{node.name}</span>
          {node.children && (
            <Checkboxes
              data={node.children}
              checked={checked}
              setChecked={setChecked}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Checkboxes;
