import React from "react";
import emailjs from "@emailjs/browser";
import { Formik, Form, FastField, ErrorMessage } from "formik";
import Recaptcha from "react-google-recaptcha";
import * as Yup from "yup";
import { Button, Input } from "../../../components";
import { Error, Center, InputField } from "./styles";

export const ContactForm = () => (
  <Formik
    initialValues={{
      name: "",
      email: "",
      subject: "",
      message: "",
      recaptcha: "",
      success: false,
    }}
    validationSchema={Yup.object().shape({
      name: Yup.string().required("Full name field is required"),
      email: Yup.string()
        .email("Invalid email")
        .required("Email field is required"),
      subject: Yup.string().required("Subject field is required"),
      message: Yup.string().required("Message field is required"),
      recaptcha: Yup.string().required("Robots are not welcome yet!"),
    })}
    onSubmit={(
      { name, email, subject, message },
      { setSubmitting, resetForm, setFieldValue }
    ) => {
      const data = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };

      emailjs
        .send(
          process.env.REACT_APP_EMAILJS_SERVICE_ID,
          process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
          data,
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then(
          () => {
            setSubmitting(false);
            setFieldValue("success", true);
            setTimeout(() => resetForm(), 6000);
          },
          (error) => {
            setSubmitting(false);
            setFieldValue("success", false);
            console.log(error.text);
            alert("Something went wrong, please try again!"); // eslint-disable-line
          }
        );
    }}
  >
    {({ values, touched, errors, setFieldValue, isSubmitting }) => (
      <Form>
        <InputField>
          <Input
            as={FastField}
            type="text"
            name="name"
            component="input"
            aria-label="name"
            placeholder="Full name*"
            error={touched.name && errors.name}
          />
          <ErrorMessage component={Error} name="name" />
        </InputField>
        <InputField>
          <Input
            id="email"
            aria-label="email"
            component="input"
            as={FastField}
            type="email"
            name="email"
            placeholder="Email*"
            error={touched.email && errors.email}
          />
          <ErrorMessage component={Error} name="email" />
        </InputField>
        <InputField>
          <Input
            id="subject"
            aria-label="subject"
            component="input"
            as={FastField}
            type="subject"
            name="subject"
            placeholder="Subject*"
            error={touched.subject && errors.subject}
          />
          <ErrorMessage component={Error} name="email" />
        </InputField>
        <InputField>
          <Input
            as={FastField}
            component="textarea"
            aria-label="message"
            id="message"
            rows="8"
            type="text"
            name="message"
            placeholder="Message*"
            error={touched.message && errors.message}
          />
          <ErrorMessage component={Error} name="message" />
        </InputField>
        {values.name && values.email && values.subject && values.message && (
          <InputField>
            <FastField
              component={Recaptcha}
              sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
              name="recaptcha"
              onChange={(value) => setFieldValue("recaptcha", value)}
            />
            <ErrorMessage component={Error} name="recaptcha" />
          </InputField>
        )}
        {values.success && (
          <InputField>
            <Center>
              <h4>
                Your message has been successfully sent, I will get back to you
                ASAP!
              </h4>
            </Center>
          </InputField>
        )}
        <Center>
          <Button secondary type="submit" disabled={isSubmitting}>
            Submit
          </Button>
        </Center>
      </Form>
    )}
  </Formik>
);
