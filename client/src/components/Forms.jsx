export default function Forms() {
  return (
    <main className="forms-container">
      <div className="singup">
        <h3>Sign-up</h3>
        <form action="">
          <div className="form-control"> 
            <label for="name">Full Name</label>
            <input type="text" name="name" id="name" placeholder="Full name"/>
          </div>
          <div className="form-control"> 
            <label for="email">Email</label>
            <input type="text" name="email" id="email" placeholder="Email"/>
          </div>
          <div className="form-row">
          <div className="form-control"> 
            <label for="password">Password</label>
            <input type="text" name="password" id="password" placeholder="Password"/>
          </div>
          <div className="form-control"> 
            <label for="confirm-password">Confirm-password</label>
            <input type="text" name="confirm-password" id="confirm-password" placeholder="Confirm-password"/>
          </div>
          </div>
          <div className="form-control"> 
            <button>Submit</button>
          </div>
        </form>
      </div>
      <div className="signin">
        <h3>Sign-in</h3>
        <form action="">
        <div className="form-control"> 
            <label for="email">Email</label>
            <input type="text" name="email" id="email" placeholder="Email"/>
          </div>
          <div className="form-control"> 
            <label for="password">Password</label>
            <input type="text" name="password" id="password" placeholder="password"/>
          </div>
          <div className="form-control"> 
            <button>Signin</button>
          </div>
          <i style={{fontWeight: "bold", fontSize: "12px"}}>If you have trouble signing in, please sign-up first!</i>
        </form>
      </div>
    </main>
  );
}
