import { Link } from "react-router-dom";
import prva from "../img/prva.jpeg";
import druga from "../img/druga.jpeg";
import Header from "./Header";

const About = () => {
  const title = "O nama";
  const subtitle = "Istinita prica";
  return (
    <div>
      <Header title={title} subtitle={subtitle} showbutton={false} />
      <section id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2
                className="section-heading text-uppercase center"
                style={{ textAlign: "center" }}
              >
                Picerija Palermo
              </h2>
              <h3 className="section-subheading text-muted">
                Jednom su pitali starog pizza majstora zbog čega je pizza iz
                peći na drva toliko ukusnija od ostalih. On je odgovorio “zbog
                truda”. Trud koji se uloži u pripremanje vatre i pizza koja se
                brzo peče, kako se nekada radilo, su neprocenjivi. Zato je tako
                pripremljena pizza najukusnija na svetu.
              </h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="timeline">
                <li>
                  <div
                    className="timeline-image"
                    style={{ height: 200, width: 200 }}
                  >
                    <img
                      class="circular--square"
                      src={prva}
                      style={{
                        height: 200,
                        width: 200,
                      }}
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-body">
                      <p className="text-muted">
                        Mi iz Picerije Palermo smo jako ponosni na našu hranu.
                        Vodimo računa na ono što ulazi u našu kuhinju i na ono
                        što izlazi iz nje. Sve počinje od namirnica – uvek
                        jednostavne i dobro pripremljene, a završava se furunom.
                        Koristimo jedino Divela brašno i testenine jer nismo
                        našli bolje. Naš pristup je jednostavan – originalna i
                        tradicionalna priprema italijasnke hrane i mi znamo da
                        Vi to možete osetiti.
                      </p>
                    </div>
                  </div>
                </li>
                <li className="timeline-inverted">
                  <div
                    className="timeline-image"
                    style={{ height: 200, width: 200 }}
                  >
                    <img
                      class="circular--square"
                      src={druga}
                      style={{ height: 200, width: 200 }}
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-body">
                      <p className="text-muted">
                        Verujemo da dobri ljudi prave dobra jela, da dobra jela
                        prave dobru atmosferu, da dobra atmosfera pravi dobre
                        ljude, dobri ljudi, dobra jela i tako u krug... Strast i
                        entuzijazam su kvaliteti koje nagrađujemo. Zato smo
                        sigurni da je Picerija Furuna Vaš pravi izbor..
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    className="timeline-image"
                    style={{ height: 200, width: 200 }}
                  >
                    <img
                      class="circular--square"
                      src={prva}
                      style={{ height: 200, width: 200 }}
                      alt=""
                    />
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-body">
                      <p className="text-muted">
                        Uvek smo radi da radimo sa novim kolegama i da primamo
                        ljude na obuke.
                      </p>
                    </div>
                  </div>
                </li>

                <li className="timeline-inverted">
                  <div className="timeline-image">
                    <h4>
                      Podelite
                      <br />
                      vaše
                      <br />
                      utiske!
                    </h4>
                    <Link className="btn btn-primary" to="/contact">
                      Pišite nam!
                    </Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
