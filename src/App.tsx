// // // import React, { useState } from "react";
// // // import './App.css';


// // // // PasswordValidator.jsx
// // // // React component that requires the password to contain at least one
// // // // of these special symbols: - ^ ~ | § ¤ ¿ ß
// // // // Uses TailwindCSS for styling (no imports needed if your app already includes Tailwind).

// // // export default function PasswordValidator() {
// // //   const [password, setPassword] = useState("");
// // //   const [message, setMessage] = useState("");
// // //   const [visible, setVisible] = useState(false);

// // //   // Character set required (note: commas in your request are separators, not required characters)
// // //   // Regex: looks for at least one of: - ^ ~ | § ¤ ¿ ß
// // //   const specialRegex = /[-\^~|§¤¿ß]/;

// // //   const validate = (pw) => {
// // //     if (!pw) return { ok: false, reason: "Password is empty." };
// // //     if (!specialRegex.test(pw)) {
// // //       return {
// // //         ok: false,
// // //         reason: "Password must include the rare symbols!",
// // //       };
// // //     }
// // //     return { ok: true };
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     const result = validate(password);
// // //     if (!result.ok) {
// // //       setMessage(result.reason);
// // //       return;
// // //     }
// // //     setMessage("Password accepted ✅");
// // //     // Continue with login/signup flow here
// // //   };

// // //   const handleClear =()=>{
// // //     setPassword("");
// // //   }

// // //   return (


    
// // //     <div className= "container">
// // //       <h2 className="passwordvalidator" style={{fontFamily: "tahoma", textShadow: "4px 4px 4px rgba(0,0,0,0.3)",
// // //       textAlign: "center", alignItems: "center"
// // //       }}>Password validator</h2>

// // //       <form onSubmit={handleSubmit} className="form">
// // //         <label className="block">
// // //           <span className="enterpassword" style={{textShadow:"4px 4px 4px rgba(0,0,0,0.3)", fontSize: "20px",
// // //             marginBottom: "60px"
// // //            }}>Enter password</span>
        
// // //           <div className="yourpassword ">
// // //             <input  style={{padding: "10px"  , borderRadius: "25px", padding: "10px 30px", border: "1px solid #ccc", outline: "none", }}
// // //               type={visible ? "text" : "password"}
// // //               value={password}
// // //               onChange={(e) => setPassword(e.target.value)}
// // //               className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-opacity-100"
// // //               placeholder="Your password"
// // //             />
// // //             {/* <button
// // //               type="button"
// // //               onClick={() => setVisible((v) => !v)}
// // //               className="absolute right-2 top-2 text-xs opacity-70"
// // //             >
// // //               {visible ? "hide" : "show"}
// // //             </button> */}
// // //           </div>
// // //         </label>

// // //         <div className="text-sm">
// // //           <strong style={{color: "white", fontFamily: "tahoma" , fontSize: "12px", textShadow:"4px 4px 4px rgba(0,0,0,0.3)"}}>Required: include at least one of these symbols: -  ^  ~  |  §  ¤  ¿  ß</strong>
// // //           <div className="mt-1 inline-block px-2 py-1 bg-gray-100 rounded">
// // //             <code className="font-mono" style={{display: "none"}}>-  ^  ~  |  §  ¤  ¿  ß</code>
// // //           </div>
// // //         </div>

// // //         <button  style={{color : "white", fontWeight: "20%", }}
// // //           type="submit"
// // //           className= "buttonni"
// // //         >
// // //           Check
// // //         </button>
             
// // //         <button onClick={handleClear} style={{marginLeft: "15px"}}>
// // //           Clear
// // //         </button>

// // //         {message && (
// // //           <p 
// // //             className={`mt-2 text-center ${
// // //               message.includes("accepted") ? "text-green-600" : "text-red-600"
// // //             }`}
// // //           >
// // //             {message}
// // //           </p>
// // //         )}
// // //       </form>
// // //     </div>
// // //   );
// // // }







// // // import React, { useState } from "react";
// // // import './App.css';

// // // export default function PasswordValidator() {
// // //   const [password, setPassword] = useState("");
// // //   const [message, setMessage] = useState("");
// // //   const [visible, setVisible] = useState(false);

// // //   const specialRegex = /[-\^~|§¤¿ß]/;
// // //   const uppercaseRegex = /[A-Z]/;
// // //   const lowercaseRegex = /[a-z]/;

// // //   const validate = (pw) => {
// // //     if (!pw) return { ok: false, reason: "Password is empty." };
// // //     if (pw.length < 8) return { ok: false, reason: "Password must be at least 8 characters long." };
// // //     if (!uppercaseRegex.test(pw)) return { ok: false, reason: "Password must include at least one uppercase letter." };
// // //     if (!lowercaseRegex.test(pw)) return { ok: false, reason: "Password must include at least one lowercase letter." };
// // //     if (!specialRegex.test(pw)) return { ok: false, reason: "Password must include at least one rare symbol (- ^ ~ | § ¤ ¿ ß)." };
// // //     return { ok: true };
// // //   };

// // //   const handleSubmit = (e) => {
// // //     e.preventDefault();
// // //     const result = validate(password);
// // //     setMessage(result.ok ? "Password accepted ✅" : result.reason);
// // //   };

// // //   const handleClear = () => {
// // //     setPassword("");
// // //     setMessage("");
// // //   };

// // //   return (
// // //     <div
// // //       className="container"
// // //       style={{
// // //         display: "flex",
// // //         flexDirection: "column",
// // //         justifyContent: "center",
// // //         alignItems: "center",
// // //         minHeight: "50vh",
// // //         textAlign: "center",
// // //       }}
// // //     >
// // //       <h2
// // //         style={{
// // //           fontFamily: "tahoma",
// // //           textShadow: "4px 4px 4px rgba(0,0,0,0.3)",
// // //           marginBottom: "30px",
// // //         }}
// // //       >
// // //         Password Validator
// // //       </h2>

// // //       <form onSubmit={handleSubmit} className="form" style={{ width: "300px" }}>
// // //         <label className="block">
// // //           <span
// // //             style={{
// // //               textShadow: "4px 4px 4px rgba(0,0,0,0.3)",
// // //               fontSize: "20px",
// // //               display: "block",
// // //               marginBottom: "20px",
// // //             }}
// // //           >
// // //             Enter password
// // //           </span>
// // //           <input
// // //             style={{
// // //               width: "70%",
// // //               padding: "10px 30px",
// // //               borderRadius: "25px",
// // //               border: "2px solid #ccc",
// // //               outline: "none",
// // //               marginBottom: "20px",
// // //             }}
// // //             type={visible ? "text" : "password"}
// // //             value={password}
// // //             onChange={(e) => setPassword(e.target.value)}
// // //             placeholder="Your password"
// // //           />
// // //         </label>

// // //         <ul
// // //           style={{
// // //             color: "white",
// // //             fontFamily: "tahoma",
// // //             fontSize: "12px",
// // //             textShadow: "4px 4px 4px rgba(0,0,0,0.3)",
// // //             textAlign: "left",
// // //             marginBottom: "20px",
// // //             paddingLeft: "20px",
// // //           }}
// // //         >
// // //           <li> Minimum 8 characters</li>
// // //           <li> At least one uppercase letter</li>
// // //           <li> At least one lowercase letter</li>
// // //           <li> Include at least one rare symbol: - ^ ~ | § ¤ ¿ ß</li>
// // //         </ul>

// // //         <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "20px" }}>
// // //           <button type="submit" style={{ color: "white" }} className="buttonni">
// // //             Check
// // //           </button>
// // //           <button type="button" onClick={handleClear}>
// // //             Clear
// // //           </button>
// // //         </div>

// // //         {message && (
// // //           <p
// // //             style={{
// // //               color: message.includes("accepted") ? "green" : "red",
// // //               fontFamily: "tahoma",
// // //               fontWeight: "bold",
// // //               textShadow: "2px 2px 2px rgba(0,0,0,0.2)",
// // //             }}
// // //           >
// // //             {message}
// // //           </p>
// // //         )}
// // //       </form>
// // //     </div>
// // //   );
// // // }









// // import React, { useState } from "react";
// // import './App.css';

// // export default function PasswordValidator() {
// //   const [password, setPassword] = useState("");
// //   const [message, setMessage] = useState("");
// //   const [visible, setVisible] = useState(false);

// //   const specialRegex = /[-\^~|§¤¿ß]/;
// //   const uppercaseRegex = /[A-Z]/;
// //   const lowercaseRegex = /[a-z]/;

// //   // Individual checks
// //   const checks = {
// //     length: password.length >= 8,
// //     uppercase: uppercaseRegex.test(password),
// //     lowercase: lowercaseRegex.test(password),
// //     special: specialRegex.test(password),
// //   };

// //   const validate = (password) => {
// //     if (!password) return { ok: false, reason: "Password is empty." };
// //     if (!checks.length) return { ok: false, reason: "Password must be at least 8 characters long." };
// //     if (!checks.uppercase) return { ok: false, reason: "Password must include at least one uppercase letter." };
// //     if (!checks.lowercase) return { ok: false, reason: "Password must include at least one lowercase letter." };
// //     if (!checks.special) return { ok: false, reason: "Password must include at least one rare symbol (- ^ ~ | § ¤ ¿ ß)." };
// //     return { ok: true };
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const result = validate(password);
// //     setMessage(result.ok ? "Password accepted ✅" : result.reason);
// //   };

// //   const handleClear = () => {
// //     setPassword("");
// //     setMessage("");
// //   };

// //   return (
// //     <div
// //       className="container"
// //       style={{
// //         display: "flex",
// //         flexDirection: "column",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         minHeight: "50vh",
// //         textAlign: "center",
// //       }}
// //     >
// //       <h2
// //         style={{
// //           fontFamily: "tahoma",
// //           textShadow: "4px 4px 4px rgba(0,0,0,0.3)",
// //           marginBottom: "30px",
// //         }}
// //       >
// //         Password Validator
// //       </h2>

// //       <form onSubmit={handleSubmit} className="form" style={{ width: "300px" }}>
// //         <label className="block">
// //           <span
// //             style={{
// //               textShadow: "4px 4px 4px rgba(0,0,0,0.3)",
// //               fontSize: "20px",
// //               display: "block",
// //               marginBottom: "20px",
// //             }}
// //           >
// //             Enter password
// //           </span>
// //           <input
// //             style={{
// //               width: "70%",
// //               padding: "10px 30px",
// //               borderRadius: "25px",
// //               border: "2px solid #ccc",
// //               outline: "none",
// //               marginBottom: "20px",
// //             }}
// //             type={visible ? "text" : "password"}
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             placeholder="Your password"
// //           />
// //         </label>

// //         <ul
// //           style={{
// //             color: "white",
// //             fontFamily: "tahoma",
// //             fontSize: "12px",
// //             textShadow: "4px 4px 4px rgba(0,0,0,0.3)",
// //             textAlign: "left",
// //             marginBottom: "20px",
// //             paddingLeft: "20px",
// //           }}
// //         >
// //           <li style={{ color: checks.length ? "limegreen" : "red" }}>Minimum 8 characters</li>
// //           <li style={{ color: checks.uppercase ? "limegreen" : "red" }}>At least one uppercase letter</li>
// //           <li style={{ color: checks.lowercase ? "limegreen" : "red" }}>At least one lowercase letter</li>
// //           <li style={{ color: checks.special ? "limegreen" : "red" }}>Include at least one rare symbol: - ^ ~ | § ¤ ¿ ß</li>
// //         </ul>

// //         <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "20px" }}>
// //           <button type="submit" style={{ color: "white" }} className="buttonni">
// //             Check
// //           </button>
// //           <button type="button" onClick={handleClear}>
// //             Clear
// //           </button>
// //         </div>

// //         {message && (
// //           <p
// //             style={{
// //               color: message.includes("accepted") ? "green" : "red",
// //               fontFamily: "tahoma",
// //               fontWeight: "bold",
// //               textShadow: "2px 2px 2px rgba(0,0,0,0.2)",
// //             }}
// //           >
// //             {message}
// //           </p>
// //         )}
// //       </form>
// //     </div>
// //   );
// // }






// //............................


// // import React, { useState } from "react";
// // import './App.css';

// // export default function PasswordValidator() {
// //   const [password, setPassword] = useState("");
// //   const [message, setMessage] = useState("");
// //   const [visible, setVisible] = useState(false);

// //   // Special symbols allowed
// //   const specialsymbols = /[-\^~|§¤¿ß]/;
// //   const uppercasealphabet = /[A-Z]/;
// //   const lowercasealphabet = /[a-z]/;

// //   // Check conditions
// //   const checks = {
// //     length: password.length >= 8,
// //     uppercase: uppercasealphabet.test(password),
// //     lowercase: lowercasealphabet.test(password),
// //     specialStart: password.length > 0 && specialsymbols.test(password[0]),
// //     specialEnd: password.length > 0 && specialsymbols.test(password[password.length - 1]),
// //   };


// //   const validate = (pw)=> {
// //     if (!pw) return { ok: false, reason: "Password is empty." };
// //     if (!checks.length) return { ok: false, reason: "Password must be at least 8 characters long." };
// //     if (!checks.uppercase) return { ok: false, reason: "Password must include at least one uppercase letter." };
// //     if (!checks.lowercase) return { ok: false, reason: "Password must include at least one lowercase letter." };
// //     if (!checks.specialStart) return { ok: false, reason: "Password must start with a special symbol (- ^ ~ | § ¤ ¿ ß)." };
// //     if (!checks.specialEnd) return { ok: false, reason: "Password must end with a special symbol (- ^ ~ | § ¤ ¿ ß)." };
// //     return { ok: true, reason: ""};
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     const result = validate(password);
// //     setMessage(result.ok ? "Password accepted!" : result.reason);
// //   };

// //   const handleClear = () => {

// //     if(password == ""){
// //       alert("Please input your password");
// //     }else{
// //       setPassword("");
// //       setMessage("");
// //     }
    
// //   };

// //   return (
// //     <div
// //       className="container"
// //       style={{
// //         display: "flex",  
// //         flexDirection: "column",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         minHeight: "60vh",
// //         textAlign: "center",
// //         backgroundColor: "white"
// //       }}
// //     >
// //       <h2
// //         style={{
// //           fontFamily: "tahoma",
// //           textShadow: "4px 4px 4px rgba(0, 0, 0, 0.3)",
// //           marginBottom: "30px",
// //           color:"black"
// //         }}
// //       >
// //         Password Validator
// //       </h2>

// //       <form onSubmit={handleSubmit} className="form" style={{ width: "300px" }}>
// //         <label className="block">
// //           <span
// //             style={{
// //               textShadow: "4px 4px 4px rgba(126, 126, 126, 0.3)",
// //               fontSize: "20px",
// //               display: "block",
// //               marginBottom: "20px",
// //               color: "black"
// //             }}
// //           >
// //             Enter password
// //           </span>
// //           <input
// //             style={{
// //               width: "70%",
// //               padding: "10px 30px",
// //               borderRadius: "25px",
// //               border: "2px solid #000000ff",
// //               outline: "none",
// //               marginBottom: "20px",
// //             }}
// //             type={visible ? "text" : "password"}
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             placeholder="Your password"
// //           />
// //         </label>

// //         <ul
// //           style={{
// //             color: "white",
// //             fontFamily: "tahoma",
// //             fontSize: "12px",
// //             textShadow: "4px 4px 4px rgba(0,0,0,0.3)",
// //             textAlign: "left",
// //             marginBottom: "20px",
// //             paddingLeft: "20px",
// //           }}
// //         >
// //           <li style={{ color: checks.length ? "green" : "red" }}>Minimum 8 characters</li>
// //           <li style={{ color: checks.uppercase ? "green" : "red" }}>At least one uppercase letter</li>
// //           <li style={{ color: checks.lowercase ? "green" : "red" }}>At least one lowercase letter</li>
// //           <li style={{ color: checks.specialStart ? "green" : "red" }}>Must start with a special symbol: - ^ ~ | § ¤ ¿ ß</li>
// //           <li style={{ color: checks.specialEnd ? "green" : "red" }}>Must end with a special symbol: - ^ ~ | § ¤ ¿ ß</li>
// //         </ul>

// //         <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "20px" }}>
// //           <button type="submit" style={{ color: "white" }} className="buttonni">
// //             Check
// //           </button>
// //           <button type="button" onClick={handleClear}>
// //             Clear
// //           </button>
// //         </div>

// //         {message && (
// //           <p
// //             style={{
// //               color: message.includes("accepted") ? "green" : "red",
// //               fontFamily: "tahoma",
// //               fontWeight: "bold",
// //               textShadow: "2px 2px 2px rgba(0,0,0,0.2)",
// //             }}
// //           >
// //             {message}
// //           </p>
// //         )}
// //       </form>
// //     </div>
// //   );
// // }















// //...........................






















// import React, { useState } from "react";
// import './App.css';

// export default function PasswordValidator() {
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [visible, setVisible] = useState(false);



//   const specialsymbols = /[-\^~|§¤¿ß/]/;
//   const uppercasealphabet = /[A-Z]/;
//   const lowercasealphabet = /[a-z]/;
//   const numberdigit = /[0-9]/;
//   const consecutiveNumbers = /(012|123|234|345|456|567|678|789|890)/;


//   const checks = {
//     length: password.length >= 8,
//     uppercase: uppercasealphabet.test(password),
//     number: numberdigit.test(password),
//     noConsecutiveNumbers: !consecutiveNumbers.test(password),
//     lowercase: lowercasealphabet.test(password),
//     specialStart: password.length > 0 && specialsymbols.test(password[0]),
//     specialEnd: password.length > 0 && specialsymbols.test(password[password.length -1]),
//   };


// interface ValidationResult {
//   ok: boolean;
//   reason: string; // always a string (never undefined)
// }


//   const validate = (pw : string): ValidationResult => {
//     if (!pw) return { ok: false, reason: "Password is empty." };
//     if (!checks.length) return { ok: false, reason: "Password must be at least 8 characters long." };
//     if (!checks.uppercase) return { ok: false, reason: "Password must include at least one uppercase letter." };
//     if (!checks.lowercase) return { ok: false, reason: "Password must include at least one lowercase letter." };
//     if (!checks.specialStart) return { ok: false, reason: "Password must start with a special symbol (- ^ ~ | § ¤ ¿ ß)." };
//     if (!checks.specialEnd) return { ok: false, reason: "Password must end with a special symbol (- ^ ~ | § ¤ ¿ ß)." };
//     if (!checks.number) return { ok: false, reason: "Password must include at least one number." }; 
//     if (!checks.noConsecutiveNumbers) return { ok: false, reason: "Password must not contain consecutive numbers (e.g., 123, 456)." };
//     return { ok: true, reason: ""};
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const result = validate(password);
//     setMessage(result.ok ? "Password accepted!" : result.reason);
//   };

//   const handleClear = () => {

//     if(password == ""){
//       alert("Please input your password");
//     }else{
//       setPassword("");
//       setMessage("");
//     }
    
//   };

//   return (
//     <div
//       className="container"
//       style={{
//         display: "flex",  
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "80vh",
//         textAlign: "center",
//         backgroundColor: "white"
//       }}
//     >
//       <h2
//         style={{
//           fontFamily: "tahoma",
//           textShadow: "4px 4px 4px rgba(0, 0, 0, 0.3)",
//           marginBottom: "30px",
//           color:"black"
//         }}
//       >
//         Password Validator
//       </h2>

//       <form onSubmit={handleSubmit} className="form" style={{ width: "300px" }}>
//         <label className="block">
//           <span
//             style={{
//               textShadow: "4px 4px 4px rgba(126, 126, 126, 0.3)",
//               fontSize: "20px",
//               display: "block",
//               marginBottom: "20px",
//               color: "black"
//             }}
//           >
//             Enter password
//           </span>
//           <input
//             style={{
//               width: "70%",
//               padding: "10px 30px",
//               borderRadius: "25px",
//               border: "2px solid #000000ff",
//               outline: "none",
//               marginBottom: "20px",
//             }}
//             type={visible ? "text" : "password"}
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Your password"
//           />
//         </label>

//         <ul
//           style={{
//             color: "white",
//             fontFamily: "tahoma",
//             fontSize: "12px",
//             textShadow: "4px 4px 4px rgba(0,0,0,0.3)",
//             textAlign: "left",
//             marginBottom: "20px",
//             paddingLeft: "20px",
//           }}
//         >
//           <li style={{ color: checks.length ? "green" : "red" }}>Minimum 8 characters</li>
//           <li style={{ color: checks.uppercase ? "green" : "red" }}>At least one uppercase letter</li>
//           <li style={{ color: checks.lowercase ? "green" : "red" }}>At least one lowercase letter</li>
//           <li style={{ color: checks.specialStart ? "green" : "red" }}>Must start with a special symbol: - ^ ~ | § ¤ ¿ ß</li>
//           <li style={{ color: checks.specialEnd ? "green" : "red" }}>Must end with a special symbol: - ^ ~ | § ¤ ¿ ß</li>
//           <li style={{ color: checks.number ? "green" : "red" }}>At least one number</li>
//           <li style={{ color: checks.noConsecutiveNumbers ? "green" : "red" }}>
//                                                                   Must not contain consecutive numbers (e.g., 123, 456)</li>

//         </ul>

//         <div style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "20px" }}>
//           <button type="submit" style={{ color: "white" }} className="buttonni">
//             Check
//           </button>
//           <button type="button" onClick={handleClear}>
//             Clear
//           </button>
//         </div>

//         {message && (
//           <p
//             style={{
//               color: message.includes("accepted") ? "green" : "red",
//               fontFamily: "tahoma",
//               fontWeight: "bold",
//               textShadow: "2px 2px 2px rgba(0,0,0,0.2)",
//             }}
//           >
//             {message}
//           </p>
//         )}
//       </form>
//     </div>
//   );
// }













//Semi-final


// import React, { useState } from "react";
// import './App.css';

// const ImageEncryptor: React.FC = () => {
//   const [originalSrc, setOriginalSrc] = useState<string | null>(null);
//   const [encryptedSrc, setEncryptedSrc] = useState<string | null>(null);

//   // Divide into 8 blocks (2 rows x 4 columns) and shuffle them
//   const shuffleBlocks = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
//     const rows = 10;
//     const cols = 5;
//     const blockWidth = Math.floor(width / cols);
//     const blockHeight = Math.floor(height / rows);

//     // Extract 8 blocks
//     const blocks: ImageData[] = [];
//     for (let r = 0; r < rows; r++) {
//       for (let c = 0; c < cols; c++) {
//         const block = ctx.getImageData(c * blockWidth, r * blockHeight, blockWidth, blockHeight);
//         blocks.push(block);
//       }
//     }

//     // Shuffle indices
//     const indices = Array.from({ length: blocks.length }, (_, i) => i);
//     for (let i = indices.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [indices[i], indices[j]] = [indices[j], indices[i]];
//     }

//     // Clear and redraw shuffled blocks
//     ctx.clearRect(0, 0, width, height);
//     let idx = 0;
//     for (let r = 0; r < rows; r++) {
//       for (let c = 0; c < cols; c++) {
//         ctx.putImageData(blocks[indices[idx]], c * blockWidth, r * blockHeight);
//         idx++;
//       }
//     }
//   };

//   const handleEncrypt = (file: File) => {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const img = new Image();
//       img.src = e.target?.result as string;

//       img.onload = () => {
//         const canvas = document.createElement("canvas");
//         const ctx = canvas.getContext("2d");
//         if (!ctx) return;

//         canvas.width = img.width;
//         canvas.height = img.height;

//         ctx.drawImage(img, 0, 0);

//         // 🔐 Shuffle 8 blocks
//         shuffleBlocks(ctx, canvas.width, canvas.height);

//         setOriginalSrc(img.src);
//         setEncryptedSrc(canvas.toDataURL());
//       };
//     };
//     reader.readAsDataURL(file);
//   };

//   return (
//     <div className="p-4 space-y-4">
//       <h2 className="text-xl font-bold">Block Shuffle Image Encryption</h2>

//       <input
//         type="file"
//         accept="image/*"
//         onChange={(e) => {
//           if (e.target.files && e.target.files[0]) {
//             handleEncrypt(e.target.files[0]);
//           }
//         }}
//       />

//       <div className="grid grid-cols-2 gap-4 mt-4">
//         {originalSrc && (
//           <div>
//             <h3 className="font-semibold">Original</h3>
//             <img src={originalSrc} alt="Original" className="rounded shadow" />
//           </div>
//         )}

//         {encryptedSrc && (
//           <div>
//             <h3 className="font-semibold">Encrypted (Shuffled)</h3>
//             <img src={encryptedSrc} alt="Encrypted" className="rounded shadow" />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ImageEncryptor;














//2



// import React, { useState } from "react";
// import "./App.css";

// const ImageEncryptor: React.FC = () => {
//   const [originalSrc, setOriginalSrc] = useState<string | null>(null);
//   const [encryptedSrc, setEncryptedSrc] = useState<string | null>(null);

//   // Set default uniform size for all images
//   const DEFAULT_WIDTH = 400;
//   const DEFAULT_HEIGHT = 400;

//   // Divide into blocks and shuffle them
//   const shuffleBlocks = (
//     ctx: CanvasRenderingContext2D,
//     width: number,
//     height: number
//   ) => {
//     const rows = 2; // change back to 2 rows
//     const cols = 4; // 4 columns
//     const blockWidth = Math.floor(width / cols);
//     const blockHeight = Math.floor(height / rows);

//     // Extract blocks
//     const blocks: ImageData[] = [];
//     for (let r = 0; r < rows; r++) {
//       for (let c = 0; c < cols; c++) {
//         const block = ctx.getImageData(
//           c * blockWidth,
//           r * blockHeight,
//           blockWidth,
//           blockHeight
//         );
//         blocks.push(block);
//       }
//     }

//     // Shuffle indices
//     const indices = Array.from({ length: blocks.length }, (_, i) => i);
//     for (let i = indices.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [indices[i], indices[j]] = [indices[j], indices[i]];
//     }

//     // Clear and redraw shuffled blocks
//     ctx.clearRect(0, 0, width, height);
//     let idx = 0;
//     for (let r = 0; r < rows; r++) {
//       for (let c = 0; c < cols; c++) {
//         ctx.putImageData(blocks[indices[idx]], c * blockWidth, r * blockHeight);
//         idx++;
//       }
//     }
//   };

//   const handleEncrypt = (file: File) => {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const img = new Image();
//       img.src = e.target?.result as string;

//       img.onload = () => {
//         const canvas = document.createElement("canvas");
//         const ctx = canvas.getContext("2d");
//         if (!ctx) return;

//         // ✅ Force all images to be resized to a uniform size
//         canvas.width = DEFAULT_WIDTH;
//         canvas.height = DEFAULT_HEIGHT;

//         // Draw the uploaded image scaled to fit default size
//         ctx.drawImage(img, 0, 0, DEFAULT_WIDTH, DEFAULT_HEIGHT);

//         // 🔐 Shuffle into blocks
//         shuffleBlocks(ctx, canvas.width, canvas.height);

//         setOriginalSrc(canvas.toDataURL()); // original resized version
//         setEncryptedSrc(canvas.toDataURL()); // shuffled version
//       };
//     };
//     reader.readAsDataURL(file);
//   };

//   return (
//     <div className="p-4 space-y-4">
//       <h2 className="text-xl font-bold">Block Shuffle Image Encryption</h2>

//       <input
//         type="file"
//         accept="image/*"
//         onChange={(e) => {
//           if (e.target.files && e.target.files[0]) {
//             handleEncrypt(e.target.files[0]);
//           }
//         }}
//       />

//       <div className="grid grid-cols-2 gap-4 mt-4">
//         {originalSrc && (
//           <div>
//             <h3 className="font-semibold">Original (Resized)</h3>
//             <img
//               src={originalSrc}
//               alt="Original"
//               className="rounded shadow w-[400px] h-[400px] object-cover"
//             />
//           </div>
//         )}

//         {encryptedSrc && (
//           <div>
//             <h3 className="font-semibold">Encrypted (Shuffled)</h3>
//             <img
//               src={encryptedSrc}
//               alt="Encrypted"
//               className="rounded shadow w-[400px] h-[400px] object-cover"
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ImageEncryptor;





















// import React, { useState } from "react";
// import "./App.css";

// const ImageEncryptor: React.FC = () => {
//   const [originalSrc, setOriginalSrc] = useState<string | null>(null);
//   const [processedSrc, setProcessedSrc] = useState<string | null>(null);
//   const [shuffleOrder, setShuffleOrder] = useState<number[] | null>(null);

//   // Set default uniform size for all images
//   const DEFAULT_WIDTH = 400;
//   const DEFAULT_HEIGHT = 400;

//   // Divide into blocks and shuffle them
//   const shuffleBlocks = (
//     ctx: CanvasRenderingContext2D,
//     width: number,
//     height: number
//   ): number[] => {
//     const rows = 2;
//     const cols = 4;
//     const blockWidth = Math.floor(width / cols);
//     const blockHeight = Math.floor(height / rows);

//     // Extract blocks
//     const blocks: ImageData[] = [];
//     for (let r = 0; r < rows; r++) {
//       for (let c = 0; c < cols; c++) {
//         const block = ctx.getImageData(
//           c * blockWidth,
//           r * blockHeight,
//           blockWidth,
//           blockHeight
//         );
//         blocks.push(block);
//       }
//     }

//     // Shuffle indices
//     const indices = Array.from({ length: blocks.length }, (_, i) => i);
//     for (let i = indices.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [indices[i], indices[j]] = [indices[j], indices[i]];
//     }

//     // Clear and redraw shuffled blocks
//     ctx.clearRect(0, 0, width, height);
//     let idx = 0;
//     for (let r = 0; r < rows; r++) {
//       for (let c = 0; c < cols; c++) {
//         ctx.putImageData(blocks[indices[idx]], c * blockWidth, r * blockHeight);
//         idx++;
//       }
//     }

//     return indices; // return shuffle order
//   };

//   // Restore blocks based on shuffle order
//   const restoreBlocks = (
//     ctx: CanvasRenderingContext2D,
//     width: number,
//     height: number,
//     order: number[]
//   ) => {
//     const rows = 2;
//     const cols = 4;
//     const blockWidth = Math.floor(width / cols);
//     const blockHeight = Math.floor(height / rows);

//     // Extract blocks from the shuffled image
//     const blocks: ImageData[] = [];
//     for (let r = 0; r < rows; r++) {
//       for (let c = 0; c < cols; c++) {
//         const block = ctx.getImageData(
//           c * blockWidth,
//           r * blockHeight,
//           blockWidth,
//           blockHeight
//         );
//         blocks.push(block);
//       }
//     }

//     // Reorder blocks back to original
//     ctx.clearRect(0, 0, width, height);
//     order.forEach((shuffledIndex, originalIndex) => {
//       const r = Math.floor(originalIndex / cols);
//       const c = originalIndex % cols;
//       ctx.putImageData(blocks[shuffledIndex], c * blockWidth, r * blockHeight);
//     });
//   };

//  const handleEncrypt = (file: File) => {
//   const reader = new FileReader();
//   reader.onload = (e) => {
//     const img = new Image();
//     img.src = e.target?.result as string;

//     img.onload = () => {
//       const canvas = document.createElement("canvas");
//       const ctx = canvas.getContext("2d");
//       if (!ctx) return;

//       canvas.width = DEFAULT_WIDTH;
//       canvas.height = DEFAULT_HEIGHT;

//       // Draw the uploaded image scaled to uniform size
//       ctx.drawImage(img, 0, 0, DEFAULT_WIDTH, DEFAULT_HEIGHT);

//       // ✅ Save this clean resized version before shuffling
//       const resizedDataUrl = canvas.toDataURL();
//       setOriginalSrc(resizedDataUrl);

//       // Now shuffle a *copy* of it
//       const order = shuffleBlocks(ctx, canvas.width, canvas.height);

//       setProcessedSrc(canvas.toDataURL()); // shuffled version
//       setShuffleOrder(order);
//     };
//   };
//   reader.readAsDataURL(file);
// };


//   const handleDecrypt = () => {
//     if (!processedSrc || !shuffleOrder) return;

//     const img = new Image();
//     img.src = processedSrc;

//     img.onload = () => {
//       const canvas = document.createElement("canvas");
//       const ctx = canvas.getContext("2d");
//       if (!ctx) return;

//       canvas.width = DEFAULT_WIDTH;
//       canvas.height = DEFAULT_HEIGHT;

//       ctx.drawImage(img, 0, 0, DEFAULT_WIDTH, DEFAULT_HEIGHT);

//       // 🔓 Restore using saved shuffle order
//       restoreBlocks(ctx, canvas.width, canvas.height, shuffleOrder);

//       setProcessedSrc(canvas.toDataURL()); // update with decrypted
//     };
//   };

//   return (
//     <div className="p-4 space-y-4">
//       <h2 className="text-xl font-bold">Block Shuffle Image Encryption</h2>

//       <input
//         type="file"
//         accept="image/*"
//         onChange={(e) => {
//           if (e.target.files && e.target.files[0]) {
//             handleEncrypt(e.target.files[0]);
//           }
//         }}
//       />

//       {processedSrc && (
//         <div className="flex gap-4 mt-4">
//           <button
//             onClick={() => setProcessedSrc(originalSrc)}
//             className="px-4 py-2 bg-gray-500 text-white rounded"
//           >
//             Reset
//           </button>
//           <button
//             onClick={handleDecrypt}
//             className="px-4 py-2 bg-green-600 text-white rounded"
//           >
//             Decrypt
//           </button>
//         </div>
//       )}

//       <div className="grid grid-cols-2 gap-4 mt-4">
//         {originalSrc && (
//           <div>
//             <h3 className="font-semibold">Original (Resized)</h3>
//             <img
//               src={originalSrc}
//               alt="Original"
//               className="rounded shadow w-[400px] h-[400px] object-cover"
//             />
//           </div>
//         )}

//         {processedSrc && (
//           <div>
//             <h3 className="font-semibold">
//               {shuffleOrder ? "Encrypted / Decrypted" : "Processed"}
//             </h3>
//             <img
//               src={processedSrc}
//               alt="Processed"
//               className="rounded shadow w-[400px] h-[400px] object-cover"
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ImageEncryptor;













//autodownload


// import React, { useState } from "react";

// const ImageEncryptor: React.FC = () => {
//   const [originalImage, setOriginalImage] = useState<string | null>(null);
//   const [encryptedImage, setEncryptedImage] = useState<string | null>(null);
//   const [decryptedImage, setDecryptedImage] = useState<string | null>(null);

//   // Shuffle order (fixed for encryption/decryption)
//   const order = [7, 3, 5, 1, 6, 2, 0, 4]; 
//   const reverseOrder = order.reduce((acc, cur, idx) => {
//     acc[cur] = idx;
//     return acc;
//   }, [] as number[]);

//   const sliceAndReorder = (
//     ctx: CanvasRenderingContext2D,
//     width: number,
//     height: number,
//     orderArray: number[]
//   ) => {
//     const pieceWidth = width / 4;
//     const pieceHeight = height / 2;

//     const pieces: HTMLCanvasElement[] = [];

//     // Slice into 8 pieces
//     for (let row = 0; row < 2; row++) {
//       for (let col = 0; col < 4; col++) {
//         const piece = document.createElement("canvas");
//         piece.width = pieceWidth;
//         piece.height = pieceHeight;
//         const pctx = piece.getContext("2d")!;
//         pctx.drawImage(
//           ctx.canvas,
//           col * pieceWidth,
//           row * pieceHeight,
//           pieceWidth,
//           pieceHeight,
//           0,
//           0,
//           pieceWidth,
//           pieceHeight
//         );
//         pieces.push(piece);
//       }
//     }

//     // Shuffle pieces
//     const shuffled = document.createElement("canvas");
//     shuffled.width = width;
//     shuffled.height = height;
//     const sctx = shuffled.getContext("2d")!;

//     orderArray.forEach((idx, newPos) => {
//       const row = Math.floor(newPos / 4);
//       const col = newPos % 4;
//       sctx.drawImage(
//         pieces[idx],
//         col * pieceWidth,
//         row * pieceHeight,
//         pieceWidth,
//         pieceHeight
//       );
//     });

//     return shuffled.toDataURL("image/png");
//   };

//   // Encrypt image
//   const handleEncrypt = (file: File) => {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const img = new Image();
//       img.onload = () => {
//         const canvas = document.createElement("canvas");
//         canvas.width = img.width;
//         canvas.height = img.height;
//         const ctx = canvas.getContext("2d")!;
//         ctx.drawImage(img, 0, 0);
//         setOriginalImage(canvas.toDataURL("image/png"));

//         const shuffled = sliceAndReorder(ctx, img.width, img.height, order);
//         setEncryptedImage(shuffled);

//         // download encrypted image
//         const a = document.createElement("a");
//         a.href = shuffled;
//         a.download = "encrypted.png";
//         a.click();
//       };
//       img.src = e.target?.result as string;
//     };
//     reader.readAsDataURL(file);
//   };

//   // Decrypt image
//   const handleDecrypt = (file: File) => {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const img = new Image();
//       img.onload = () => {
//         const canvas = document.createElement("canvas");
//         canvas.width = img.width;
//         canvas.height = img.height;
//         const ctx = canvas.getContext("2d")!;
//         ctx.drawImage(img, 0, 0);

//         const restored = sliceAndReorder(
//           ctx,
//           img.width,
//           img.height,
//           reverseOrder
//         );
//         setDecryptedImage(restored);

//         // download decrypted image
//         const a = document.createElement("a");
//         a.href = restored;
//         a.download = "decrypted.png";
//         a.click();
//       };
//       img.src = e.target?.result as string;
//     };
//     reader.readAsDataURL(file);
//   };

//   return (
//     <div className="p-4 space-y-6">
//       <h1 className="text-xl font-bold">🔐 Image Shuffle Encryption & Decryption</h1>

//       {/* Encrypt Section */}
//       <div>
//         <h2 className="font-semibold">Encryption</h2>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) =>
//             e.target.files && handleEncrypt(e.target.files[0])
//           }
//         />
//         {encryptedImage && (
//           <div className="mt-2">
//             <p>Encrypted Image:</p>
//             <img src={encryptedImage} alt="Encrypted" className="max-w-sm" />
//           </div>
//         )}
//       </div>

//       {/* Decrypt Section */}
//       <div>
//         <h2 className="font-semibold">Decryption</h2>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) =>
//             e.target.files && handleDecrypt(e.target.files[0])
//           }
//         />
//         {decryptedImage && (
//           <div className="mt-2">
//             <p>Decrypted Image:</p>
//             <img src={decryptedImage} alt="Decrypted" className="max-w-sm" />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ImageEncryptor;













//no auto download...this one


// import React, { useState } from "react";
// import './App.css';

// const ImageEncryptor: React.FC = () => {
//   const [originalImage, setOriginalImage] = useState<string | null>(null);
//   const [encryptedImage, setEncryptedImage] = useState<string | null>(null);
//   const [decryptedImage, setDecryptedImage] = useState<string | null>(null);

//   // Shuffle order (fixed for encryption/decryption)
//   const order = [7, 3, 5, 1, 6, 2, 0, 4];
//   const reverseOrder = order.reduce((acc, cur, idx) => {
//     acc[cur] = idx;
//     return acc;
//   }, [] as number[]);

//   const sliceAndReorder = (
//     ctx: CanvasRenderingContext2D,
//     width: number,
//     height: number,
//     orderArray: number[]
//   ) => {
//     const pieceWidth = width / 4;
//     const pieceHeight = height / 2;

//     const pieces: HTMLCanvasElement[] = [];

//     // Slice into 8 pieces
//     for (let row = 0; row < 2; row++) {
//       for (let col = 0; col < 4; col++) {
//         const piece = document.createElement("canvas");
//         piece.width = pieceWidth;
//         piece.height = pieceHeight;
//         const pctx = piece.getContext("2d")!;
//         pctx.drawImage(
//           ctx.canvas,
//           col * pieceWidth,
//           row * pieceHeight,
//           pieceWidth,
//           pieceHeight,
//           0,
//           0,
//           pieceWidth,
//           pieceHeight
//         );
//         pieces.push(piece);
//       }
//     }

//     // Shuffle pieces
//     const shuffled = document.createElement("canvas");
//     shuffled.width = width;
//     shuffled.height = height;
//     const sctx = shuffled.getContext("2d")!;

//     orderArray.forEach((idx, newPos) => {
//       const row = Math.floor(newPos / 4);
//       const col = newPos % 4;
//       sctx.drawImage(
//         pieces[idx],
//         col * pieceWidth,
//         row * pieceHeight,
//         pieceWidth,
//         pieceHeight
//       );
//     });

//     return shuffled.toDataURL("image/png");
//   };

//   // Encrypt image
//   const handleEncrypt = (file: File) => {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const img = new Image();
//       img.onload = () => {
//         const canvas = document.createElement("canvas");
//         canvas.width = img.width;
//         canvas.height = img.height;
//         const ctx = canvas.getContext("2d")!;
//         ctx.drawImage(img, 0, 0);
//         setOriginalImage(canvas.toDataURL("image/png"));

//         const shuffled = sliceAndReorder(ctx, img.width, img.height, order);
//         setEncryptedImage(shuffled);
//       };
//       img.src = e.target?.result as string;
//     };
//     reader.readAsDataURL(file);
//   };

//   // Decrypt image
//   const handleDecrypt = (file: File) => {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const img = new Image();
//       img.onload = () => {
//         const canvas = document.createElement("canvas");
//         canvas.width = img.width;
//         canvas.height = img.height;
//         const ctx = canvas.getContext("2d")!;
//         ctx.drawImage(img, 0, 0);

//         const restored = sliceAndReorder(
//           ctx,
//           img.width,
//           img.height,
//           reverseOrder
//         );
//         setDecryptedImage(restored);
//       };
//       img.src = e.target?.result as string;
//     };
//     reader.readAsDataURL(file);
//   };

//   // Download helper
//   const downloadImage = (dataUrl: string, filename: string) => {
//     const a = document.createElement("a");
//     a.href = dataUrl;
//     a.download = filename;
//     a.click();
//   };

//   return (
//     <div className="p-4 space-y-6">
//       <h1 className="text-xl font-bold">🔐 Image Shuffle Encryption & Decryption</h1>

//       {/* Encrypt Section */}
//       <div>
//         <h2 className="font-semibold">Encryption</h2>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) =>
//             e.target.files && handleEncrypt(e.target.files[0])
//           }
//         />
//         {encryptedImage && (
//           <div className="mt-2">
//             <p>Encrypted Image:</p>
//             <img src={encryptedImage} alt="Encrypted" className="max-w-sm" />
//             <button
//               className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
//               onClick={() =>
//                 encryptedImage && downloadImage(encryptedImage, "encrypted.png")
//               }
//             >
//               Download Encrypted
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Decrypt Section */}
//       <div>
//         <h2 className="font-semibold">Decryption</h2>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) =>
//             e.target.files && handleDecrypt(e.target.files[0])
//           }
//         />
//         {decryptedImage && (
//           <div className="mt-2">
//             <p>Decrypted Image:</p>
//             <img src={decryptedImage} alt="Decrypted" className="max-w-sm" />
//             {/* <button
//               className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
//               onClick={() =>
//                 decryptedImage && downloadImage(decryptedImage, "decrypted.png")
//               }
//             >
//               Download Decrypted
//             </button> */}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ImageEncryptor;
















//random ,no deafault pattern, code ang ma save, json

// import React, { useState } from "react";

// interface EncryptedPackage {
//   order: number[];
//   image: string;
// }

// const ImageEncryptor: React.FC = () => {
//   const [encryptedPackage, setEncryptedPackage] = useState<EncryptedPackage | null>(null);
//   const [decryptedImage, setDecryptedImage] = useState<string | null>(null);

//   const sliceAndReorder = (
//     ctx: CanvasRenderingContext2D,
//     width: number,
//     height: number,
//     orderArray: number[]
//   ) => {
//     const pieceWidth = width / 4;
//     const pieceHeight = height / 2;

//     const pieces: HTMLCanvasElement[] = [];
//     for (let row = 0; row < 2; row++) {
//       for (let col = 0; col < 4; col++) {
//         const piece = document.createElement("canvas");
//         piece.width = pieceWidth;
//         piece.height = pieceHeight;
//         const pctx = piece.getContext("2d")!;
//         pctx.drawImage(
//           ctx.canvas,
//           col * pieceWidth,
//           row * pieceHeight,
//           pieceWidth,
//           pieceHeight,
//           0,
//           0,
//           pieceWidth,
//           pieceHeight
//         );
//         pieces.push(piece);
//       }
//     }

//     const shuffled = document.createElement("canvas");
//     shuffled.width = width;
//     shuffled.height = height;
//     const sctx = shuffled.getContext("2d")!;

//     orderArray.forEach((idx, newPos) => {
//       const row = Math.floor(newPos / 4);
//       const col = newPos % 4;
//       sctx.drawImage(
//         pieces[idx],
//         col * pieceWidth,
//         row * pieceHeight,
//         pieceWidth,
//         pieceHeight
//       );
//     });

//     return shuffled.toDataURL("image/png");
//   };

//   const generateRandomOrder = (length: number) => {
//     const arr = Array.from({ length }, (_, i) => i);
//     for (let i = arr.length - 1; i > 0; i--) {
//       const j = Math.floor(Math.random() * (i + 1));
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     return arr;
//   };

//   const handleEncrypt = (file: File) => {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const img = new Image();
//       img.onload = () => {
//         const canvas = document.createElement("canvas");
//         canvas.width = img.width;
//         canvas.height = img.height;
//         const ctx = canvas.getContext("2d")!;
//         ctx.drawImage(img, 0, 0);

//         // generate random order
//         const order = generateRandomOrder(8);
//         const encryptedImage = sliceAndReorder(ctx, img.width, img.height, order);

//         setEncryptedPackage({ order, image: encryptedImage });
//       };
//       img.src = e.target?.result as string;
//     };
//     reader.readAsDataURL(file);
//   };

//   const handleDecrypt = (file: File) => {
//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const pkg = JSON.parse(e.target?.result as string) as EncryptedPackage;

//       const img = new Image();
//       img.onload = () => {
//         const canvas = document.createElement("canvas");
//         canvas.width = img.width;
//         canvas.height = img.height;
//         const ctx = canvas.getContext("2d")!;
//         ctx.drawImage(img, 0, 0);

//         const reverseOrder = pkg.order.reduce((acc, cur, idx) => {
//           acc[cur] = idx;
//           return acc;
//         }, [] as number[]);

//         const restored = sliceAndReorder(ctx, img.width, img.height, reverseOrder);
//         setDecryptedImage(restored);
//       };
//       img.src = pkg.image;
//     };
//     reader.readAsText(file);
//   };

//   const downloadEncrypted = () => {
//     if (!encryptedPackage) return;
//     const blob = new Blob([JSON.stringify(encryptedPackage)], {
//       type: "application/json",
//     });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement("a");
//     a.href = url;
//     a.download = "encrypted.json";
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div className="p-4 space-y-6">
//       <h1 className="text-xl font-bold">🔐 Random Shuffle Encryption & Decryption</h1>

//       <div>
//         <h2 className="font-semibold">Encryption</h2>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => e.target.files && handleEncrypt(e.target.files[0])}
//         />
//         {encryptedPackage && (
//           <div className="mt-2">
//             <p>Encrypted Preview:</p>
//             <img src={encryptedPackage.image} alt="Encrypted" className="max-w-sm" />
//             <button
//               className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
//               onClick={downloadEncrypted}
//             >
//               Download Encrypted JSON
//             </button>
//           </div>
//         )}
//       </div>

//       <div>
//         <h2 className="font-semibold">Decryption</h2>
//         <input
//           type="file"
//           accept="application/json"
//           onChange={(e) => e.target.files && handleDecrypt(e.target.files[0])}
//         />
//         {decryptedImage && (
//           <div className="mt-2">
//             <p>Decrypted Image:</p>
//             <img src={decryptedImage} alt="Decrypted" className="max-w-sm" />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ImageEncryptor;

























// import React, { useState } from "react";
// import "./App.css";

// const ImageEncryptor: React.FC = () => {
//   const [originalImage, setOriginalImage] = useState<string | null>(null);
//   const [encryptedImage, setEncryptedImage] = useState<string | null>(null);
//   const [decryptedImage, setDecryptedImage] = useState<string | null>(null);
//   const [encryptPasskey, setEncryptPasskey] = useState<string>("");
//   const [decryptPasskey, setDecryptPasskey] = useState<string>("");
//   const [encryptFile, setEncryptFile] = useState<File | null>(null);
//   const [decryptFile, setDecryptFile] = useState<File | null>(null);

//   // 🔐 Generate shuffle order based on passkey
//   const generateOrderFromPasskey = (passkey: string) => {
//     let seed = 0;
//     for (let i = 0; i < passkey.length; i++) {
//       seed = (seed + passkey.charCodeAt(i) * (i + 1)) % 1000;
//     }
//     const arr = [0, 1, 2, 3, 4, 5, 6, 7];
//     for (let i = arr.length - 1; i > 0; i--) {
//       const j = seed % (i + 1);
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//       seed = (seed * 7 + 13) % 1000;
//     }
//     return arr;
//   };

//   const getReverseOrder = (order: number[]) =>
//     order.map((_, i) => order.indexOf(i));

//   const sliceAndReorder = (
//     ctx: CanvasRenderingContext2D,
//     width: number,
//     height: number,
//     orderArray: number[]
//   ) => {
//     const pieceWidth = width / 4;
//     const pieceHeight = height / 2;
//     const pieces: HTMLCanvasElement[] = [];

//     // Slice image into 8 pieces
//     for (let row = 0; row < 2; row++) {
//       for (let col = 0; col < 4; col++) {
//         const piece = document.createElement("canvas");
//         piece.width = pieceWidth;
//         piece.height = pieceHeight;
//         const pctx = piece.getContext("2d")!;
//         pctx.drawImage(
//           ctx.canvas,
//           col * pieceWidth,
//           row * pieceHeight,
//           pieceWidth,
//           pieceHeight,
//           0,
//           0,
//           pieceWidth,
//           pieceHeight
//         );
//         pieces.push(piece);
//       }
//     }

//     // Reorder pieces
//     const shuffled = document.createElement("canvas");
//     shuffled.width = width;
//     shuffled.height = height;
//     const sctx = shuffled.getContext("2d")!;
//     orderArray.forEach((idx, newPos) => {
//       const row = Math.floor(newPos / 4);
//       const col = newPos % 4;
//       sctx.drawImage(
//         pieces[idx],
//         col * pieceWidth,
//         row * pieceHeight,
//         pieceWidth,
//         pieceHeight
//       );
//     });

//     return shuffled.toDataURL("image/png");
//   };

//   // 🔒 Encrypt
//   const handleEncrypt = () => {
//     if (!encryptFile || !encryptPasskey.trim()) {
//       alert("Please select a file and enter a passkey!");
//       return;
//     }

//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const img = new Image();
//       img.onload = () => {
//         const canvas = document.createElement("canvas");
//         canvas.width = img.width;
//         canvas.height = img.height;
//         const ctx = canvas.getContext("2d")!;
//         ctx.drawImage(img, 0, 0);
//         setOriginalImage(canvas.toDataURL("image/png"));

//         const order = generateOrderFromPasskey(encryptPasskey);
//         const shuffled = sliceAndReorder(ctx, img.width, img.height, order);
//         setEncryptedImage(shuffled);
//       };
//       img.src = e.target?.result as string;
//     };
//     reader.readAsDataURL(encryptFile);
//   };

//   // 🔓 Decrypt
//   const handleDecrypt = () => {
//     if (!decryptFile || !decryptPasskey.trim()) {
//       alert("Please select a file and enter a passkey!");
//       return;
//     }

//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const img = new Image();
//       img.onload = () => {
//         const canvas = document.createElement("canvas");
//         canvas.width = img.width;
//         canvas.height = img.height;
//         const ctx = canvas.getContext("2d")!;
//         ctx.drawImage(img, 0, 0);

//         const order = generateOrderFromPasskey(decryptPasskey);
//         const reverseOrder = getReverseOrder(order);
//         const restored = sliceAndReorder(ctx, img.width, img.height, reverseOrder);
//         setDecryptedImage(restored);
//       };
//       img.src = e.target?.result as string;
//     };
//     reader.readAsDataURL(decryptFile);
//   };

//   const downloadImage = (dataUrl: string, filename: string) => {
//     const a = document.createElement("a");
//     a.href = dataUrl;
//     a.download = filename;
//     a.click();
//   };

//   return (
//     <div className="p-6 space-y-8">
//       <h1 className="text-2xl font-bold text-center">
//         🔐 Image Encryptor with Passkey
//       </h1>

//       {/* Encrypt Section */}
//       <div className="border p-4 rounded-lg shadow">
//         <h2 className="font-semibold text-lg mb-2">Encryption</h2>
//         <div className="flex items-center space-x-2 mb-3">
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => e.target.files && setEncryptFile(e.target.files[0])}
//           />
//           <input
//             type="text"
//             placeholder="Enter passkey"
//             className="border p-2 rounded w-48"
//             value={encryptPasskey}
//             onChange={(e) => setEncryptPasskey(e.target.value)}
//           />
//           <button
//             onClick={handleEncrypt}
//             className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//           >
//             Encrypt
//           </button>
//         </div>

//         {encryptedImage && (
//           <div className="mt-3">
//             <p className="font-medium">Encrypted Image:</p>
//             <img src={encryptedImage} alt="Encrypted" className="max-w-sm" />
//             <button
//               className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
//               onClick={() =>
//                 encryptedImage && downloadImage(encryptedImage, "encrypted.png")
//               }
//             >
//               Download Encrypted
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Decrypt Section */}
//       <div className="border p-4 rounded-lg shadow">
//         <h2 className="font-semibold text-lg mb-2">Decryption</h2>
//         <div className="flex items-center space-x-2 mb-3">
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => e.target.files && setDecryptFile(e.target.files[0])}
//           />
//           <input
//             type="text"
//             placeholder="Enter passkey"
//             className="border p-2 rounded w-48"
//             value={decryptPasskey}
//             onChange={(e) => setDecryptPasskey(e.target.value)}
//           />
//           <button
//             onClick={handleDecrypt}
//             className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
//           >
//             Decrypt
//           </button>
//         </div>

//         {decryptedImage && (
//           <div className="mt-3">
//             <p className="font-medium">Decrypted Image:</p>
//             <img src={decryptedImage} alt="Decrypted" className="max-w-sm" />
//             <button
//               className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
//               onClick={() =>
//                 decryptedImage && downloadImage(decryptedImage, "decrypted.png")
//               }
//             >
//               Download Decrypted
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ImageEncryptor;



















//Final 



// import React, { useState } from "react";
// import "./App.css";

// const ImageEncryptor: React.FC = () => {
//   const [originalImage, setOriginalImage] = useState<string | null>(null);
//   const [encryptedImage, setEncryptedImage] = useState<string | null>(null);
//   const [decryptedImage, setDecryptedImage] = useState<string | null>(null);

//   const [encryptKey, setEncryptKey] = useState<string>("");
//   const [decryptKey, setDecryptKey] = useState<string>("");
//   const [savedKey, setSavedKey] = useState<string | null>(null);

//   const [imageFile, setImageFile] = useState<File | null>(null);
//   const [decryptFile, setDecryptFile] = useState<File | null>(null);

//   const baseOrder = [7, 3, 5, 1, 6, 2, 0, 4];

//   // Generate pseudo-random order based on passkey
//   const generateOrderFromKey = (key: string) => {
//     const seed = Array.from(key).reduce((a, c) => a + c.charCodeAt(0), 0);
//     const order = [...baseOrder];
//     for (let i = order.length - 1; i > 0; i--) {
//       const j = (seed + i * 31) % (i + 1);
//       [order[i], order[j]] = [order[j], order[i]];
//     }
//     return order;
//   };

//   const reverseOrder = (order: number[]) =>
//     order.reduce((acc, cur, idx) => {
//       acc[cur] = idx;
//       return acc;
//     }, [] as number[]);

//   const sliceAndReorder = (
//     ctx: CanvasRenderingContext2D,
//     width: number,
//     height: number,
//     orderArray: number[]
//   ) => {
//     const pieceWidth = width / 4;
//     const pieceHeight = height / 2;
//     const pieces: HTMLCanvasElement[] = [];

//     for (let row = 0; row < 2; row++) {
//       for (let col = 0; col < 4; col++) {
//         const piece = document.createElement("canvas");
//         piece.width = pieceWidth;
//         piece.height = pieceHeight;
//         const pctx = piece.getContext("2d")!;
//         pctx.drawImage(
//           ctx.canvas,
//           col * pieceWidth,
//           row * pieceHeight,
//           pieceWidth,
//           pieceHeight,
//           0,
//           0,
//           pieceWidth,
//           pieceHeight
//         );
//         pieces.push(piece);
//       }
//     }

//     const shuffled = document.createElement("canvas");
//     shuffled.width = width;
//     shuffled.height = height;
//     const sctx = shuffled.getContext("2d")!;
//     orderArray.forEach((idx, newPos) => {
//       const row = Math.floor(newPos / 4);
//       const col = newPos % 4;
//       sctx.drawImage(
//         pieces[idx],
//         col * pieceWidth,
//         row * pieceHeight,
//         pieceWidth,
//         pieceHeight
//       );
//     });

//     return shuffled.toDataURL("image/png");
//   };

//   // Encrypt manually when button is clicked
//   const handleEncrypt = () => {
//     if (!encryptKey) return alert("🔑 Please enter a passkey first!");
//     if (!imageFile) return alert("📁 Please choose an image first!");

//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const img = new Image();
//       img.onload = () => {
//         const canvas = document.createElement("canvas");
//         canvas.width = img.width;
//         canvas.height = img.height;
//         const ctx = canvas.getContext("2d")!;
//         ctx.drawImage(img, 0, 0);
//         setOriginalImage(canvas.toDataURL("image/png"));

//         const keyOrder = generateOrderFromKey(encryptKey);
//         const shuffled = sliceAndReorder(ctx, img.width, img.height, keyOrder);
//         setEncryptedImage(shuffled);
//         setSavedKey(encryptKey);
//       };
//       img.src = e.target?.result as string;
//     };
//     reader.readAsDataURL(imageFile);
//   };

//   // Decrypt manually when button is clicked
//   const handleDecrypt = () => {
//     if (!decryptKey) return alert("🔑 Please enter the decryption passkey!");
//     if (!decryptFile) return alert("📁 Please upload the encrypted image first!");
//     if (savedKey === null)
//       return alert("⚠️ No encryption key saved in memory. Please encrypt first!");
//     if (decryptKey !== savedKey)
//       return alert("❌ Wrong passkey! Unable to decrypt.");

//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const img = new Image();
//       img.onload = () => {
//         const canvas = document.createElement("canvas");
//         canvas.width = img.width;
//         canvas.height = img.height;
//         const ctx = canvas.getContext("2d")!;
//         ctx.drawImage(img, 0, 0);

//         const keyOrder = generateOrderFromKey(decryptKey);
//         const restored = sliceAndReorder(
//           ctx,
//           img.width,
//           img.height,
//           reverseOrder(keyOrder)
//         );
//         setDecryptedImage(restored);
//       };
//       img.src = e.target?.result as string;
//     };
//     reader.readAsDataURL(decryptFile);
//   };

//   const downloadImage = (dataUrl: string, filename: string) => {
//     const a = document.createElement("a");
//     a.href = dataUrl;
//     a.download = filename;
//     a.click();
//   };

//   return (
//     <div className="p-4 space-y-6">
//       <h1 className="text-xl font-bold">Image Encryptor with Passkey</h1>

//       {/* Encrypt Section */}
//       <div>
//         <h2 className="font-semibold mb-2">Encryption</h2>
//         <input
//           type="password"
//           value={encryptKey}
//           onChange={(e) => setEncryptKey(e.target.value)}
//           placeholder="Enter passkey for encryption"
//           className="border px-3 py-1 rounded mb-2"
//         />
//         <br />
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => setImageFile(e.target.files?.[0] || null)}
//         />
//         <br />
//         <button
//           className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
//           onClick={handleEncrypt}
//         >
//           Encrypt Image
//         </button>

//         {encryptedImage && (
//           <div className="mt-3">
//             <p>Encrypted Image:</p>
//             <img src={encryptedImage} alt="Encrypted" className="max-w-sm" />
//             <button
//               className="mt-2 px-4 py-2 bg-green-500 text-white rounded"
//               onClick={() =>
//                 encryptedImage && downloadImage(encryptedImage, "encrypted.png")
//               }
//             >
//               Download Encrypted
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Decrypt Section */}
//       <div>
//         <h2 className="font-semibold mb-2">Decryption</h2>
//         <input
//           type="password"
//           value={decryptKey}
//           onChange={(e) => setDecryptKey(e.target.value)}
//           placeholder="Enter passkey for decryption"
//           className="border px-3 py-1 rounded mb-2"
//         />
//         <br />
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => setDecryptFile(e.target.files?.[0] || null)}
//         />
//         <br />
//         <button
//           className="mt-2 px-4 py-2 bg-purple-600 text-white rounded"
//           onClick={handleDecrypt}
//         >
//           Decrypt Image
//         </button>

//         {decryptedImage && (
//           <div className="mt-3">
//             <p>Decrypted Image:</p>
//             <img src={decryptedImage} alt="Decrypted" className="max-w-sm" />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ImageEncryptor;



































// import React, { useState } from "react";
// import "./App.css";

// const ImageEncryptor: React.FC = () => {
//   const [originalImage, setOriginalImage] = useState<string | null>(null);
//   const [encryptedImage, setEncryptedImage] = useState<string | null>(null);
//   const [decryptedImage, setDecryptedImage] = useState<string | null>(null);

//   const [encryptKey, setEncryptKey] = useState<string>("");
//   const [decryptKey, setDecryptKey] = useState<string>("");
//   const [savedKey, setSavedKey] = useState<string | null>(null);

//   const [imageFile, setImageFile] = useState<File | null>(null);
//   const [decryptFile, setDecryptFile] = useState<File | null>(null);

//   const baseOrder = [7, 3, 5, 1, 6, 2, 0, 4];

//   const generateOrderFromKey = (key: string) => {
//     const seed = Array.from(key).reduce((a, c) => a + c.charCodeAt(0), 0);
//     const order = [...baseOrder];
//     for (let i = order.length - 1; i > 0; i--) {
//       const j = (seed + i * 31) % (i + 1);
//       [order[i], order[j]] = [order[j], order[i]];
//     }
//     return order;
//   };

//   const reverseOrder = (order: number[]) =>
//     order.reduce((acc, cur, idx) => {
//       acc[cur] = idx;
//       return acc;
//     }, [] as number[]);

//   const sliceAndReorder = (
//     ctx: CanvasRenderingContext2D,
//     width: number,
//     height: number,
//     orderArray: number[]
//   ) => {
//     const pieceWidth = width / 4;
//     const pieceHeight = height / 2;
//     const pieces: HTMLCanvasElement[] = [];

//     for (let row = 0; row < 2; row++) {
//       for (let col = 0; col < 4; col++) {
//         const piece = document.createElement("canvas");
//         piece.width = pieceWidth;
//         piece.height = pieceHeight;
//         const pctx = piece.getContext("2d")!;
//         pctx.drawImage(
//           ctx.canvas,
//           col * pieceWidth,
//           row * pieceHeight,
//           pieceWidth,
//           pieceHeight,
//           0,
//           0,
//           pieceWidth,
//           pieceHeight
//         );
//         pieces.push(piece);
//       }
//     }

//     const shuffled = document.createElement("canvas");
//     shuffled.width = width;
//     shuffled.height = height;
//     const sctx = shuffled.getContext("2d")!;
//     orderArray.forEach((idx, newPos) => {
//       const row = Math.floor(newPos / 4);
//       const col = newPos % 4;
//       sctx.drawImage(
//         pieces[idx],
//         col * pieceWidth,
//         row * pieceHeight,
//         pieceWidth,
//         pieceHeight
//       );
//     });

//     return shuffled.toDataURL("image/png");
//   };

//   const handleEncrypt = () => {
//     if (!encryptKey) return alert("Please enter a passkey first!");
//     if (!imageFile) return alert("Please choose an image first!");

//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const img = new Image();
//       img.onload = () => {
//         const canvas = document.createElement("canvas");
//         canvas.width = img.width;
//         canvas.height = img.height;
//         const ctx = canvas.getContext("2d")!;
//         ctx.drawImage(img, 0, 0);
//         setOriginalImage(canvas.toDataURL("image/png"));

//         const keyOrder = generateOrderFromKey(encryptKey);
//         const shuffled = sliceAndReorder(ctx, img.width, img.height, keyOrder);
//         setEncryptedImage(shuffled);
//         setSavedKey(encryptKey);
//       };
//       img.src = e.target?.result as string;
//     };
//     reader.readAsDataURL(imageFile);
//   };

//   const handleDecrypt = () => {
//     if (!decryptKey) return alert("Please enter the decryption passkey!");
//     if (!decryptFile) return alert("Please upload the encrypted image first!");
//     if (savedKey === null)
//       return alert("No encryption key saved in memory. Please encrypt first!");
//     if (decryptKey !== savedKey)
//       return alert("Wrong passkey! Unable to decrypt.");

//     const reader = new FileReader();
//     reader.onload = (e) => {
//       const img = new Image();
//       img.onload = () => {
//         const canvas = document.createElement("canvas");
//         canvas.width = img.width;
//         canvas.height = img.height;
//         const ctx = canvas.getContext("2d")!;
//         ctx.drawImage(img, 0, 0);

//         const keyOrder = generateOrderFromKey(decryptKey);
//         const restored = sliceAndReorder(
//           ctx,
//           img.width,
//           img.height,
//           reverseOrder(keyOrder)
//         );
//         setDecryptedImage(restored);
//       };
//       img.src = e.target?.result as string;
//     };
//     reader.readAsDataURL(decryptFile);
//   };

//   const downloadImage = (dataUrl: string, filename: string) => {
//     const a = document.createElement("a");
//     a.href = dataUrl;
//     a.download = filename;
//     a.click();
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-6">
//       <div className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-3xl transition-transform duration-300 hover:scale-[1.01]">
//         <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">
//           Image Shuffling
//         </h1>

//         {/* Encryption Section */}
//         <div className="border-t pt-4">
//           <h2 className="font-semibold text-lg text-gray-700 mb-3">Encryption</h2>
//           <input
//             type="password"
//             value={encryptKey}
//             onChange={(e) => setEncryptKey(e.target.value)}
//             placeholder="Enter passkey for encryption"
//             className="border w-full px-3 py-2 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//           />
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setImageFile(e.target.files?.[0] || null)}
//             className="w-full mb-3 text-gray-600"
//           />
//           <button
//             className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition"
//             onClick={handleEncrypt}
//           >
//             Encrypt Image
//           </button>

//           {encryptedImage && (
//             <div className="mt-5 text-center">
//               <p className="text-gray-700 font-medium mb-2">Encrypted Image:</p>
//               <img
//                 src={encryptedImage}
//                 alt="Encrypted"
//                 className="max-w-sm mx-auto rounded-lg border-2 border-indigo-200 shadow-md"
//               />
//               <button
//                 className="mt-3 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition"
//                 onClick={() =>
//                   encryptedImage && downloadImage(encryptedImage, "encrypted.png")
//                 }
//               >
//                 ⬇️ Download Encrypted
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Decryption Section */}
//         <div className="border-t pt-4 mt-8">
//           <h2 className="font-semibold text-lg text-gray-700 mb-3">Decryption</h2>
//           <input
//             type="password"
//             value={decryptKey}
//             onChange={(e) => setDecryptKey(e.target.value)}
//             placeholder="Enter passkey for decryption"
//             className="border w-full px-3 py-2 rounded-lg mb-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
//           />
//           <input
//             type="file"
//             accept="image/*"
//             onChange={(e) => setDecryptFile(e.target.files?.[0] || null)}
//             className="w-full mb-3 text-gray-600"
//           />
//           <button
//             className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition"
//             onClick={handleDecrypt}
//           >
//             Decrypt Image
//           </button>

//           {decryptedImage && (
//             <div className="mt-5 text-center">
//               <p className="text-gray-700 font-medium mb-2">Decrypted Image:</p>
//               <img
//                 src={decryptedImage}
//                 alt="Decrypted"
//                 className="max-w-sm mx-auto rounded-lg border-2 border-purple-200 shadow-md"
//               />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ImageEncryptor;

















// import { Routes, Route, Navigate } from "react-router-dom";
// import Login from "./Login";
// import Dashboard from './pages/dashboard'

// export default function App() {
//   const fullname = localStorage.getItem("fullname");

//   return (

//     <Routes>
//       <Route
//         path = "/"
//         element = {fullname ? <Navigate to = "dashboard"/> : <Login />}
//       />
//       <Route
//         path = "dashboard"
//         element = {fullname ? <Dashboard /> : <Navigate to = "/" />}
//       />
//     </Routes>
//   )
// }






import { Routes, Route, Navigate } from "react-router-dom";
// import Login from "./Login";
import Login from "./login";
import Dashboard from "./pages/dashboard";


export default function App() {
  const fullname = localStorage.getItem("fullname");

  return (
    <Routes>
      <Route
        path="/login"
        element={fullname ? <Navigate to="/dashboard" /> : <Login />}
      />
      <Route
        path="/dashboard"
        element={fullname ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
