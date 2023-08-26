import twoFA from "../styles/Chat.module.css";


function App() 
{

  


 
  return (
    <div className={twoFA.container}>
			<div className={twoFA.loginContainner}>
            <form className={twoFA.loginForm}>
					
					{/* <img src="/42logo-white.svg" alt="42logo" /> */}
					{/* <label htmlFor="twoFAuth"> Enter Two-factor authentication code </label> */}
					<input
						type="text"
						name="twoFAuth"
						id="twoFAuth"
						placeholder="Enter Two-factor authentication"
						
						
					/>
					<button type="submit" >
						submit
					</button>
				</form>
			</div>
		</div>
 
  );
}

export default App;
