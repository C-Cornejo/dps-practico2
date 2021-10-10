import  React, {useEffect, useState } from 'react';
import { 
        View,
        Text,
        TouchableOpacity,
        StyleSheet,
        TextInput,
     }from 'react-native';
import OcultarTeclado from './../utils/OcultarTeclado';


const FrmDivision = (props) =>
{   
    const {setV1,setV2,operar} = props;
    return(
    <>
        <TextInput onChange={e=>{setV1(parseFloat(e.nativeEvent.text))}} style={styles.txtValores} placeholder="Primer valor"  keyboardType='numeric'/>
        <TextInput onChange={e=>{setV2(parseFloat(e.nativeEvent.text))}} style={styles.txtValores} placeholder="Segundo valor" keyboardType='numeric'/>
        <TouchableOpacity style={styles.btnCalcular} onPress={operar}>
            <Text style={styles.textBtnCalcular}>Calcular</Text>
        </TouchableOpacity>
    </>
    );
}

const ResultArea = (props) =>
{
    const {respuesta,error} = props;
    return(
        <>  
            <Text style={styles.lblError}>{error}</Text>
            <Text style={styles.lblResultado}>La respuesta es:</Text>
            <Text numberOfLines={2} style={styles.lblResultado}>{respuesta}</Text>
        </>
        );
}

export default function Division(props)
{   
    const [v1,setV1]                = useState(0);
    const [v2,setV2]                = useState(0);
    const [respuesta,setRespuesta]  = useState(0);
    const [error,setError]          = useState("");

    const{navigation} = props;
    useEffect(()=>
    {
        if((!v1 && !v2) || !v1 || !v2)
        {  
           if(v2 === 0)
           {
                reset();
                setError('El divisor no puede ser cero');
           }
           else
           {
              reset();
            setError("Debe completar todos los datos"); 
           }
            
        }
        else
        {
            reset();
        }
    });    
      function reset ()
      {
         setError("");
      }
      const operar = ()=>
    {   
          if(v1 && v2)
          {
            if(v2 !== 0)
            {
                let r = v1 / v2;
                setRespuesta(r.toFixed(3));
                reset();
            }
            else
            {
                reset();
                setError('El divisor no puede ser cero');
            }
          }
          else
          {   
              reset();
              setError("Debe completar todos los datos");
          }
    }// fin de operar

        return(
            <OcultarTeclado>
                <View> 
                    <FrmDivision setV1={setV1} setV2={setV2} operar={operar} />
                    <ResultArea respuesta={respuesta} error={error}/>   
                </View>
            </OcultarTeclado>
    );
    
    
  

}// fin de Division

    const styles = StyleSheet.create({
        btnCalcular: {  // boton dentro del formulario
            backgroundColor: '#1d3354',
            width:'65%',
            height: '20%',
            alignSelf: 'center',
            borderRadius : 7, 
            justifyContent:'center',
            marginTop: 15,
        },
        textBtnCalcular: {  // texto dentro del boton calcular
            justifyContent: 'center',
            marginHorizontal: 'auto',
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: 32,
            //color: '#d64045'
            color: '#18a999'
        },
        lblResultado:{
           color: '#d64045',
           fontSize: 30,
           fontWeight: 'bold',
           textAlign: 'center',
           marginVertical: '3%',
        },
        txtValores: // controles de textInput
        {
            alignSelf: 'center',
            marginTop: '10%',
            width: '85%',
            borderRadius: 5,
            borderWidth: 2,
            borderColor: '#18a999',
            lineHeight:24,
            fontSize: 18,
            color: '#d64045'
        },
        lblError: 
        {
            color: '#d64045',
           fontSize: 18,
           fontWeight: 'bold',
           textAlign: 'center',
      
        }
    });

