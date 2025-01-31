
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => {
    const iconList = [
        {
          url: "https://se.linkedin.com/in/karin-ljunggren",
          icon: faLinkedin,
          ariaLabel: "Karin Ljunggren Linkedin",
          text: "Linkedin",
        },
        {
          url: "https://www.facebook.com/profile.php?id=100006940382615",
          icon: faFacebookSquare,
          ariaLabel: "Karin Ljunggren Facebook",
          text: "Facebook",
        },
      ];

    return (     
    <ul className="social_link_list">
        {iconList.map((item, index) => {
          return (
            <li className="social_link_list_item" key={index}>
              <a
                href={item.url}
                target="_top"
                aria-label={item.ariaLabel}
                className="link"
              >
                <span className="link_icon">
                  {" "}
                  <FontAwesomeIcon icon={item.icon} />
                  </span>
              </a>
            </li>
          );
        })}
      </ul> );
}
 
export default SocialIcons;