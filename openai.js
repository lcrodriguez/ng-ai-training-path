/*
 * You can run this program from the terminal below with:
 *    node openai
 */

import { OpenAI } from 'openai';

const openai = new OpenAI({
  apiKey: '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',
});

const content = `accenture\nA\nFACTURA\nCódigo Nro. 01\nN: 0014-00000805\nACCENTURE S.R.L.\n24 DE NOVIEMBRE 2120\nBuenos Aires,\n31/08/2023\n(1242) - Ciudad Autónoma de Buenos Aires\nFecha Venc. Factura:\n30/09/2023\nTel .: 4318-8500 - Fax: 4318-8555\nInicio de Actividades: 27/05/1960\nIVA Responsable Inscripto\nIngresos Brutos C.M .: 901-935144-2\nC.U.I.T .: 33-61000618-9\nLA CARDEUSE S A\nI.V.A .:\nRESPONSABLE INSCRIPTO\nCarlos Pelegrini 3422 Lanus 1824\nCUIT Nº:\n33644471069\n30 DIAS FECHA FACTURA\nServivio de Vtex\n$\n274.993,00\nCONCEPTOS GRAVADOS\n: $\n274.993,00\nCONCEPTOS NO GRAVADOS\n: $\n0,00\nSUBTOTAL\n: $\n274.993,00\nI.V.A. INSCRIPTO\n-21%- % $\n57.748,53\nI.V.A. NO INSCRIPTO\n% $\n0,00\nI.V.A. PERCEPCION\n% $\n8249,79\nIIBB Pcia de Bs As\n% $\n5499,86\nIIBB Pcia de Sta Fe\n% $\nIIBB Capital Federal\n% $\n1374,97\nROGAMOS EMITIR CHEQUES A NOMBRE DE ACCENTURE S.R.L - NO A LA ORDEN\nTOTAL\n$\n347.866,15\nEste comprobante ha sido emitido por COMFIAR\nC.A.E. Nº 73369059518347\nel software de facturación electrónica de APG Consulting SRL.\nwww.comfiar.com.ar\nFecha de Vto. del C.A.E.\n10/09/2023`;

const response = await openai.chat.completions.create({
  model: 'gpt-3.5-turbo-16k',
  messages: [
    {
      role: 'system',
      content: `
          Tu eres un asistente inteligente que procesa facturas especialista en impuestos de Argentina y 
          unicamente sabes responder en formato JSON de la siguiente factura:\n\n${content}`,
    },
    {
      role: 'assistant',
      content: `
              Por favor retornar los impuestos de esta factura en formato JSON en un arreglo (Array) con la clave "parsedTaxes" con el siguiente formato cada item:

              {
                  "key": {
                      "content": ***IMPUESTO***,
                      "state": ***STATE***
                  },
                  "value": {
                      "content": ***MONTO***
                  }
              }

              donde el ***IMPUESTO*** debe incluir el impuesto tal como aparece con su porcentaje y
              donde el ***STATE*** debe inferir la provicina del impuesto anterior y 
              donde el ***MONTO*** debe incluir el monto en formato texto segun la localizacion de es-AR`,
    },
  ],
  temperature: 0,
  max_tokens: 8040,
  top_p: 1,
  frequency_penalty: 0,
  presence_penalty: 0,
});

const data = response.choices[0].message.content;

// run `node index.js` in the terminal
console.log(response);
console.log(data);

console.info('FINISHED!!!');
