import React, { useRef } from 'react';
import {
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';

// npm install react-native-card-flip
import CardFlip from 'react-native-card-flip';

const ComponenteFlip = (props) => {

  let ancho_pantalla = Dimensions.get('window').width;
  let alto_pantalla = Dimensions.get('window').height;
  let widthCard=ancho_pantalla/2-10;// buscar la propiedad de obtener tama;o de pantalla
  let heightCard=alto_pantalla/2-150;
  const flipcard = useRef();
  const {carrera} = props; //estamos usando destructurar en props (Es como cuando importamos un componente especifico)
  return (
    <CardFlip ref={flipcard} style={{ width: widthCard, height: heightCard }}>
      <TouchableOpacity
        style={{
          width: widthCard,
          height: heightCard,
          backgroundColor: '#333',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 20,
          borderRadius: 10,
        }}
        onPress={() => flipcard.current.flip()}
      >
        <Text
          style={{ textAlign: 'center', color: '#fff', fontSize: 12 }}
          
        >
          {carrera}
        </Text>
        <Text style={{ color: '#fff', marginTop: 14, fontSize: 10, textAlign: 'center' }}>
          (Click for answer)
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: widthCard,
          height: heightCard,
          backgroundColor: '#f1f3f6',
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 10,
          borderRadius: 10,
        }}
        onPress={() => flipcard.current.flip()}
      >
        <Text
          style={{ textAlign: 'center', color: '#333', fontSize: 10 }}
        >
          <Text style={{ fontWeight: 'bold' }}>Answer:</Text> El Ingeniero Sistemas Computacionales es un profesional que puede prestar sus servicios en cualquier organización productiva de bienes y servicios, de los sectores público, privado y social. De igual forma estará capacitado para desempeñarse de manera independiente, prestando sus servicios profesionales en todo lo relacionado a Creación, Mantenimiento, Desarrollo de aplicaciones así como la adquisición, mantenimiento de equipo, creación de sistemas de redes, y Comunicación y la utilización de la Multimedia en su desarrollo profesional
        </Text>
      </TouchableOpacity>
    </CardFlip>
  )
}

export default ComponenteFlip;