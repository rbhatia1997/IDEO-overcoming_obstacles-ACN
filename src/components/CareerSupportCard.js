import React from "react";
import { useButton } from "@react-aria/button";
import { useHistory } from "react-router-dom"; // Necessary for going to different page.
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import styles from "./CareerSupportCard.module.css";

// Using React Aria's Button.
// Taken from: https://react-spectrum.adobe.com/react-aria/useButton.html
// React Aria enables assistive tools to better utilize the website functionality.

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

function Button(props) {
  let { children } = props;
  let { buttonProps, isPressed } = useButton({
    ...props,
    elementType: "span",
  });

  return (
    <span
      {...buttonProps}
      style={{
        background: isPressed ? "#4D0FAD" : "white", // implementation of state! Also, WGAC compliant.
        color: "#4D0FAD",
        padding: 10,
        justifyContent: "center",
        display: "flex",
        cursor: "pointer",
        userSelect: "none",
        WebkitUserSelect: "none",
      }}
    >
      {children}
    </span>
  );
}

export default function ImgMediaCard2() {
  const history = useHistory(); // Utilizing this to navigate to the career-support page.
  const classesGrid = useStyles();

  return (
    <div className={classesGrid.root}>
      <Grid container spacing={2}>
        <Grid justify="space-between" item xs={12} sm={6}>
          <Paper className={classesGrid.paper}>
            <img
              src={"/images/CareerSupport1.png"}
              alt="Accenture Logo with the word 'ENABLE' in bold"
            />
            <h1 className={styles.header}>
              {" "}
              Assistance with Career Applications
            </h1>
            <h2 className={styles.nonheader}>
              {" "}
              Need help getting started with your application? We can help -
              let's see what we can do!
            </h2>
            <h2 className={styles.nonheader}>
              Clicking the button below will take you to a 508-compliant,
              screen-reader friendly application page.
            </h2>
            <p>
              <Button onClick={() => history.push("/app-assist")}>
                Click Here to Navigate to Accessible Application Page.
              </Button>
            </p>
            <h2 className={styles.nonheader2}>
              {" "}
              Assistance with Application Submission/FAQs{" "}
            </h2>
            <p>
              <Button onClick={() => history.push("/help")}>
                Click Here for Assistance with Application Submission
              </Button>
            </p>
          </Paper>
        </Grid>
        <Grid justify="space-between" item xs={12} sm={6}>
          <Paper className={classesGrid.paper}>
            <h1> Career Support Resources </h1>
            <h2>
              {" "}
              Scroll below to find out more about the resources that we have for
              PWDs and what it's like to work here!{" "}
            </h2>
            <Grid container spacing={3}>
              <Grid item>
                <img
                  height="100"
                  width="auto"
                  src={"/images/CareerSupport2.jpg"}
                  alt="Group of people working at a table."
                />
                <p className={styles.paragraph}>
                  {" "}
                  Inclusion and diversity are fundamental to Accenture's culture
                  and core values. We believe that no one should be
                  discriminated against because of their differences, such as
                  age, disability, ethnicity, gender, gender identity and
                  expression, religion or sexual orientation. Learn more at the
                  links below.{" "}
                </p>
              </Grid>
              <Grid item xs>
                <img
                  height="100"
                  width="auto"
                  src={"/images/CareerSupport3.jpg"}
                  alt="Group of people working at a table."
                />
                <p className={styles.paragraph}>
                  We have an unwavering commitment to diversity, with the aim
                  that each of our people has a full sense of belonging within
                  our organization. As a business imperative, every person at
                  Accenture has the responsibility to create and sustain an
                  inclusive environment.
                </p>
              </Grid>
              <Grid item xs>
                <img
                  height="100"
                  width="auto"
                  src={"/images/CareerSupport4.jpg"}
                  alt="Flags of various countries: USA, Mexico, and Canada."
                />
                <p className={styles.paragraph}>
                  Accenture believes that government laws, regulations and
                  business practices should uphold the principles of diversity,
                  inclusion and equality. While laws may vary in the countries
                  where Accenture operates, we remain committed to an inclusive
                  and diverse workplace—where people can be who they are and be
                  their best, professionally and personally.
                </p>
              </Grid>
            </Grid>
          </Paper>
          <h2> Helpful Links </h2>
          <ul>
            <li className={styles.nobullets}>
              <a
                href="https://in.accenture.com/inclusionanddiversity/pwd/"
                target="_blank"
                class="link"
              >
                Global Enablement (opens in a new window)
              </a>
            </li>
            <li className={styles.nobullets}>
              <a
                href="https://in.accenture.com/inclusionanddiversity/"
                target="_blank"
                class="link"
              >
                Global Inclusion & Diversity Circle (opens in a new window)
              </a>
            </li>
            <li className={styles.nobullets}>
              <a
                href="https://circles.accenture.com/38B4257A-0B4A-4F36-A24C-97E6A089A972?tab=home"
                target="_blank"
                class="link"
              >
                US Inclusion & Diversity Circle (opens in a new window)
              </a>
            </li>
            <li className={styles.nobullets}>
              <a
                href="https://in.accenture.com/accessibility/local-erg/"
                target="_blank"
                class="link"
              >
                Inclusion & Diversity Circles in Other Locations (opens in a new
                window){" "}
              </a>
            </li>
          </ul>
        </Grid>
      </Grid>
    </div>
  );
}
