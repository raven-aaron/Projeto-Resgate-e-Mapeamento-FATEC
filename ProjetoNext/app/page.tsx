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
        <Row>
          <Col>
              <h1 className={styles.tituloDestaque}>PERDI O MEU PET</h1> <br /><br />
              <div className="row align-items-center">
                <div className="col-md-7 item-1">
                  <div className="textos">
                    <p> Por meio de um mapa interativo, é possível cadastrar animais que seus tutores perderam 
                    ou pets que foram encontrados, permitindo que as informações fiquem disponíveis de 
                    forma rápida e acessível para todos.</p> 
                  </div>

                  <div className="text-center">
                    <Button variant='primary' onClick={() => router.push('/dashboard')}/*caminho registro-USER.html*/>PERDI MEU PET</Button>
                    <br /><br />
                    <Button variant="primary" onClick={() => router.push('/dashboard')} /*caminho registro-USER.html*/>ENCONTREI UM PET</Button>
                  </div>
                </div>
              </div>
          </Col>
        </Row>
        
      </Container>
    </div>
  );
}
