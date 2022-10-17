import "./App.css";

function App() {
  return (
    <div className='App'>
      <div class='form-control'>
        <label for='email'>Email</label>
        <input type='email' placeholder='Enter your email' class='input' />
        <label for='password'>Password</label>
        <input
          type='password'
          placeholder='Enter your password'
          class='input'
        />
        <div class='flex-align-center'>
          <button class='btn btn-primary mt-1'>Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default App;
