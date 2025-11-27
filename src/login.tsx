



// import { useState } from "react";
// import "./App.css";
// import { GoogleOAuthProvider, GoogleLogin, CredentialResponse } from "@react-oauth/google";

// import axios from "axios";

// export default function Login() {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   // === Regular login ===
//   const handleLogin = async () => {
//     const api = axios.create({
//       baseURL: "http://localhost:4001",
//       headers: { "Content-Type": "application/json" },
//     });

//     try {
//       const { data } = await api.post("/login", { username, password });

//       if (data.success) {
//         localStorage.setItem("fullname", data.fullname);
//         setMessage("Login successful!");
//         window.location.href = "/dashboard";
//       } else {
//         setMessage(data.message);
//       }
//     } catch (error) {
//       console.error("Login error:", error);
//       setMessage("Server error");
//     }
//   };

//   // // === Google login ===
//   // const handleGoogleLogin = async (credentialResponse: CredentialResponse) => {
//   //   try {
//   //     if (!credentialResponse.credential) {
//   //       setMessage("No Google credentials found");
//   //       return;
//   //     }

//   //     const res = await axios.post("http://localhost:4000/google-login", {
//   //       token: credentialResponse.credential,
//   //     });

//   //     if (res.data.success) {
//   //       localStorage.setItem("fullname", res.data.fullname);
//   //       setMessage("Google login successful!");
//   //       window.location.href = "/dashboard";
//   //     } else {
//   //       setMessage(res.data.message);
//   //     }
//   //   } catch (err) {
//   //     console.error("Google login error:", err);
//   //     setMessage("Google login failed");
//   //   }
//   // };

//   return (
//     <GoogleOAuthProvider clientId="1016616466017-03fsmris44cv89qnelaed641obt80dmh.apps.googleusercontent.com">
//       <div className="login">
//         <h2>Login Using React + TypeScript + Express + MySQL</h2>

//         {/* Regular login */}
//         <input
//           type="text"
//           placeholder="Username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//         <br />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <br />
//         <button onClick={handleLogin}>Login</button>

//         <hr />

//         {/* Google login option */}
//         {/* <h3>Or login with Google</h3>
//         <GoogleLogin
//           onSuccess={handleGoogleLogin}
//           onError={() => setMessage("Google login failed")}
//         />

//         <p>{message}</p> */}
//       </div>
//     </GoogleOAuthProvider>

//   );
// }








import { useState } from "react";
import "./App.css";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  // Define the expected response type
  interface LoginResponse {
    success: boolean;
    fullname?: string;
    message?: string;
  }

  // === Regular login ===
  const handleLogin = async () => {
    const api = axios.create({
      baseURL: "http://localhost:4001",
      headers: { "Content-Type": "application/json" },
    });

    try {
      const { data } = await api.post<LoginResponse>("/login", { username, password });

      if (data.success) {
        localStorage.setItem("fullname", data.fullname || "");
        setMessage("Login successful!");
        window.location.href = "/dashboard";
      } else {
        setMessage(data.message || "Invalid credentials");
      }
    } catch (error) {
      console.error("Login error:", error);
      setMessage("Server error. Please try again later.");
    }
  };

  // return (
  //   <div className="login-container">
  //     <h2>Login</h2>

  //     <input
  //       type="text"
  //       placeholder="Username"
  //       value={username}
  //       onChange={(e) => setUsername(e.target.value)}
  //     /><br />

  //     <input
  //       type="password"
  //       placeholder="Password"
  //       value={password}
  //       onChange={(e) => setPassword(e.target.value)}
  //     /><br />

  //     <button onClick={handleLogin}>Login</button>

  //     <p>{message}</p>
  //   </div>
  // );




  return (
  <div className="login-wrapper">
    <div className="login-box">
      <h2 className="login-title">Invent Inc.</h2>
      <p className="login-subtitle">Please log in to continue</p>

      <div className="input-group">
        <label>Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div className="input-group">
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button className="login-button" onClick={handleLogin}>
        Sign In
      </button>

      <p className="login-message">{message}</p>
    </div>
  </div>
);

}
