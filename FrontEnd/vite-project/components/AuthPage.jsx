const AuthPage = (props) => {
    const onSubmit = (e) => {
      e.preventDefault();
      const { value } = e.target.username;  // Access the input field by name
  
      fetch('http://localhost:4000/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username: value })
      })
      .then(response => response.json())  
      .then(data => props.onAuth({ ...data, secret: value }))  
      .catch(e => {
        console.log('Error:', e);
        alert('There was an issue with authentication, please try again.');
      });
    };
  
    return (
      <div className="background">
        <form onSubmit={onSubmit} className="form-card">
          <div className="form-title">Welcome 👋</div>
          <div className="form-subtitle">Set a username to get started</div>
  
          <div className="auth">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" required />
            <button className="auth-button" type="submit">Enter</button>
          </div>
        </form>
      </div>
    );
  };
  
  export default AuthPage;
  