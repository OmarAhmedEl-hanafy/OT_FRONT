// import { useState } from "react";
// import { Button, Checkbox } from "@material-tailwind/react";
// import { useFormik } from "formik";
// import * as Yup from "yup";
// import { useNavigate } from "react-router-dom";
// import "./AddPaymentMethod.css"; // Ensure you have the CSS file
// import Logo from "../../assets/images/logo.svg";
// import Passphoto from "../../assets/images/Add Payment Method.svg";
// import InputComponent from "../../components/Inputs/InputComponent";

// function PaymentMethod() {
//   const navigate = useNavigate();
//   const [loading, setLoading] = useState(false);

//   // Validation schema using Yup
//   const validationSchema = Yup.object({
//     cardNumber: Yup.string().required("Card number is required"),
//     expDate: Yup.string().required("Expiration date is required"),
//     cvc: Yup.string().required("CVC is required"),
//     cardName: Yup.string().required("Name on card is required"),
//     country: Yup.string().required("Country or region is required"),
//   });

//   // Formik form handler
//   const formik = useFormik({
//     initialValues: {
//       cardNumber: "",
//       expDate: "",
//       cvc: "",
//       cardName: "",
//       country: "",
//       saveInfo: false,
//     },
//     validationSchema,
//     onSubmit: (values) => {
//       setLoading(true);
//       console.log(values);
//       // Simulate form submission
//       setTimeout(() => {
//         setLoading(false);
//         navigate("/confirmation"); // Navigate to the confirmation page after submission
//       }, 1500);
//     },
//   });

//   return (
//     <div className="payment-container">
//       {/* Left section with an image */}
//       <div className="left-section slide-in-left">
//         <img src={Passphoto} alt="Handshake" className="payment-image" />
//       </div>

//       {/* Right section with the form */}
//       <div className="right-section fade-in">
//         {/* Logo */}
//         <div className="mb-1 mt-2">
//           <img
//             src={Logo}
//             alt="Logo"
//             className="h-20"
//             style={{ width: "150px" }}
//           />
//         </div>
//         <button className="back-btn" onClick={() => navigate(-1)}>
//           &lt; Back
//         </button>
//         <h1 className="title">Add a payment method</h1>
//         <p className="description">
//           Let’s get you all set up so you can access your personal account.
//         </p>

//         {/* Form section */}
//         <form onSubmit={formik.handleSubmit} className="payment-form">
//           {/* Card Number */}
//           <div className="form-group">
//             <InputComponent
//               placeholder="Card Number"
//               label="Card Number"
//               type="text"
//               name="cardNumber"
//               value={formik.values.cardNumber}
//               handleChange={formik.handleChange}
//               errors={formik.errors.cardNumber}
//             />
//             {formik.errors.cardNumber && (
//               <p className="error-text">{formik.errors.cardNumber}</p>
//             )}
//           </div>

//           {/* Expiry Date and CVC */}
//           <div className="form-group-row">
//             <div className="form-group">
//               <InputComponent
//                 placeholder="Exp. Date"
//                 label="Exp. Date"
//                 type="text"
//                 name="expDate"
//                 value={formik.values.expDate}
//                 handleChange={formik.handleChange}
//                 errors={formik.errors.expDate}
//               />
//               {formik.errors.expDate && (
//                 <p className="error-text">{formik.errors.expDate}</p>
//               )}
//             </div>
//             <div className="form-group">
//               <InputComponent
//                 placeholder="CVC"
//                 label="CVC"
//                 type="text"
//                 name="cvc"
//                 value={formik.values.cvc}
//                 handleChange={formik.handleChange}
//                 errors={formik.errors.cvc}
//               />
//               {formik.errors.cvc && (
//                 <p className="error-text">{formik.errors.cvc}</p>
//               )}
//             </div>
//           </div>

//           {/* Name on card */}
//           <div className="form-group">
//             <InputComponent
//               placeholder="Name on Card"
//               label="Name on Card"
//               type="text"
//               name="cardName"
//               value={formik.values.cardName}
//               handleChange={formik.handleChange}
//               errors={formik.errors.cardName}
//             />
//             {formik.errors.cardName && (
//               <p className="error-text">{formik.errors.cardName}</p>
//             )}
//           </div>

//           {/* Country or Region */}
//           <div className="form-group">
//             <InputComponent
//               placeholder="Country or Region"
//               label="Country or Region"
//               type="text"
//               name="country"
//               value={formik.values.country}
//               handleChange={formik.handleChange}
//               errors={formik.errors.country}
//             />
//             {formik.errors.country && (
//               <p className="error-text">{formik.errors.country}</p>
//             )}
//           </div>

//           {/* Checkbox */}
//           <div className="form-group">
//             <Checkbox
//               crossOrigin="anonymous" // Optional based on your needs
//               label="Securely save my information for 1-click checkout"
//               name="saveInfo"
//               checked={formik.values.saveInfo} // Controlled checkbox from formik state
//               onChange={formik.handleChange} // Handling change with formik's `handleChange`
//             />
//           </div>

//           {/* Submit button */}
//           <Button
//             onPointerLeaveCapture={() => {
//               console.log("Pointer left the button");
//             }}
//             onPointerEnterCapture={() => {
//               console.log("Pointer entered the button");
//             }}
//             placeholder=""
//             type="submit"
//             className="payment-btn"
//             loading={loading}
//             disabled={loading}
//             fullWidth
//           >
//             {loading ? "Processing..." : "Add payment method"}
//           </Button>
//         </form>

//         {/* Footer text */}
//         <p className="footer-text">
//           By confirming your subscription, you allow RS Academy to charge your
//           card for this payment and future payments in accordance with their
//           terms. You can always cancel your subscription.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default PaymentMethod;
