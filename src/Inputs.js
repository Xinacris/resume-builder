function Inputs(maxLength, myName, onChange) {
  return (
    <input
      onChange={onChange}
      name={myName}
      value={myName}
      maxLength={maxLength}
    />
  );
}

export default Inputs;
