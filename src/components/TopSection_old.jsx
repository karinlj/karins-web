
import { Link} from "react-router-dom";

const TopSection = () => {
    return ( <section className="top_section">
        <div className="container">
          <h2 className="heading_3">Ny hemsida</h2>
        </div>
        <section className="content_section large_text white">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-12 col-lg-6 col-xl-8">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim repellendus quisquam porro eaque? Amet quis sapiente obcaecati. Deserunt, culpa tenetur eligendi ex laudantium repellat id modi similique, neque ducimus recusandae?
                </p>
                {/* {aboutData ? (
                  <>
                    <div>
                      {aboutData ? documentToReactComponents(content) : ""}
                    </div>
                  </>
                ) : (
                  ""
                )} */}
              </div>
              <div className="col-12 col-lg-6 col-xl-4">
                <div className="styled_card pict">image
                  <img
                    src={"https://karinljunggren.com/_next/image?url=https%3A%2F%2Fimages.ctfassets.net%2Fur7uztfvjy80%2F5CnWFdJYqj6HrCJQ5jscDU%2F7fb8e5f58e205f85803a13eaf9c4b8ed%2Fme.jpg&w=2048&q=75"}
                    alt="picture of Karin"
                    className="me_pict"
             
                  />
                  <p className="me_pict_caption">mePictTitle</p>
                </div>
              </div>
            </div>
            <p className="home_links">
              Take a look at my {" "}
              <Link href={`/`} className="projects_link">
                {" "}
                Client Projects
              </Link>{" "}
              or my{" "}
              <Link href={`/`} className="projects_link">
                {" "}
                Personal Projects
              </Link>
            </p>
          </div>
        </section>
      </section> );
}
 
export default TopSection;