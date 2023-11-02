/*
 * You can run this program from the terminal below with:
 *    node exercise-02
 *
 */

import { OpenAI } from 'openai';

const openai = new OpenAI();

const invoice = `accenture\nA\nFACTURA\nCódigo Nro. 01\nN: 0014-00000805\nACCENTURE S.R.L.\n24 DE NOVIEMBRE 2120\nBuenos Aires,\n31/08/2023\n(1242) - Ciudad Autónoma de Buenos Aires\nFecha Venc. Factura:\n30/09/2023\nTel .: 4318-8500 - Fax: 4318-8555\nInicio de Actividades: 27/05/1960\nIVA Responsable Inscripto\nIngresos Brutos C.M .: 901-935144-2\nC.U.I.T .: 33-61000618-9\nLA CARDEUSE S A\nI.V.A .:\nRESPONSABLE INSCRIPTO\nCarlos Pelegrini 3422 Lanus 1824\nCUIT Nº:\n33644471069\n30 DIAS FECHA FACTURA\nServivio de Vtex\n$\n274.993,00\nCONCEPTOS GRAVADOS\n: $\n274.993,00\nCONCEPTOS NO GRAVADOS\n: $\n0,00\nSUBTOTAL\n: $\n274.993,00\nI.V.A. INSCRIPTO\n-21%- % $\n57.748,53\nI.V.A. NO INSCRIPTO\n% $\n0,00\nI.V.A. PERCEPCION\n% $\n8249,79\nIIBB Pcia de Bs As\n% $\n5499,86\nIIBB Pcia de Sta Fe\n% $\nIIBB Capital Federal\n% $\n1374,97\nROGAMOS EMITIR CHEQUES A NOMBRE DE ACCENTURE S.R.L - NO A LA ORDEN\nTOTAL\n$\n347.866,15\nEste comprobante ha sido emitido por COMFIAR\nC.A.E. Nº 73369059518347\nel software de facturación electrónica de APG Consulting SRL.\nwww.comfiar.com.ar\nFecha de Vto. del C.A.E.\n10/09/2023`;

console.info('FINISHED!!!');
