import { useState } from "react";

const ControlledField = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("first");
  };

  const handlePasswordOnChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);

    if (password.length < 6) {
      setError("password must be 6 or longer");
    } else {
      setError("");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email..." /> <br />
        <input
          type="password"
          onChange={handlePasswordOnChange}
          defaultValue={password}
          name="password"
          placeholder="Password..."
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p className="text-red-500">{error}</p>
    </div>
  );
};

export default ControlledField;
