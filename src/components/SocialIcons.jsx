
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => {
    const iconList = [
        {
          url: "https://www.linkedin.com/company/karin-ljunggren-web-services",
          icon: faLinkedin,
          ariaLabel: "Karin Ljunggren Linkedin",
          text: "Linkedin",
        }

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