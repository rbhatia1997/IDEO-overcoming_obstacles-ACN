import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useButton } from "@react-aria/button";
import { useHistory } from "react-router-dom"; // Necessary for going to different page.
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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

const useStylesGrid = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100vh",
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: "black",
  },
}));

function AppAssistPage() {
  const history = useHistory(); // Utilizing this to navigate to the career-support page.

  const classesGrid = useStylesGrid();

  // For React PDF
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <div className={classesGrid.root}>
      <Grid>
        <Grid item xs={12}>
          <Paper className={classesGrid.paper}>
            <h1> Requesting an Accomodation </h1>
            <p style={{ margin: 30 }}>
              Accenture is committed to providing equal employment opportunities
              for persons with disabilities or religious observances, including
              reasonable accommodation when needed. If you are hired by
              Accenture and require accommodation to perform the essential
              functions of your role, you will be asked to participate in our
              reasonable accommodation process. Accommodations made to
              facilitate the recruiting process are not a guarantee of future or
              continued accommodations once hired. If you would like to be
              considered for employment opportunities with Accenture and have
              accommodation needs for a disability or religious observance,
              please call us toll free at 1 (877) 889-9009, send us an email, or
              speak with your recruiter.
            </p>
            <a
              href="https://www.accenture.com/us-en/about/contact-us"
              target="_blank"
              class="link"
            >
              Click here to Find Accenture Contact Info [Phone Numbers, Emails,
              etc.] (opens in a new window)
            </a>
            <div>
              <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: "100vh" }}
                item
                xs={12}
              >
                <Document
                  file="/images/Policy.pdf"
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  <Page pageNumber={pageNumber} />
                </Document>
                <p>
                  Page {pageNumber} of {numPages}
                </p>
              </Grid>
            </div>
            <Button onClick={() => history.push("/career-support")}>
              Click Here to Navigate Back to Career Support
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default AppAssistPage;
