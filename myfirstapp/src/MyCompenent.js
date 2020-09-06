import React from 'react'
function ExampleComponent(){
    return(
<div className="card col-12 col-lg-4 login-card mt-2 hv-center">
      <form>
          <div className="form-group text-left">
          <label htmlFor="Email1">Email address</label>
          <input type="email" 
                 className="form-control" 
                 id="email" 
                 aria-describedby="emailHelp" 
                 placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">email</small>
          </div>
          <div className="form-group text-left">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input type="password" 
                  className="form-control" 
                  id="password" 
                  placeholder="Password"
              />
          </div>
          
          <button 
              type="submit" 
              className="btn btn-primary"
          >
              login
          </button>
      </form>
  </div>
 
        )

}

export default ExampleComponent