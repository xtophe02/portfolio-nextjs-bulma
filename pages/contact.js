import Layout from "../components/layout";
import { useRouter } from "next/router";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail, MdSubject, MdSend } from "react-icons/md";
import ReCAPTCHA from "react-google-recaptcha";

import { useLottie } from "lottie-react";
import lottieAnimation from "../public/contact.json";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactPage() {
  const router = useRouter();
  const options = {
    animationData: lottieAnimation,
    loop: true,
    autoplay: true,
  };
  const { View } = useLottie(options);

  const handleForm = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { message, name, email, subject } = Object.fromEntries(
      formData.entries()
    );

    const res = await fetch("/api/send-email", {
      body: JSON.stringify({
        email,
        name,
        subject,
        message,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();
    if (error) {
      console.log(error);
      return;
    }
    toast.success(
      "Thanks for your contact, the site administrator, will contact you shortly!"
    );
    router.push("/videos");
    //     return { statusCode: 200, body: JSON.stringify(data) };
  };
  return (
    <Layout>
      <section className="section hero container">
        <div className="hero-body">
          <p className="title  has-text-white">Get in touch</p>
          <p className="subtitle  has-text-light">
            &ldquo;don&apos;t take anything personal&rdquo;
          </p>
        </div>
        <div className="columns is-vcentered">
          <div className="column">{View}</div>
          <div className="column">
            {" "}
            <form onSubmit={handleForm}>
              <div className="field">
                <label className="label has-text-light">Name</label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    type="text"
                    placeholder="Your name"
                    name="name"
                  />
                  <span className="icon is-small is-left">
                    <BsPerson />
                  </span>
                </div>
              </div>

              <div className="field">
                <label className="label has-text-light">Email</label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    name="email"
                    type="email"
                    placeholder="jonh.doe@example.com"
                  />
                  <span className="icon is-small is-left">
                    <MdOutlineEmail />
                  </span>
                </div>
              </div>
              <div className="field">
                <label className="label has-text-light">Subject</label>
                <div className="control has-icons-left">
                  <input
                    className="input"
                    name="subject"
                    type="text"
                    placeholder="Your motive of contact"
                  />
                  <span className="icon is-small is-left">
                    <MdSubject />
                  </span>
                </div>
              </div>

              <div className="field">
                <label className="label has-text-light">Message</label>
                <div className="control ">
                  <textarea
                    className="textarea"
                    name="message"
                    placeholder="Leave your message"
                  ></textarea>
                </div>
              </div>

              <div className="field is-grouped-right is-grouped">
                <ReCAPTCHA
                  size="normal"
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SECRET}
                />
                <div className="control">
                  <button className="button is-primary">
                    <span className="icon">
                      <MdSend />
                    </span>
                    <span>Send</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
}

// export async function getStaticProps(context) {
//   // import sgMail from "@sendgrid/mail";
//   const sgMail = require("@sendgrid/mail");
//   sgMail.setApiKey(process.env.SENDGRID_APIKEY);
//   return {
//     props: { sgMail }, // will be passed to the page component as props
//   };
// }
