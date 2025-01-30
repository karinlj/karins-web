import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobileScreenButton, faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
<FontAwesomeIcon icon="fa-regular fa-envelope" />
        const contactList = [
            {
                url: "",
                urlText: "",
                icon: faLocationDot,
                ariaLabel: "Karin Ljunggren position",
                text: "Jag finns i Kungälv utanför Göteborg, men allt arbete sker vanligtvis på distans.",
              },
            {
              url: "mailto: kaljunggren@gmail.com",
              urlText: "kaljunggren@gmail.com",
              icon: faEnvelope,
              ariaLabel: "Karin Ljunggren email",
              text: "Skriv till mig",
            },
            {
              url: "tel:+46768514619",
              urlText: "+46768514619",
              icon: faMobileScreenButton,
              ariaLabel: "Karin Ljunggren tel",
              text: "Slå en signal",
            },
          ];



    return (      
    <ul className="contact_ways">
         {contactList.map((item, index) => {
          return (
            <li className="contact_ways_item" key={index}>
                <p>
                <span className="link_icon">
                  {" "}
                  <FontAwesomeIcon icon={item.icon} />
                  </span> 
                  <span>{item.text}</span>
                </p>
              <a
                href={item.url}
                target="_top"
                aria-label={item.ariaLabel}
                className="section_link"
              >
            {item.urlText}
              </a>
            </li>
          );
        })}
      </ul> );
}
 
export default Contact;