import "../../styles/contact.style";
import { ContactContainer } from "../../styles/contact.style";
import phone from "../../assets/phoneB.svg";
import location from "../../assets/location.svg";
import send from "../../assets/send.svg";
import contactback from "../../assets/back-contact.jpg";
import { Box } from "@mui/system";
import emailjs from "@emailjs/browser";
import { Alert, Button, Snackbar, TextField } from "@mui/material";
import React from "react";
import { SnackbarCloseReason } from "@mui/joy";
import line from '../../assets/UnderLine.svg'
const ContactComponent = () => {
    const [open, setOpen] = React.useState(false);
    const [comment, setComment] = React.useState("");
    const [text, setText] = React.useState(""); 
    const [email, setEmail] = React.useState(""); 
    const [question, setQuestion] = React.useState(""); 
    const [severity, setSeverity] = React.useState<"success" | "error">(
        "success"
      );
      const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason
      ) => {
        if (reason === "clickaway") {
          return;
        }
        setOpen(false);
      };
    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
    
        emailjs
          .send(
            "service_edh9nur",
            "template_f8q8jo7",
            {
              user_name: text, // Map user_name correctly
              user_email: email, // Map user_email correctly
              user_comment: question, // Map user_comment correctly
            },
            "HXQh2x-TSbkcR5fhU"
          )
          .then(
            (result) => {
              console.log(result.text);
              setSeverity("success");
              setOpen(true);
              setText("");
              setEmail("");
              setQuestion("");
            },
            (error) => {
              console.error(error.text);
              setSeverity("error");
              setOpen(true);
            }
          );
      };
  return (
    <ContactContainer>
      <div className="contact-back">
        <h1>About Us</h1>
        <p>Home / About Us</p>
      </div>

      {/* Background End */}

      <div className="triple-squares">
        <div className="first-square">
          <img src={phone} alt="mouse-svg" />
          <h3>010 - 9560 - 0410</h3>
          <p>Accompanied By English Versions </p>
        </div>
        <div className="first-square">
          <img src={location} alt="mouse-svg" />
          <h3>Seoul,Goyang</h3>
          <p>Including Versions Of Lorem Ipsum</p>
        </div>
        <div className="first-square">
          <img src={send} alt="mouse-svg" />
          <h4>akhrorsadullayev@gmail.com</h4>
          <p>Including Versions Of Lorem Ipsum</p>
        </div>
      </div>

      <div className="message-con">
        <img src={contactback} alt="contact-background-img" />
        <div className="send">
            <h1>Send your Message</h1>
            <img src={line} alt="inderline-img" />
          <div style={{width:'100%'}}>
            <Box
              className="input-con"
              component="form"
              onSubmit={handleSend}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                borderRadius: "12px",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
                <div className="title-in">
                <TextField
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Your Name"
                required
                sx={{
                  borderRadius: "8px",
                  width:'100%',
                  "& .MuiOutlinedInput-root": { borderRadius: "8px" },
                }}
              />
              <TextField
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                required
                sx={{
                  borderRadius: "8px",
                  width:'100%',
                  "& .MuiOutlinedInput-root": { borderRadius: "8px" },
                }}
              />
                </div>
                
              <TextField
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="Your Message"
                required
                multiline
                rows={5}
                sx={{
                  borderRadius: "8px",
                  width:'100%',
                  "& .MuiOutlinedInput-root": { borderRadius: "8px" },
                }}
              />
              <Button
                type="submit"
                variant="contained"
                sx={{
                  backgroundColor: "#7F4D4F",
                  borderRadius: "25px",
                  color: "#fff",
                  textAlign:'center',
                  padding: "12px 24px",
                  width:'300px',
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#5f3a3b" },
                }}
              >
                SEND YOUR MESSAGE
              </Button>
            </Box>

            {/* Snackbar for success or error message */}
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity={severity}
                variant="filled"
                sx={{ width: "100%" }}
              >
                {severity === "success"
                  ? `Email sent successfully!
                  Name: ${text}
                  Email: ${email}
                  Message: ${comment}`
                  : "Failed to send email."}
              </Alert>
            </Snackbar>
          </div>
        </div>
      </div>
      <div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.01954816177!2d126.96907207610455!3d37.55460322481192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3e3564c132f%3A0xe51f94b3ae4bff12!2z0KHQtdGD0LvRjNGB0LrQuNC5INCy0L7QutC30LDQuw!5e0!3m2!1sru!2skr!4v1736268130716!5m2!1sru!2skr" style={{width:'100%',height:'800px',marginBottom:'-25px'}}  ></iframe>
      </div>
    </ContactContainer>
  );
};

export default ContactComponent;
