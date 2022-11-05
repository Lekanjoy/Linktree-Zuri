import React from "react";
import Profile from "./Profile";
import Button from "./Button";
import Socials from "./Socials";
import Footer from "./Footer";
import ButtonLink from "./ButtonLink";

const Home = () => {
  return (
    <div className="font-sans App px-4 py-16 w-full h-auto md:px-36">
      <Profile />
      <main id="links_section" className="mb-4h">
        <Button
          id="btn_twitter"
          href="https://twitter.com/Olalaykun"
          text="Twitter Link"
        />{" "}
        <Button
          id="btn__zuri"
          href="https://training.zuri.team/"
          text="Zuri Team"
        />{" "}
        <Button
          id="books"
          href="https://books.zuri.team/"
          text="Zuri Books"
          title="Find amazing books here about design and coding"
        />
        <Button
          id="book__python"
          href="https://books.zuri.team/python-for-beginners?ref_id=Lekanjoy"
          text="Python Books"
        />
        <Button
          id="pitch"
          href="https://background.zuri.team"
          text="Background Check for Coders"
          title="Be confident about who you pay to work!"
        />
        <Button
          id="book__design"
          href="https://books.zuri.team/design-rules"
          text="Design Books"
        />
        <ButtonLink id="contact" text="Contact Me" to='/contact'/>
      </main>
      <Socials />
      <Footer />
    </div>
  );
};

export default Home;
