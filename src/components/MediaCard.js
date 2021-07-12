import React from "react";
import { useButton } from "@react-aria/button";
import { useHistory } from "react-router-dom"; // Necessary for going to different page.

// Using React Aria's Button.
// Taken from: https://react-spectrum.adobe.com/react-aria/useButton.html
// React Aria enables assistive tools to better utilize the website functionality.

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

export default function ImgMediaCard() {
  const history = useHistory(); // Utilizing this to navigate to the career-support page.

  return (
    <div>
      <h1> Work at the Heart of Change </h1>
      <p>
        At the heart of every great change is a great human. If you have ideas,
        ingenuity and a passion for making a difference, come and be a part of
        our team. Every day around the world, we work with exceptional people,
        the latest and greatest tech and leading companies across industries.
        Together, let's create positive, long-lasting change.
      </p>
      <p>
        <video
          loop
          autoPlay
          style={{
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            height: "auto",
            width: "auto",
          }}
        >
          <source
            src={"/images/MainPage2.mp4"}
            type="video/mp4"
            alt="Looped video of model smiling in front of a purple background."
          />
        </video>
      </p>

      <h1> Explore Careers </h1>
      <p>
        From entry-level to leadership, across all business and industry
        segments, our people harness technology, see value in every direction
        and add value in every direction for our clients and communities.​ See
        how we make a difference, every day.​ Click the button below to navigate
        to our career support page and find the perfect role for you!
      </p>
      <footer>
        <Button onClick={() => history.push("/career-support")}>
          Click Here to Navigate to Career Support
        </Button>
      </footer>
    </div>
  );
}
