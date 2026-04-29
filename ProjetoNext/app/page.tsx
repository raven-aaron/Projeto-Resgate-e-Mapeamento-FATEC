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
        
        
      </Container>
    </div>
  );
}
