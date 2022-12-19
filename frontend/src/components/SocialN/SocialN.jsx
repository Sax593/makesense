import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";
import "./Style.scss";

export default function SocialN() {
  return (
    <div className="socialRubber">
      <a
        id="facebook"
        className="social"
        href="https://www.facebook.com/makesensefrance"
      >
        <BsFacebook />
      </a>
      <a
        id="instagram"
        className="social"
        href="https://www.instagram.com/makesensefr/"
      >
        <BsInstagram />
      </a>
      <a
        id="twitter"
        className="social"
        href="https://twitter.com/makesense?lang=fr"
      >
        <BsTwitter />
      </a>

      <a
        id="youtube"
        className="social"
        href="https://www.youtube.com/channel/UC9AC_vydxKONO4EMQfsfMWQ"
      >
        <BsYoutube />
      </a>
      <a
        id="linkedin"
        className="social"
        href="https://www.linkedin.com/company/makesense/?originalSubdomain=fr"
      >
        <BsLinkedin />
      </a>
    </div>
  );
}
