'use client'
import { Button, Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { useRouter } from 'next/navigation';
import styles from './page.module.css'

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <Container>
        <h1 className={styles.tituloDestaque}>PERDI O MEU PET</h1> <br /><br />
        <section className="container mt-5">
            <Row>
              <Col>
                  <div className="row align-items-center">
                    <div className="col-md-7 item-1">
                      <div className={styles.textos}>
                        <p> Por meio de um mapa interativo, é possível cadastrar animais que seus tutores perderam 
                        ou pets que foram encontrados, permitindo que as informações fiquem disponíveis de 
                        forma rápida e acessível para todos.</p> 
                      </div>

                      <div className="text-center">
                        <a href="registro-USER.html" className={`btn ${styles.btnCustom}`}>PERDI MEU PET</a>
                        <a href="registro-USER.html" className={`btn ${styles.btnCustom}`}>ENCONTREI UM PET</a>
                      </div>
                    </div>
                    <div className="col-md-5 item-2 text-center">
                        <img id="cachorrogato" src="/assets/img/cachorrogatoinicial.jpg" className={`img-fluid  ${styles.imgBordaPadrao}`} />
                    </div>
                  </div>
              </Col>
            </Row>
        </section>
        <section className="container mt-5 mb-5">
            <br /><br /><br />
            <h1 className={`${styles.tituloDestaque}`}>O MAPA E RESGATES</h1> <br /><br />

            <div className="row align-items-center flex-md-row-reverse">
                <div className="col-md-7 item-4">
                    <div className={styles.textos}>
                        <p>Quando um animal é sinalizado no sistema, a equipe de responsável avalia a situação e realiza o resgate 
                        quando necessário. Assim, garantimos que nenhum pet fique desamparado, seja para devolução ao tutor ou 
                        para acolhimento temporário seguro.</p>
                    </div>

                     <div className="text-center">
                        <a href="mapa-interativo.html" className={`btn ${styles.btnCustom}`}>ACESSE O MAPA</a>
                    </div>
                    
                </div>

                <div className="col-md-5 item-3 text-center">
                    <img id="cachorrogato2" src="assets/img/cachorrogato2.jpg" className={`img-fluid ${styles.imgBordaPadrao}`} />
                </div>
            </div>
        </section>
      </Container>
    </div>
  );
}
