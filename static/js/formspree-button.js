window.formbutton=window.formbutton||function(){(formbutton.q=formbutton.q||[]).push(arguments)};
/* customize formbutton below*/
formbutton("create", {
action: "https://formspree.io/f/myyqjbye",
title: "Submit Enquiry",
fields: [
  {
    type: "email",
    label: "Email:",
    name: "email",
    required: true,
    placeholder: "your@email.com"
  },
  {
    type: "textarea",
    label: "Message:",
    name: "message",
    placeholder: "How can we help?"
  },
  { type: "submit" }
],
styles: {
  title: {
    backgroundColor: "gray"
  },
  button: {
    backgroundColor: "gray"
  }
}
});
